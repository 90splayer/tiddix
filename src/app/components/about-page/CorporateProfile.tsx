import {
  Box,
  VStack,
  Text,
  Container,
  Heading,
  Flex,
  Image,
  Stack,
} from '@chakra-ui/react';
import profile from '../../assets/images/about/coporate-profile.webp';
import React from 'react';

const CorporateProfile = () => {
  return (
    <Box>
      <Container maxW="144rem" pt="12.2rem" px="0">
        <VStack mb="8.7rem">
          <Text
            mb="5rem"
            size="body2"
            bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
            bgClip="text"
          >
            CORPORATE PROFILE
          </Text>

          <Heading
            size="display2"
            textAlign="center"
            maxW="70.4rem"
            pb="3.5rem"
          >
            We take advantage of the shift towards decentralisation in finance
          </Heading>
        </VStack>
        <Box mb="8rem">
          <Image
            src={profile}
            alt="corporate-profile"
            borderRadius="30px"
            w="100%"
            maxH="428px"
            objectFit="cover"
          />
        </Box>
        <Flex flexDir="column" px="10.2rem">
          <Text mb="5rem" textAlign="justify">
            We are established in the United Kingdom in 2022, Tiddix is 100%
            British owned and operated and our head office is in London.
            <br />
            <br />
            We are proud to be the bridge upon which the recognition of the
            financial power of young creative minds stand. Since our
            establishment, we have made over 100 dreams come though and we are
            proud to report that we provided the launching pad to over a dozen
            very successful creatives careers thus far
          </Text>
          <Stack spacing="3rem">
            <Heading as="h2">Status quo</Heading>
            <Text textAlign="justify">
              In the creative economy today, the nature of centralised markets
              means that creatives can only raise funds for production through
              corporations like record labels and publishers often wrapping the
              artist into long-term unfavourable deals that can derail both
              creativity and longevity.
              <br />
              <br />
              This deadlock between creatives and corporations has been
              challenged via crowdfunding platforms like Kickstarter. But rather
              than creating opportunities for investment with valuable returns,
              these platforms often come with a “charity” spin making the
              “supporters” just donors happy to receive a stipulated reward. The
              result of this is a fan-only supporting model cutting out
              investors that might be interested in funding for financial
              return.
            </Text>
            <Heading as="h2">The disruption</Heading>
            <Text textAlign="justify">
              Tiddix aims to take advantage of the shift towards
              decentralisation in finance to invite investors to the creative
              space where creator metrics (views, engagements, followers,
              rankings etc) can be used to properly determine a creator’s value
              and prospects for investments.
              <br />
              <br />
              We hope that this new pipeline to funding will provide creators
              with the freedom to put out their best work while also giving
              investors an early stage entrance into both projects and the
              associated creators. A single smartphone in itself is now a
              powerful enough tool to launch a career in creativity. (this is
              very easy, why is funding still so difficult?) we are building xxx
              (state all the technology). With the advancement of blockchain
              technology and other forms of cross-border payments and trustless
              systems with programable smart-contracts, we believe the world is
              finally ready for this frontier of creativity.
            </Text>

            <Text mb="5rem" fontWeight="700" size="body1" color="#fff">
              Come Join Us
            </Text>

            <Text textAlign="justify">
              The trend already exists in the emergence of many successful
              independent artists across the creative field, but with investor
              backing, we believe the next producer would not be needing an
              established production studio to go to market. After all, with the
              democratisation of technology, most of the creativity we
              experience today are developed by a network of creators building
              magic from the comfort of their homes.
              <br />
              <br />
              What are you waiting for? Come join the movement! See you at the
              top, with all the other great creators.
            </Text>
            <br />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default CorporateProfile;