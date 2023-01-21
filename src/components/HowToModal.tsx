import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";

const HowToModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Welcome to ExploreBC !</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <Text fontWeight="bold" mt="1rem" mb="0.5rem">
              Overview
            </Text>
            The aim is to find the items in the grid by moving the player to
            learn cool facts about the nature and wildlife of British Columbia.
          </Text>
          <Text>
            <Text fontWeight="bold" mt="1rem" mb="0.5rem">
              Instructions
            </Text>
            You have 2 minutes to find the items from the grid. Use the up,
            down, left and right arrow keys to move the player in the grid.
            There are 3 different habitats to explore -{" "}
            <b>Sea, Land and the Sky.</b>
          </Text>
          <Text>
            Once you find an item, a new fact is added to the knowledge bank to
            help to learn more about the habitat.
          </Text>
          <Text>
            After you have learned about the facts through the game, you can
            complete a quiz to test your knowledge.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HowToModal;
