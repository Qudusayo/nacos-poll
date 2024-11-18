"use client";

import { useAuth } from "@/context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthLoadingScreen from "./AuthLoadingScreen";

const AuthGuard = ({ children }: { children: any }) => {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			router.push("/login");
		}
	}, [user, router, loading]);

	if (loading) {
		return <AuthLoadingScreen />;
	}

	return children;
};

export default AuthGuard;
