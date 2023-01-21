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

const KnowledgeSection = ({ theme, foundEmojis }: { theme: Land; foundEmojis: string[] }) => {
  const [currentKnowledge, setCurrentKnowledge] = useState<Question[]>([]);

  useEffect(() => {
    if (foundEmojis.length === 0) return;

    const currentThemeQuestion = questionBank.filter(
      (question: Question) => question.theme === theme && !currentKnowledge.includes(question)
    );
    const randomQuestion: Question =
      currentThemeQuestion[Math.floor(Math.random() * currentThemeQuestion.length)];
    setCurrentKnowledge([...currentKnowledge, randomQuestion]);
  }, [foundEmojis]);

  return (
    <VStack align="stretch">
      {currentKnowledge.map((knowledge) => {
        return (
          <KnowledgeCard
            key={knowledge.id}
            question={knowledge}
          />
        );
      })}
    </VStack>
  );
};

export default KnowledgeSection;
