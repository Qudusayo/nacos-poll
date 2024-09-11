import LoginForm from "@/components/login/LoginForm";
import { Metadata } from "next";
import Image from "next/image";

export default function Login() {
	return (
		<main className="h-screen bg-black">
			<div className="h-full lg:grid lg:grid-cols-2">
				<div className="hidden flex-col items-center justify-center gap-7 bg-app-black lg:flex">
					<div className="text-4xl font-bold text-app-green">Nacos Poll</div>
					<div>
						<Image src="/logo.webp" width={330} height={330} alt="Nacos" />
					</div>
				</div>
				<div className="flex h-full w-full flex-col items-center justify-center px-2 lg:px-0">
					<div className="w-full max-w-[27rem] rounded-md bg-app-black px-4 py-4 sm:px-6 lg:max-w-[28rem] lg:p-8">
						<div className="mb-6 flex w-full justify-center lg:hidden">
							<Image src="/logo.webp" width={100} height={100} alt="Nacos" />
						</div>
						<div className="mb-5 text-center text-2xl text-app-green">
							Login
						</div>
						<LoginForm />
					</div>
				</div>
			</div>
		</main>
	);
}

export const metadata: Metadata = {
	title: "Nacos Poll | Login",
	description: "Login to your account",
};
