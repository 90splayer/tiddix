import {
  Flex,
  Box,
  Text,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Avatar,
  HStack,
  Image,
  Heading,
  Progress,
  Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import project from '../../assets/images/investor/project.jpg';
import { verify } from 'app/assets/svgs/home';
import { numberMetricFormatter } from 'app/utils/helpers';
import { Link } from 'react-router-dom';

const TrendingTable: FC<{ projects: any }> = ({ projects }) => {
  return (
    <Box>
      <Flex
        justify="space-between"
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ md: '3rem', lg: '14rem' }}
      >
        <Stack flex="1" spacing="3rem">
          <Flex gap="3rem" mb="1rem">
            <Text size="body2" w={{ base: '100%', md: '36.9rem' }} flex="5">
              Project
            </Text>
            <Text
              size="body2"
              textAlign={{ base: 'unset', sm: 'center' }}
              flex="1"
            >
              Target
            </Text>
            <Text
              size="body2"
              display={{ base: 'none', sm: 'unset' }}
              flex="2"
              textAlign="right"
            >
              Progress
            </Text>
          </Flex>
          {projects
            ?.slice(0, 5)
            .map(
              ({
                creativeName,
                amount,
                projectName,
                progress,
                category,
                coverArt,
                creativePicture,
                id,
              }: any) => (
                <Flex key={id} align="center" gap="3rem">
                  <Link to={`/projects/${id}`}>
                    <HStack spacing="19px" flex="5" maxW="31.4rem">
                      <Box boxSize="10rem">
                        <Image
                          w="100%"
                          h="10rem"
                          borderRadius="1.6rem"
                          objectFit="cover"
                          src={coverArt}
                          alt={projectName}
                        />
                      </Box>
                      <Flex
                        flexDir="column"
                        w={{ base: '100%', sm: '21.4rem' }}
                        gap={{ base: '5px', sm: '11px' }}
                      >
                        <HStack>
                          <Avatar
                            boxSize="25px"
                            name={creativeName}
                            src={creativePicture}
                          />
                          <Text size="body2" color="#fff">
                            {creativeName}
                          </Text>
                          <Box>{verify}</Box>
                        </HStack>
                        <Heading fontSize="2rem">{projectName}</Heading>
                        <Text fontSize="1.4rem">{category}</Text>
                      </Flex>
                    </HStack>
                  </Link>
                  <Text size="body2" textAlign="center" color="#fff" flex="1">
                    £{numberMetricFormatter(amount, 2)}
                  </Text>
                  <Progress
                    display={{ base: 'none', sm: 'unset' }}
                    value={progress}
                    borderRadius="2rem"
                    maxW="110px"
                    background="blackShade.3"
                    sx={{
                      '& > div': {
                        background: 'gradientStyle.1',
                      },
                    }}
                    flex="2"
                  />
                </Flex>
              ),
            )}
        </Stack>

        <Stack display={{ base: 'none', md: 'unset' }} flex="1" spacing="3rem">
          {projects
            ?.slice(5, 10)
            .map(
              ({
                creativeName,
                amount,
                projectName,
                progress,
                category,
                coverArt,
                creativePicture,
                id,
              }: any) => (
                <Box>
                  <Flex gap="3rem" mb="1rem">
                    <Text size="body2" flex="5">
                      Project
                    </Text>
                    <Text size="body2" flex="1">
                      Target
                    </Text>
                    <Text size="body2" flex="2" textAlign="right">
                      Progress
                    </Text>
                  </Flex>

                  <Flex key={id} align="center" gap="3rem">
                    <Link to={`/projects/${id}`}>
                      <HStack spacing="19px" flex="5">
                        <Box boxSize="10rem">
                          <Image
                            w="100%"
                            h="10rem"
                            borderRadius="1.6rem"
                            objectFit="cover"
                            src={coverArt}
                            alt={projectName}
                          />
                        </Box>
                        <Stack spacing="11px">
                          <HStack>
                            <Avatar
                              boxSize="25px"
                              name={creativeName}
                              src={creativePicture}
                            />
                            <Text size="body2" color="#fff">
                              {creativeName}
                            </Text>
                            <Box>{verify}</Box>
                          </HStack>
                          <Heading size="h3">{projectName}</Heading>
                          <Text fontSize="1.4rem">{category}</Text>
                        </Stack>
                      </HStack>
                    </Link>
                    <Text size="body2" color="#fff" flex="1">
                      £{numberMetricFormatter(amount, 2)}
                    </Text>
                    <Progress
                      value={progress}
                      borderRadius="2rem"
                      background="blackShade.3"
                      sx={{
                        '& > div': {
                          background: 'gradientStyle.1',
                        },
                      }}
                      flex="2"
                    />
                  </Flex>
                </Box>
              ),
            )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default TrendingTable;
