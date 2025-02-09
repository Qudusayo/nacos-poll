import { cn, Image } from "@nextui-org/react";

const UserCard = ({
	name,
	avatar,
	active,
	post,
}: {
	name: string;
	avatar: string;
	active: boolean;
	post?: string;
}) => {
	return (
		<div
			className={cn(
				"flex w-full flex-col justify-between gap-4",
				!!post && "rounded-lg border-2 border-solid border-[#FFF] p-2",
			)}
		>
			<div>
				<Image
					src={avatar}
					fallbackSrc="/placeholder.png"
					alt={name + " avatar"}
					classNames={{
						img: "absolute inset-0 h-full w-full object-cover object-center",
						wrapper: "w-full !max-w-full pb-[100%]",
					}}
					radius="sm"
				/>
			</div>
			<div className="space-y-2">
				{post && (
					<h3 className="-mt-2 text-2xl font-medium text-white">{post}</h3>
				)}
				<span
					className={cn(
						"w-full py-1 text-lg font-light leading-4 text-default-500",
						active && "text-[#FFF]",
					)}
				>
					{name}
				</span>
			</div>
		</div>
	);
};

export default UserCard;
