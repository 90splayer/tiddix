import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import Audiences from 'app/components/about-page/Audiences';
import VisionMission from 'app/components/about-page/VisionMission';
import SignUpBanner from 'app/components/SignUpBanner';
import CorporateProfile from 'app/components/about-page/CorporateProfile';

const About: FC = () => {
  return (
    <Box>
      <Header />
      <CorporateProfile />
      {/* <Intro /> */}
      <Audiences />
      <VisionMission />
      <SignUpBanner />
      <Footer />
    </Box>
  );
};

export default About;
