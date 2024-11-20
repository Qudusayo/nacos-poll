"use client";

import ConfirmationModal from "@/components/confirmation-modal";
import UserCheckboxGroup from "@/components/user-checkbox-group";
import { Button } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { ContestantsData } from "../../../../types";

const Dashboard = ({ data }: { data: ContestantsData }) => {
	const topRef = useRef(null);
	const [position, setPosition] = useState(1);
	const [userSelection, setUserSelection] = useState<{ [key: string]: string }>(
		{},
	);

	const incrementPosition = () => {
		setPosition(prev => (prev < data.length ? prev + 1 : prev));
	};

	const decrementPosition = () => {
		setPosition(prev => (prev > 1 ? prev - 1 : prev));
	};

	useEffect(() => {
		if (topRef.current)
			(topRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
	}, [position]);

	const setSelection = (key: string, value: string) => {
		setUserSelection(prev => ({ ...prev, [key]: value }));
	};

	useEffect(() => {
		console.log(userSelection);
	}, [userSelection]);

	return (
		<>
			<span ref={topRef}></span>
			<div className="flex flex-1 flex-col gap-20 p-10 px-4 pt-4">
				<div className="">
					<div className="sticky top-0 z-50 mb-6 bg-black pt-1">
						<h2 className="text-2xl font-semibold leading-4">
							{data[position - 1]?.label}
						</h2>
						<span className="text-sm text-gray-500">
							Select your preferred candidate - ({position}/{data.length})
						</span>
					</div>
					<UserCheckboxGroup
						name={data[position - 1].label}
						selectedValue={userSelection[data[position - 1].label]}
						setFieldValue={(selection: string) => {
							setSelection(data[position - 1].label, selection);
						}}
						values={data[position - 1].data}
					/>
				</div>
				<div className="flex justify-between">
					<Button onClick={decrementPosition} isDisabled={position === 1}>
						Back
					</Button>
					{position < data.length ? (
						<Button
							onClick={incrementPosition}
							isDisabled={!userSelection[data[position - 1].label]}
						>
							Next
						</Button>
					) : (
						<ConfirmationModal
							contestants={data}
							userSelection={userSelection}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
