import { User } from "@nextui-org/react";

const Navbar = () => {
	return (
		<div className="flex justify-end bg-inherit px-10 py-6">
			<User
				name="John Doe"
				description="Admin"
				classNames={{
					base: "flex-row-reverse",
					wrapper: "bg-[#141414] p-1 rounded-md px-3",
				}}
			/>
		</div>
	);
};

export default Navbar;
