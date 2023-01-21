import React, { useEffect, useState } from "react";
import { Heading, Card, CardBody, VStack } from "@chakra-ui/react";
import { Land, Question } from "../utils/types";
import { questionBank } from "@/utils/questionBank";

const KnowledgeCard = ({ question }: { question: Question }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody>
        <Heading size="md">{question.knowledge}</Heading>
      </CardBody>
    </Card>
  );
};

const KnowledgeSection = ({
  theme,
  foundEmojis,
}: {
  theme: Land;
  foundEmojis: string[];
}) => {
  const [currentKnowledge, setCurrentKnowledge] = useState<Question[]>([]);
  const questions: Question[] = questionBank.filter(
    (question: Question) => question.theme === theme
  );
  const randomQuestion: Question =
    questions[Math.floor(Math.random() * questions.length)];

  useEffect(() => {
    if (foundEmojis.length === 0) return;
    setCurrentKnowledge([...currentKnowledge, randomQuestion]);
  }, [foundEmojis]);

  return (
    <VStack align="stretch">
      {currentKnowledge.map((knowledge) => {
        return <KnowledgeCard key={knowledge.id} question={knowledge} />;
      })}
    </VStack>
  );
};

export default KnowledgeSection;
