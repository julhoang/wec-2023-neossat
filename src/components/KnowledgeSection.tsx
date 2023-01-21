import React, { useEffect, useState } from "react";
import { Heading, Card, CardBody } from "@chakra-ui/react";
import { Land, Question } from "../utils/types";
import { questionBank } from "@/utils/questionBank";

const KnowledgeCard = ({ question }: { question: Question }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody>{question.knowledge}</CardBody>
    </Card>
  );
};

const KnowledgeSection = ({ theme }: { theme: Land }) => {
  const [currentKnowledge, setCurrentKnowledge] = useState<Question[]>([]);
  const questions: Question[] = questionBank.filter(
    (question: Question) => question.theme === theme
  );
  const randomQuestion: Question = questions[Math.floor(Math.random() * questions.length)];

  useEffect(() => {
    setCurrentKnowledge([...currentKnowledge, randomQuestion]);
  }, []);

  return (
    <>
      {currentKnowledge.map((knowledge) => {
        return (
          <KnowledgeCard
            key={knowledge.id}
            question={knowledge}
          />
        );
      })}
    </>
  );
};

export default KnowledgeSection;
