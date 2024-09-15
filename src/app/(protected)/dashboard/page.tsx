"use client";

import UserCheckboxGroup from "@/components/user-checkbox-group";
import { contestants } from "@/contestants";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const page = () => {
	const [president, setPresident] = useState("");

	return (
		<div className="flex flex-1 flex-col gap-20 p-10">
			<div className="">
				<div className="top-8 -ml-2 mb-6">
					<h2 className="text-2xl font-semibold leading-4">President</h2>
					<span className="text-sm text-gray-500">
						Select your preferred candidate
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
				<Button>Back</Button>
				<Button>Next</Button>
			</div>
		</div>
	);
};

export default page;
