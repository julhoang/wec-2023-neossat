import Head from "next/head";
import { Inter } from "@next/font/google";
import {
  Button,
  Center,
  Heading,
  useDisclosure,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import HowToModal from "@/components/HowToModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>ExploreBC</title>
        <meta
          name="description"
          content="Game for elementary students for learning about BC"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center bgColor="gray.200" minH="100vh">
        <VStack spacing={8}>
          <Heading size="3xl">ExploreBC</Heading>
          <Heading size="xl">
            A game for elementary students about the nature of British Columbia
          </Heading>
          <Button onClick={onOpen} size="lg" fontSize="2xl" colorScheme="blue">
            How to play
          </Button>
          <HowToModal isOpen={isOpen} onClose={onClose} />
          <Link href="/game">
            <Button size="lg" fontSize="3xl" colorScheme="green" px={12} py={6}>
              Start
            </Button>
          </Link>
        </VStack>
      </Center>
    </>
  );
}
