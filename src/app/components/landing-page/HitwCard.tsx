import React, { FC } from 'react';
import { VStack, Text, Heading, Flex } from '@chakra-ui/react';

type Props = {
  icon: any;
  title: string;
  desc: string;
};

const HowItWorkCard: FC<Props> = ({ icon, title, desc }) => {
  return (
    <VStack
      color="#fff"
      bg="#232629"
      maxW="40.4rem"
      mb={{ base: '3rem', lg: '0rem' }}
      h="45.8rem"
      p="5.8rem 3rem 6rem"
      borderRadius="30px"
      transition="0.3s ease"
      _hover={{
        boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.15)',
        // boxShadow: '0px 92px 40px -59px rgba(108, 76, 223, 0.15)',
        transform: 'scale(1.03)',
      }}
    >
      <Flex
        flexDir="column"
        borderRadius="10rem"
        align="center"
        justify="center"
        mb="50px"
        w="15.7rem"
        h="15.7rem"
        bgGradient="linear(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)"
      >
        {icon}
      </Flex>

      <Heading
        as="h4"
        pb="2rem"
        fontSize="2.4rem"
        lineHeight="28px"
        fontWeight="700"
        textAlign="center"
        maxW="20rem"
      >
        {title}
      </Heading>
      <Text size="body1" textAlign="center" lineHeight="27.3px" maxW="30rem">
        {desc}
      </Text>
    </VStack>
  );
};

export default HowItWorkCard;
