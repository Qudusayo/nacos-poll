import { CheckboxGroup, CheckboxGroupProps } from "@nextui-org/react";
import UserCheckbox from "./user-checkbox";

const UserCheckboxGroup = ({
	name,
	value,
	values,
	selectedValue,
	setFieldValue,
	...props
}: CheckboxGroupProps & {
	values: {
		name: string;
		avatar: string;
	}[];
	selectedValue: string;
	setFieldValue: (value: typeof selectedValue) => void;
}) => {
	return (
		<CheckboxGroup
			orientation="horizontal"
			color="warning"
			classNames={{
				wrapper:
					"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
			}}
			name={name}
			value={[selectedValue]}
			onChange={val => {
				console.log({ val });
				if (!(val as string[]).length) return;
				let selectedValues = val as string[];
				name && setFieldValue(selectedValues[selectedValues.length - 1]);
			}}
			{...props}
		>
			{values.map((value, index) => (
				<UserCheckbox
					key={index}
					value={value.name}
					isSelected={selectedValue === value.name}
					user={{
						name: value.name,
						avatar: value.avatar,
					}}
				/>
			))}
		</CheckboxGroup>
	);
};

export default UserCheckboxGroup;
