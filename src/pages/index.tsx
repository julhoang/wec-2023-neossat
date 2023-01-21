import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Progress,
  useDisclosure,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Land } from "@/utils/types";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import GameBoard from "@/components/GameBoard";
import RightSidebar from "@/components/RightSidebar";
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
                  The aim is to find the items in the grid by moving the
                  player to learn cool facts about the nature and wildlife of
                  British Columbia.
                </Text>
                <Text>
                  <Text fontWeight="bold" mt="1rem" mb="0.5rem">
                    Instructions
                  </Text>
                  You have 3 minutes to find the items from the grid. Use the
                  up, down, left and right arrow keys to move the player in the
                  grid. There are 3 different habitats to explore -{" "}
                  <b>Sea, Land and the Sky.</b>
                </Text>
                <Text>
                  Once you find an item, a new fact is added to the
                  knowledge bank to help to learn more about the habitat.
                </Text>
                <Text>
                  After you have learned about the facts through the game, you can complete a quiz to test your knowledge.
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
