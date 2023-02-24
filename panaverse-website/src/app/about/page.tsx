// 'use client'
// import React from 'react'
// import { ChakraProvider, Image } from '@chakra-ui/react'
// import Home from '../components/Home'
// import bg from '../../../public/bgimg.png'

// export default function page() {
//   return (
//     <ChakraProvider>
//     <Home title='About' bgImage = '/bgimg.png'/>
//     </ChakraProvider>
//   )
// }
"use client"
import { Box, Button, ChakraProvider, Container, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import Home from '../components/Home';
import Instructor from '../components/Instructor';
import { RevealList } from  'next-reveal'
// import type { StaticImageData } from 'next/image';

export default function page() {
  return (
    <ChakraProvider>
    <Home title='About' bgImage='bgimg.png'/>
    <Box>
      <Container maxW={1400}>
        {/* px is used to give padding left and padding right
        py is used to give padding top and padding bottom
        my is used to give margin top and margin bottom
        mx is used to give margin left and margin right */}
        <Flex my={'50px'} px={{lg:'50px', base:'20px'}} gap='30px' display={{lg:'flex' , base:'grid'}}>
        <Box flexBasis={'50%'}>
        <RevealList interval={60} delay={200} origin='left' duration={1000} distance='500px' reset={true}>
          <Image m={'auto'} src='https://www.piaic.org/static/media/president-png.5b5f05c1.png' alt='President'/>
          </RevealList>
        </Box>
        <Box flexBasis={'50%'}>
          <RevealList interval={60} delay={200} origin='right' duration={1000} distance='500px' reset={true}>
          <Heading size={'2xl'}>Dr. Arif Alvi</Heading>
          <Text mt={5}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</Text>
          <Text mt={5}>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</Text>
          <Text mt={5}>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
          <Link href='https://www.piaic.org/about' target={'_blank'}><Button mt={5} colorScheme={'teal'} size='md'>More Info</Button></Link>
          </RevealList>
        </Box>
        </Flex>

      </Container>
      
    </Box>
    <Box>
      <Container maxW={1400}>
        <Flex my={'50px'} px={{lg:'50px', base:'20px'}} gap='30px' display={{lg:'flex' , base:'grid'}}>
       
        <Box flexBasis={'50%'}>
        <RevealList interval={60} delay={200} origin='left' duration={1000} distance='500px' reset={true}>
          <Heading size={'2xl'}>Panaverse DAO</Heading>
          <Text mt={5}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet</Text>
          <Text mt={5}>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
          <Link href='https://www.panaverse.co/' target={'_blank'}><Button mt={5} colorScheme={'teal'} size='md'>More Info</Button></Link>
          </RevealList>
        </Box>
        <Box flexBasis={'50%'} m='auto'>
        <RevealList interval={60} delay={200} origin='right' duration={1000} distance='500px' reset={true}>
          <Image m={'auto'} src='/log2.png'/>
          </RevealList>
        </Box>
        </Flex>

      </Container>
      
    </Box>
    <Box>
      <Container maxW={1400}>
        <Flex my={'50px'} px={{lg:'50px', base:'20px'}} gap='30px' display={{lg:'flex' , base:'grid'}}>
        <Box flexBasis={'50%'} m='auto'>
        <RevealList interval={60} delay={200} origin='left' duration={1000} distance='500px' reset={true}>
          <Image m={'auto'} src='https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_200_200/0/1638368405154?e=1682553600&v=beta&t=Dl5tBLNUq3Ro6CL19n-TksLOXNm92tDJ0llBgeTZJU8'/>
          </RevealList>
        </Box>
        <Box m={'auto'} flexBasis={'50%'}>
        <RevealList interval={60} delay={200} origin='right' duration={1000} distance='500px' reset={true}>
          <Heading size={'2xl'}>Zia Khan</Heading>
          <Text mt={5}>CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.</Text>
          <Text mt={5}>Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.</Text>
          <Link href='https://www.linkedin.com/in/ziaukhan/' target={'_blank'}><Button mt={5} colorScheme={'teal'} size='md'>More Info</Button></Link>
          </RevealList>
        </Box>
        </Flex>

      </Container>
      
    </Box>
    
    </ChakraProvider>
  )
}


