import { Box, Button, Text, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";


const HomeSection = () => {
  return (
    <Box textAlign="center">
      <Flex justifyContent={'center'} mb={'5'}>
       <Text>TypeScript Functional Library</Text>
      </Flex>
       <Text>No more variables, No more try-catch , No more Side-Effect!!!</Text>
    </Box>
  );
};

export default HomeSection;
