/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import {
  Box,
  Input,
  Button,
  ChakraProvider,
  Container,
  Flex,
} from '@chakra-ui/react';

const ChatMessage = ({type, message}) => (
  <Box
    alignSelf={type === 'user' ? 'flex-end' : 'flex-start'}
    backgroundColor={type === 'user' ? '#DCF8C6' : '#EAEAEA'}
    color={type === 'user' ? '#000000' : '#000000'}
    padding="10px"
    borderRadius="10px"
    margin="5px 0"
  >
    {message}
  </Box>
);

const FloatingChatbot = () => {
  const chatContainerRef = useRef(null);

  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isMinimized, setIsMinimized] = useState(true);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return;
    }

    const newChatHistory = [...chatHistory, {type: 'user', message}];

    // Replace this fetch logic with your own data fetching
    fetch('/dataset_chatbot.json')
        .then((response) => response.json())
        .then((data) => {
          const matchedIntent = data.intents.find((intent) =>
            intent.input.includes(message.toLowerCase()),
          );

          const botResponse = matchedIntent ?
          matchedIntent.responses[Math.floor(Math.random() * matchedIntent.responses.length)] :
          'Maaf saya tidak mengerti maksud anda';

          const updatedChatHistory = [
            ...newChatHistory,
            {type: 'bot', message: botResponse},
          ];
          setChatHistory(updatedChatHistory);
          setMessage('');
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        });
  };

  const toggleMinimize = () => {
    setIsMinimized((prevState) => !prevState);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  return (
    <ChakraProvider>
      {isMinimized ? (
        <Box
          position="fixed"
          bottom="0"
          right="0"
          backgroundColor="#6b4612"
          color="#ffffff"
          padding="10px 20px"
          borderTopLeftRadius="10px"
          cursor="pointer"
          onClick={toggleMinimize}
        >
          CODDY - ChatBot
        </Box>
      ) : (
        <Container
          position="fixed"
          bottom="0"
          right="0"
          width="300px"
          height="400px"
          backgroundColor="#ffffff"
          borderRadius="10px 10px 0 0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
          overflow="hidden"
          display="flex"
          flexDirection="column"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            padding="10px"
            borderBottom="1px solid #ccc"
          >
            <Box>ChatBot</Box>
            <Button
              backgroundColor="#FF5722"
              color="#ffffff"
              border="none"
              padding="5px 10px"
              borderRadius="5px"
              cursor="pointer"
              onClick={toggleMinimize}
            >
              Minimize
            </Button>
          </Flex>
          <Flex
            flex="1"
            padding="20px"
            overflowY="auto"
            flexDirection="column"
            ref={chatContainerRef}
          >
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} type={chat.type} message={chat.message} />
            ))}
          </Flex>
          <Flex alignItems="center" padding="10px">
            <Input
              type="text"
              placeholder="Tanyakan..."
              flex="1"
              padding="10px"
              borderRadius="10px"
              border="1px solid #ccc"
              marginRight="10px"
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <Button
              onClick={handleSendMessage}
              backgroundColor="#6b4612"
              color="#ffffff"
              border="none"
              padding="10px 20px"
              borderRadius="10px"
              cursor="pointer"
            >
              Send
            </Button>
          </Flex>
        </Container>
      )}
    </ChakraProvider>
  );
};

export default FloatingChatbot;
