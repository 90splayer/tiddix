import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-reveal';

const CoC = () => {
  return (
    <Box>
      <Container
        maxW="144rem"
        pt={{ base: '9rem', md: '12.2rem' }}
        pb={{ base: '11rem', md: '17.2rem' }}
        px={{ base: '2rem', sm: '5rem', md: '10.2rem', lg: '18.2rem' }}
      >
        <Stack spacing="5rem">
          <Stack spacing="5rem">
            <Fade duration={3500}>
              <Heading size="display2" letterSpacing="2px">
                Code Of Conduct
              </Heading>
            </Fade>
            <Fade>
              <Text size="body1" textAlign={{ base: 'unset', sm: 'justify' }}>
                We want all visitors and contributors of Tiddix to have a safe,
                interesting and friendly experience while using our product.
                <br />
                Accordingly, all contributors to this site must comply with this
                Code of Conduct.
                <br />
                <br />
                Tiddix is a community of creatives, supporters, fans and
                investors. We are here to ensure that your dreams are supported
                and given a fair chance to come true.
                <br />
                <br />
                Our community promotes equity and inclusion and we do our best
                to ensure that we, and consequently our users are not aiding or
                perpetuating harm to any segment of the community.
              </Text>
            </Fade>
          </Stack>
          <Stack spacing="2rem">
            <Fade duration={3500}>
              <Heading size="h2" letterSpacing="1px">
                Create Projects
              </Heading>
            </Fade>
            <Fade>
              <Text size="body1" textAlign={{ base: 'unset', sm: 'justify' }}>
                Creators in particular are expected to do the research required
                to ensure their projects and presence on the site are not
                perpetuating harm to any segment of the community. (Especially
                if you're telling a story that is not your own.) We may decline
                to host a project or block a user's profile if we believe their
                presence may cause harm.
              </Text>
            </Fade>
          </Stack>
          <Stack spacing="2rem">
            <Fade duration={3500}>
              <Heading size="h2" letterSpacing="1px">
                Our Creatives
              </Heading>
            </Fade>
            <Fade>
              <Text size="body1" textAlign={{ base: 'unset', sm: 'justify' }}>
                Creatives are expected to act in a ethical manner at all times.
                You are expected to provide accurate information and description
                of your project and your profile. You are expected to comply
                with the terms and conditions of the investment relationship.
              </Text>
            </Fade>
          </Stack>
          <Stack spacing="2rem">
            <Fade duration={3500}>
              <Heading size="h2" letterSpacing="1px">
                Our Investors
              </Heading>
            </Fade>
            <Fade>
              <Text size="body1" textAlign={{ base: 'unset', sm: 'justify' }}>
                Investors are expected to do their research and due diligence on
                each creative and project before they choose to support them.
                You are also expected to comply with the terms and conditions of
                the investment relationship.
              </Text>
            </Fade>
          </Stack>
          <Stack spacing="2rem">
            <Fade duration={3500}>
              <Heading size="h2" letterSpacing="1px">
                Our Supporters
              </Heading>
            </Fade>

            <Fade>
              <Text size="body1" textAlign={{ base: 'unset', sm: 'justify' }}>
                There is no us without you, and there is no stars without you!
                While we are grateful for your support, we would implore you to
                not use obscene, hateful, or harassing language.
                <br />
                <br /> This community is a safe space for everyone regardless of
                any status, race, religious creed, colour, national origin,
                ancestry, physical disability, mental disability, medical
                condition, genetic information, marital status, sex, gender,
                gender identity, gender expression, age and sexual orientation.
                Be cool and provide only constructive feedback, to help the
                creative improve their projects.
              </Text>
            </Fade>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default CoC;
