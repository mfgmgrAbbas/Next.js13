'use client'
import { Box, Center, ChakraProvider, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'
import { cards } from '../components/database'
import { RevealList, RevealWrapper } from 'next-reveal'
import { motion } from 'framer-motion'

export default function page() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <ChakraProvider>
      
      
      <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
      <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
    <Home title='Syllabus' bgImage='/bgimg.png'/>
    </motion.div>
    </RevealWrapper>
    <Box pt={'30px'}>
      <Container maxW={1400}>
      <RevealList interval={60} delay={200} origin='left' duration={1000} distance='500px' reset={true}>

        <Center flexDirection={'column'}>
          
          <Heading size={'2xl'}>Course Syllabus</Heading>
          <Text mt={'20px'} textAlign='center' px={'130px'}>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
        </Center>
        </RevealList>
        <RevealList interval={60} delay= {200} origin='right' duration={1000} distance='500px' reset={true}>
        <Center flexDirection={'column'} mt='20px'>
          <Heading >Common in All</Heading>
          <Text mt={'20px'} textAlign='center' px={'130px'}>Every participant of the program will start by completing the following three core courses:</Text>
        </Center>
        </RevealList>
        <RevealList interval={60} delay={200} origin='left' duration={1000} distance='500px' reset={true}>
        <Center>
        <Flex mt={'30px'} gap='20px'>
          <Box textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'280px'}>
            <Heading>Quarter I</Heading>
          <Text pt={'5px'}>CS-101: Object-Oriented Programming using TypeScript and Typescript for React</Text> 
          </Box>
          
          <Box textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'280px'}>
            <Heading>Quarter II</Heading>
          <Text pt={'5px'}>W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text> 
          </Box>
          <Box textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'280px'}>
            <Heading>Quarter III</Heading>
          <Text pt={'5px'}>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text> 
          </Box>
        </Flex>
        </Center>
        </RevealList>
        <RevealList interval={60} delay={200} origin='right' duration={1000} distance='500px' reset={true}>
        <Center flexDirection={'column'} mt='20px'>
          <Heading >Specialized Tracks</Heading>
          <Text mt={'20px'} textAlign='center' px={'130px'}>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
        </Center>
        </RevealList>
        <RevealList interval={60} delay={200} origin='left' duration={1000} distance='500px' reset={true}>
        <Center>
        <Flex mt={'30px'} gap='20px'>
          <Box textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'350px'}>
            <Heading>Quarter IV</Heading>
          <Text pt={'5px'}>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Text> 
          </Box>
          <Box textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'350px'}>
            <Heading>Quarter V</Heading>
          <Text pt={'5px'}>MV-361: Developing Planet-Scale and Augmented Metaverse Experiences</Text> 
          </Box>
          
        </Flex>
        </Center>
        </RevealList>
      </Container>
      
      <Container maxW={1400} mt='30px' backgroundColor={'teal.100'} bgSize='cover' bgAttachment={'fixed'}>
      
      {cards.map((card)=>(
      <Box pt={'40px'} key={card.id}>
        <RevealList interval={60} delay={200} duration={1000} origin='right' distance='500px' reset={true}>
        <Center flexDirection={'column'} mt='50px'>
          
          <Heading size={'xl'} >{card.heading1}</Heading>
          <Text fontWeight={'medium'} mt={'20px'} textAlign='center' px={'130px'}>{card.text1}</Text>
        </Center>
        </RevealList>
        <RevealList interval={60} delay={200} duration={1000} origin='left' distance='500px' reset={true}>
        <Center>
        <Flex mt={'30px'} gap='20px'>
          <Box bgColor={'white'} textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'350px'}>
            <Heading>{card.heading2}</Heading>
          <Text fontWeight={'medium'} pt={'5px'}>{card.text2}</Text> 
          </Box>
          <Box bgColor={'white'} textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'350px'}>
            <Heading>{card.heading3}</Heading>
          <Text fontWeight={'medium'} pt={'5px'}>{card.text3}</Text> 
          </Box>
          
        </Flex>
        </Center>
        </RevealList>
        </Box>
        
        ))}
        
      </Container>
     
    </Box>
    
    </ChakraProvider>
  )
}

