"use client";

import ConfirmationModal from "@/components/confirmation-modal";
import UserCheckboxGroup from "@/components/user-checkbox-group";
import { contestants } from "@/contestants";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Dashboard = () => {
	const [position, setPosition] = useState(1);
	const [president, setPresident] = useState("");

	const incrementPosition = () => {
		setPosition(position + 1);
	};

	const decrementPosition = () => {
		setPosition(position - 1 || 1);
	};

	return (
		<div className="flex flex-1 flex-col gap-20 p-10 px-4 pt-4">
			<div className="">
				<div className="top-8 mb-6">
					<h2 className="text-2xl font-semibold leading-4">President</h2>
					<span className="text-sm text-gray-500">
						Select your preferred candidate - ({position}/7)
					</span>
				</div>

				<UserCheckboxGroup
					name="president"
					selectedValue={president}
					setFieldValue={setPresident}
					values={contestants}
				/>
			</div>
			<div className="flex justify-between">
				<Button onClick={decrementPosition} isDisabled={position === 1}>
					Back
				</Button>
				{position < 7 ? (
					<Button onClick={incrementPosition}>Next</Button>
				) : (
					<ConfirmationModal />
				)}
			</div>
		</div>
	);
};

export default Dashboard;
