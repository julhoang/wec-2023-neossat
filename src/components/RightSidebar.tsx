import { VStack, Heading } from "@chakra-ui/react";
import KnowledgeSection from "./KnowledgeSection";
import { Land } from "@/utils/types";

const RightSidebar = ({
  gridType,
  foundEmojis,
}: {
  gridType: Land;
  foundEmojis: string[];
}) => {
  return (
    <>
      <VStack p={5}>
        <Heading>Knowledge Bank 💡</Heading>
        <KnowledgeSection theme={gridType} foundEmojis={foundEmojis} />
      </VStack>
    </>
  );
};

export default RightSidebar;
