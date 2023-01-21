import { Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Timer = () => {
  // 3 minute timer shown in format MM:SS
  const [time, setTime] = useState(180);

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      if (time === 0) {
        router.push("/results");
      }
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <Center
      bgColor={time < 60 ? "red.400" : "green.400"}
      w="100%"
      borderRadius="lg"
      p={4}
    >
      <Heading size="2xl">
        {new Date(time * 1000).toISOString().slice(14, 19)}
      </Heading>
    </Center>
  );
};

export default Timer;
