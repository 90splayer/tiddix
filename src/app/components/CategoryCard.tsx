import {
  Avatar,
  Box,
  Card,
  Text,
  Flex,
  Image,
  Progress,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import React, { FC } from 'react';
import { thousandsSeparators } from 'app/utils/helpers';
import { Link } from 'react-router-dom';

const CategoryCard: FC<{ project: any }> = ({ project }) => {
  const {
    creativeName,
    amount,
    projectName,
    progress,
    category,
    coverArt,
    creativePicture,
    id,
  } = project;

  return (
    <Card
      maxW="63.6rem"
      bgColor="#232629"
      borderRadius="30px"
      p="17px 15px 30px"
    >
      <Link to={`/projects/${id}`}>
        <Box borderRadius="20px" mb="15px">
          <Image
            w="59rem"
            h="26.8rem"
            borderRadius="20px"
            objectFit="cover"
            src={coverArt}
            alt={projectName}
          />
        </Box>
        <Stack spacing="1.1rem">
          <Flex justify="space-between" align="center">
            <HStack spacing="1rem">
              <Avatar
                boxSize="25px"
                name={creativeName}
                src={creativePicture}
              />
              <Flex gap="3px" align="center">
                <Text fontSize="1.6rem" color="#fff">
                  {creativeName}
                </Text>
                <Box w="16.58px" h="16.58px">
                  {verify}
                </Box>
              </Flex>
            </HStack>
            <Text>
              Target:{' '}
              <Text
                as="span"
                bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                bgClip="text"
              >
                £{thousandsSeparators(amount)}
              </Text>
            </Text>
          </Flex>
          <Flex justify="space-between" align="center">
            <Text fontSize="2rem" color="#fff" fontWeight="700">
              {projectName}
            </Text>
            <Progress
              borderRadius="10px"
              background="blackShade.3"
              sx={{
                '& > div': {
                  background: 'gradientStyle.1',
                },
              }}
              w="8.8rem"
              size="md"
              value={progress}
            />
          </Flex>
          <Flex justify="space-between" align="center">
            <Text fontSize="1.4rem">{category}</Text>
            <Text>{progress}%</Text>
          </Flex>
        </Stack>
      </Link>
    </Card>
  );
};

export default CategoryCard;
