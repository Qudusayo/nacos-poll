"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

type AuthenticatedUser = {
	matricNumber: string;
	name: string;
};

type TAuthContext = {
	user: AuthenticatedUser | null;
	login: (matricNumber: string, password: string) => void;
	logout: () => void;
	loading: boolean;
};

const AuthContext = createContext<TAuthContext>({
	user: null,
	loading: false,
	login: () => undefined,
	logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<AuthenticatedUser | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
			setLoading(false);
		} else {
			setLoading(false);
		}
	}, []);

	const login = async (matricNumber: string, password: string) => {
		try {
			const login = await signIn("credentials", {
				username: matricNumber,
				password,
				redirect: false,
				redirectTo: "/dashboard",
			});
		} catch (error) {}
		// if (matricNumber === "214870" && password === "password") {
		// 	const user = { matricNumber, name: "John Doe" };
		// 	setUser(user);
		// 	localStorage.setItem("user", JSON.stringify(user));
		// 	router.push("/");
		// } else {
		// 	alert("Invalid credentials");
		// }
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
		router.push("/login");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
