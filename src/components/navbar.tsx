import { User } from "@nextui-org/react";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="flex justify-between bg-inherit px-4 py-3">
			<div className="relative top-1 flex flex-col text-[#3f8627] text-shadow-logo">
				<h2 className="text-2xl font-semibold leading-4">NACOS</h2>
				<div className="flex w-fit items-center text-4xl font-semibold">
					<h2>P</h2>
					<Image src="/small-logo.png" alt="logo" width={32} height={32} />
					<h2>LL</h2>
				</div>
			</div>
			<User
				name="Ayoola Abdulqudus B"
				description="Matric No: 230894"
				classNames={{
					base: "flex-row-reverse",
					wrapper: "bg-[#141414] p-1 rounded-md px-3",
				}}
			/>
		</div>
	);
};

export default Navbar;
