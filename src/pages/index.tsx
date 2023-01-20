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
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Land } from "@/utils/types";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [gridType, setGridType] = useState<Land>("water");

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
      <Header gridType={gridType} setGridType={setGridType} />
      <HStack minH="100vh" w="100%" spacing={0} align="stretch">
        <VStack
          h="100%"
          minW="300px"
          bgColor="gray.200"
          p={4}
          align="self-start"
        >
          <Heading>Hello, John!</Heading>
          <Heading size="md">Your Knowledge Progress</Heading>
          <Heading size="sm">Land</Heading>
          <Progress value={30} colorScheme="green" w="100%" />
          <Heading size="sm">Water</Heading>
          <Progress value={60} colorScheme="blue" w="100%" />
          <Heading size="sm">Mountain</Heading>
          <Progress value={10} colorScheme="gray" w="100%" />
          <Box h="30px" />
          <Button w="100%">Instructions</Button>
          <Button w="100%">Try for the leaderboard!</Button>
        </VStack>
        <Grid
          bgColor="gray.600"
          w="100%"
          // templateColumns="repeat(auto-fill, minmax(40px, 1fr))"
          // templateRows="repeat(auto-fill, minmax(40px, 1fr))"
          templateColumns="repeat(30, minmax(40px, 1fr))"
          templateRows="repeat(30, minmax(40px, 1fr))"
        >
          {/* Loop over 2500 grid items, all with a light gray border */}
          {Array.from({ length: 900 }).map((_, i) => (
            <GridItem
              key={i}
              bgColor={
                gridType === "land"
                  ? "green.400"
                  : gridType === "water"
                  ? "blue.400"
                  : "gray.500"
              }
              border="1px"
              borderColor="gray.200"
            />
          ))}
        </Grid>
      </HStack>
    </>
  );
}
