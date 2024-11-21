"use client";

import { Eye, EyeOff } from "@/components/icons";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoaderCircle } from "../icons";

type LoginFormInputs = {
	matricNumber: string;
	password: string;
};

const LoginForm = () => {
	const router = useRouter();
	const { register, handleSubmit, formState, reset } =
		useForm<LoginFormInputs>();
	const { errors, isSubmitting } = formState;
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = async (data: LoginFormInputs) => {
		const { matricNumber, password } = data;
		try {
			const login = await signIn("credentials", {
				username: matricNumber,
				password,
				redirect: false,
				redirectTo: "/dashboard",
			});

			if (login?.error) throw new Error(login.error);
			if (login?.url) {
				toast.success("You're successfully authenticated");
				reset();
				return router.replace("/dashboard");
			}
		} catch (error: any) {
			const errorMessage = JSON.parse(error?.message ?? "{}");
			toast.error(errorMessage?.message ?? "Invalid login credentials");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="pt-3">
			<div className="mb-6 flex flex-col space-y-2">
				<label htmlFor="username" className="text-app-green">
					Username
				</label>
				<input
					type="text"
					id="username"
					placeholder="e.g Username"
					autoComplete="off"
					className="rounded-[4px] border border-app-green bg-black px-2 py-2 placeholder-white outline-none ring-offset-2 focus-within:ring-app-green focus:ring-1 focus:ring-app-green lg:px-3"
					{...register("matricNumber", {
						required: "Username is required",
					})}
				/>
				{errors.matricNumber && (
					<p className="mt-1 text-sm text-red-500">
						{errors.matricNumber.message}
					</p>
				)}
			</div>
			<div className="my-7 mb-6 flex w-full flex-col space-y-2">
				<label className="text-app-green" htmlFor="password">
					Password
				</label>
				<div className="relative w-full">
					<input
						type={showPassword ? "text" : "password"}
						id="password"
						autoComplete="off"
						placeholder="Enter your password"
						className="w-full rounded-[4px] border border-app-green bg-black px-2 py-2 placeholder-white outline-none ring-offset-2 focus-within:ring-app-green focus:ring-1 focus:ring-app-green lg:px-3"
						{...register("password", {
							required: "Password is required",
						})}
					/>
					<button
						type="button"
						className="absolute right-3 top-3 text-[20px] lg:top-3"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? (
							<EyeOff className="h-5 w-5 fill-app-green stroke-app-green text-app-green" />
						) : (
							<Eye className="h-5 w-5 stroke-app-green text-app-green" />
						)}
					</button>
				</div>
				{errors.password && (
					<p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
				)}
			</div>
			<div className="flex w-full items-center justify-center">
				<Button
					disabled={isSubmitting}
					className="w-full rounded-md bg-app-green px-6 py-2 text-white outline-none transition-colors focus-within:ring-blue-300 hover:bg-opacity-80 focus:ring-1 focus:ring-blue-300 disabled:cursor-not-allowed"
					type="submit"
				>
					{isSubmitting ? <LoaderCircle className="animate-spin" /> : "Login"}
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
