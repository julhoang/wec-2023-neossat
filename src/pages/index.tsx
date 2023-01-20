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
import Sidebar from "@/components/Sidebar";
import GameBoard from "@/components/GameBoard";

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
      <HStack w="100%" spacing={0} align="stretch">
        <Sidebar />
        <Center w="100%">
          <GameBoard gridType={gridType} />
        </Center>
      </HStack>
    </>
  );
}
