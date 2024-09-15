import AuthGuard from "@/components/auth/AuthGuard";

export default function Home() {
	return (
		<AuthGuard>
			<main className="h-screen">
				<h1>Nacos Poll</h1>
			</main>
		</AuthGuard>
	);
}
