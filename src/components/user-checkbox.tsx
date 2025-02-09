"use client";

import { Checkbox, CheckboxProps, cn } from "@nextui-org/react";
import UserCard from "./user-card";

interface iUserCheckbox extends CheckboxProps {
	user: {
		name: string;
		avatar: string;
	};
}

const UserCheckbox = ({ user, ...props }: iUserCheckbox) => {
	return (
		<Checkbox
			aria-label={user.name}
			classNames={{
				base: cn(
					"inline-flex w-full max-w-md bg-[#141414] w-full",
					"hover:bg-[#141414]/80 items-center justify-start",
					"cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent",
					"data-[selected=true]:border-[#FFF] !m-0",
					"[&>span:nth-of-type(2)]:hidden",
				),
				label: "w-full h-auto",
			}}
			isSelected={props.isSelected}
			// onValueChange={}
			{...props}
		>
			<UserCard
				name={user.name}
				avatar={user.avatar}
				active={!!props.isSelected}
			/>
		</Checkbox>
	);
};

export default UserCheckbox;
