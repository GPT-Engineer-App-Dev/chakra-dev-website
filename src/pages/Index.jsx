import { Container, Text, VStack, Box, Button, Input, HStack, Image, Flex, Spacer, IconButton, Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import { ChevronDownIcon, SettingsIcon } from "@chakra-ui/icons";

const Index = () => {
  return (
    <Box bg="#000" color="#fff" minH="100vh" p={4}>
      <Flex justify="space-between" align="center" mb={8}>
        <Text fontSize="2xl" fontWeight="bold" color="#fff">GPTEngineer</Text>
        <HStack spacing={4}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="#1a1a1a" color="#fff" _hover={{ bg: "#333" }}>
              Select project...
            </MenuButton>
            <MenuList bg="#1a1a1a" color="#fff">
              <MenuItem _hover={{ bg: "#333" }}>Project 1</MenuItem>
              <MenuItem _hover={{ bg: "#333" }}>Project 2</MenuItem>
            </MenuList>
          </Menu>
          <Text>Docs</Text>
          <HStack spacing={2}>
            <Avatar size="sm" name="Kristian Ruiz Kyvik" />
            <Text>Kristian Ruiz Kyvik</Text>
          </HStack>
        </HStack>
      </Flex>
      <VStack spacing={4} align="center" mb={8}>
        <Text fontSize="4xl" fontWeight="bold" color="#fff">What do you want to <Text as="span" bgGradient="linear(to-r, #00FF00, #00FFFF, #FF00FF, #FFFF00)" bgClip="text">build?</Text></Text>
        <Box bg="#1a1a1a" p={4} borderRadius="md" w="full" maxW="lg">
          <Text fontSize="md" color="#fff">
            You are an expert Chakra developer that developer websites based on the provided image.
            - Make sure the app looks exactly like the screenshot.
            - Pay close attention to background color, text color, font size, font family, padding, margin, border, etc. Match the colors and sizes exactly.
            - Use the exact text from the screenshot.
            - Do not add comments in the code such as "" and "" in place of writing the full code. WRITE THE FULL CODE.
            - Repeat elements as needed to match the screenshot. For example, if there are 15 items, the code should have 15 items. DO NOT LEAVE comments like "".
            - For images, use placeholder images from https://placehold.co and include a detailed description of the image in the alt text so that an image generation AI can generate the image later.
          </Text>
        </Box>
      </VStack>
      <HStack spacing={4} mb={8}>
        {["Todo", "Personal website", "Notes", "Band website", "Chat", "Dashboard", "Blog", "SaaS"].map((item, index) => (
          <Button key={index} bg="#1a1a1a" color="#fff" _hover={{ bg: "#333" }} borderRadius="full" px={4}>
            {item} <ChevronDownIcon ml={2} />
          </Button>
        ))}
      </HStack>
      <Button bg="#fff" color="#000" _hover={{ bg: "#e6e6e6" }} borderRadius="full" px={8} mb={8}>
        Create
      </Button>
      <Flex wrap="wrap" justify="center" spacing={4}>
        {["twin-creator", "replica-site-generator", "replica-cloner"].map((item, index) => (
          <Box key={index} bg="#1a1a1a" p={4} borderRadius="md" m={2} w="xs">
            <Text fontSize="lg" fontWeight="bold" color="#fff">{item} <Text as="span" fontSize="sm" color="#999">Public</Text></Text>
            <Image src="https://placehold.co/300x200" alt={`Placeholder image for ${item}`} borderRadius="md" mt={2} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Index;