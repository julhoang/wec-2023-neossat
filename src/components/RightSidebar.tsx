import { VStack, Heading, Progress, Button, Box } from "@chakra-ui/react";
import KnowledgeSection from "./KnowledgeSection";
import { Land } from "@/utils/types";

const RightSidebar = ({ gridType }: { gridType: Land }) => {
  return (
    <>
      <VStack p={5}>
        <Heading>Knowledge Bank 💡</Heading>
        <KnowledgeSection theme={gridType} />
      </VStack>
    </>
  );
};

export default RightSidebar;
