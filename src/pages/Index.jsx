// Complete the Index page component here
// Use chakra-ui
import React, { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack, Image, useToast } from "@chakra-ui/react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const toast = useToast();

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = () => {
    if (!userInput.trim()) {
      toast({
        title: "Message is empty",
        description: "Please type a message before sending.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate sending message and receiving reply
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        sender: "ai",
        text: "As an AI, I'm still learning. Could you specify where the pain is or describe it more?",
      };
      setMessages([...newMessages, aiResponse]);
    }, 1500);
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4}>
        <Flex alignItems="center">
          <FaRobot size="24px" />
          <Heading as="h3" size="lg" ml={2}>
            Physiotherapy AI Assistant
          </Heading>
        </Flex>
        <Text>Welcome to your virtual physiotherapy assistant. Describe your symptoms or point on the image where you feel pain.</Text>
        <Image src="https://images.unsplash.com/photo-1611094601537-cdbb75b979cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGJvZHklMjBhbmF0b215fGVufDB8fHx8MTcxNDA3MzkyOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Human Body" />
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          {messages.map((message, index) => (
            <Box key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
              <Text fontWeight="bold">{message.sender.toUpperCase()}</Text>
              <Text>{message.text}</Text>
            </Box>
          ))}
        </Box>
        <FormControl>
          <FormLabel htmlFor="message">Your Message</FormLabel>
          <Textarea id="message" value={userInput} onChange={handleInputChange} placeholder="Describe your symptoms or ask a question..." />
        </FormControl>
        <Button rightIcon={<FaPaperPlane />} colorScheme="blue" onClick={sendMessage}>
          Send
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
