import { Box, Flex } from "@chakra-ui/react";
import Navigation from "./Navigation";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
        <Navigation />
    </Flex>
  );
};

export default Header;
