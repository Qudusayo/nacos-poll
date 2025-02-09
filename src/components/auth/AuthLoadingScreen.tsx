import Image from "next/image";

function AuthLoadingScreen() {
	return (
		<div className="fixed left-0 top-0 z-[999] h-full w-full bg-black">
			<div className="flex h-full w-full flex-col items-center justify-center">
				<div>
					<Image
						src="/logo.webp"
						width={180}
						height={180}
						alt="Nacos"
						className="animate-pulse"
					/>
				</div>
			</div>
		</div>
	);
}

export default AuthLoadingScreen;
