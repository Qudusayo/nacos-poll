"use client";

import { Checkbox, CheckboxProps, cn, Image } from "@nextui-org/react";

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
					"cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
					"data-[selected=true]:border-[#FFF] !m-0",
					"[&>span:nth-of-type(2)]:hidden",
				),
			}}
			isSelected={props.isSelected}
			// onValueChange={}
			{...props}
		>
			<div className="flex w-fit flex-col justify-between gap-4">
				<Image
					src={user.avatar}
					alt={user.name + " avatar"}
					className="w-full rounded-lg"
				/>
				<span
					className={cn(
						"w-full text-lg font-light leading-4 text-default-500",
						props.isSelected && "text-[#FFF]",
					)}
				>
					{user.name}
				</span>
			</div>
		</Checkbox>
	);
};

export default UserCheckbox;
