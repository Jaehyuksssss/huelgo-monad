import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import SomeText from "lib/components/samples/SomeText";
import HomeSection from "lib/components/samples/HomeSection";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
        <HomeSection />
    </Flex>
  );
};

export default Home;
