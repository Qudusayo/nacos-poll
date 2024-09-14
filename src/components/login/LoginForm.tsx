"use client";

import { Eye, EyeOff } from "@/components/icons";
import { useAuth } from "@/context/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
	matricNumber: string;
	password: string;
};

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>();
	const [showPassword, setShowPassword] = useState(false);
	const { login } = useAuth();

	const onSubmit = (data: LoginFormInputs) => {
		login(data.matricNumber, data.password);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="pt-3">
			<div className="mb-6 flex flex-col space-y-2">
				<label htmlFor="matric-number" className="text-app-green">
					Matric Number
				</label>
				<input
					type="text"
					id="matric-number"
					placeholder="e.g 214870"
					autoComplete="off"
					className="rounded-[4px] border border-app-green bg-black px-2 py-2 placeholder-white outline-none ring-offset-2 focus-within:ring-app-green focus:ring-1 focus:ring-app-green lg:px-3 lg:py-3"
					{...register("matricNumber", {
						required: "Matric number is required",
						pattern: {
							value: /^\d{6}$/,
							message: "Matric number must be a 6-digit number",
						},
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
						className="w-full rounded-[4px] border border-app-green bg-black px-2 py-2 placeholder-white outline-none ring-offset-2 focus-within:ring-app-green focus:ring-1 focus:ring-app-green lg:px-3 lg:py-3"
						{...register("password", {
							required: "Password is required",
						})}
					/>
					<button
						type="button"
						className="absolute right-3 top-3 text-[20px] lg:top-[16px]"
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
				<button
					className="rounded-md bg-app-blue px-6 py-2 outline-none transition-colors focus-within:ring-blue-300 hover:bg-opacity-80 focus:ring-1 focus:ring-blue-300"
					type="submit"
				>
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
