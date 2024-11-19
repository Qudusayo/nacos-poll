"use client";

import ConfirmationModal from "@/components/confirmation-modal";
import UserCheckboxGroup from "@/components/user-checkbox-group";
import { Button } from "@nextui-org/react";
import { useRef, useState } from "react";
import { ContestantsData } from "../../../../types";

const Dashboard = ({ data }: { data: ContestantsData }) => {
	const topRef = useRef(null);
	const [position, setPosition] = useState(1);
	const [president, setPresident] = useState("");

	const scrollToTop = () =>
		topRef &&
		topRef.current &&
		(topRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });

	const incrementPosition = () => {
		scrollToTop();
		setPosition(prev => (prev < data.length ? prev + 1 : prev));
	};

	const decrementPosition = () => {
		scrollToTop();
		setPosition(prev => (prev > 1 ? prev - 1 : prev));
	};

	return (
		<div className="flex flex-1 flex-col gap-20 p-10 px-4 pt-4">
			<div className="">
				<div className="top-8 mb-6">
					<h2 className="text-2xl font-semibold leading-4" ref={topRef}>
						{data[position - 1]?.label}
					</h2>
					<span className="text-sm text-gray-500">
						Select your preferred candidate - ({position}/{data.length})
					</span>
				</div>
				<UserCheckboxGroup
					name="president"
					selectedValue={president}
					setFieldValue={setPresident}
					values={data[position - 1].data}
				/>
			</div>
			<div className="flex justify-between">
				<Button onClick={decrementPosition} isDisabled={position === 1}>
					Back
				</Button>
				{position < data.length ? (
					<Button onClick={incrementPosition}>Next</Button>
				) : (
					<ConfirmationModal />
				)}
			</div>
		</div>
	);
};

export default Dashboard;
