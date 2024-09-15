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
					"inline-flex w-full max-w-md bg-[#141414] w-fit",
					"hover:bg-[#141414]/80 items-center justify-start",
					"cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
					"data-[selected=true]:border-[#FFF]",
					"[&>span:nth-of-type(2)]:absolute",
				),
				label: "w-fit",
			}}
			isSelected={props.isSelected}
			// onValueChange={}
			{...props}
		>
			<div className="flex w-fit flex-col justify-between gap-4">
				<Image
					src={user.avatar}
					alt={user.name + " avatar"}
					className="rounded-lg"
				/>
				<div className="flex flex-col">
					<span
						className={cn(
							"max-w-[225px] truncate text-xl font-light leading-4 text-default-500",
							props.isSelected && "text-[#FFF]",
						)}
					>
						{user.name}
					</span>
				</div>
			</div>
		</Checkbox>
	);
};

export default UserCheckbox;
