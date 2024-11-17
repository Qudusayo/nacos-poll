import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";

const ConfirmationModal = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onPress={onOpen}>Review Selection</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="full"
				classNames={{
					body: "py-6",
					backdrop: "bg-[#000000]/50 backdrop-opacity-40",
					base: "border-[#000000] bg-[#000000] dark:bg-[#19172c] text-[#a8b0d3]",
					header: "border-b-[1px] border-[#292f46] text-[#FFFFFF] font-medium",
					footer: "border-t-[1px] border-[#292f46] justify-between",
				}}
			>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								<h2 className="text-xl font-medium leading-4">
									Review Selection
								</h2>
								<span className="text-sm text-gray-500">
									Review your selection and confirm your vote.
								</span>
							</ModalHeader>
							<ModalBody></ModalBody>
							<ModalFooter>
								<Button color="danger" onPress={onClose}>
									Cancel
								</Button>
								<Button onPress={onClose}>Submit</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ConfirmationModal;
