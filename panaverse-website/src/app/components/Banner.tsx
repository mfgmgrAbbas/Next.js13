import { Box, Button, Container, Flex, Heading, Text, Image, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import avif from '../../../public/metaverse.avif'

export default function Banner() {
  return (
    <ChakraProvider>
   <Box 
   bg={'#ab24ab'} 
//    bgImage='bgimg.png'
>
    <Container maxW={1400} />
    <Flex pt={{lg:'150px', base:'30px'}} pb='100px' px={{lg:'40px', base:'0px'}} display={{lg:'flex', base:'grid'}}>
        <Box flexBasis={'50%'} px='40px'>
            <Heading color={'black'} size='2xl'>
            Prepare yourself for the Next Generation of Internet with Panaverse
            </Heading>
            <Text pt={'10px'}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
            <Button size={'lg'} mt={'10px'} colorScheme='teal'>
            More Info
            </Button>
        </Box>
        <Box mt={{lg:'-10px', base:"10"}} ml={{lg:'80px', base:'10px'}} flexBasis={'50%'}>
         <Image src='metaverse.avif' alt='metaverse pic' width={{lg:'700', base:'500'}} height={{lg:'300', base:'200'}} />
             
        </Box>
        
    </Flex>
   </Box>
   <Box>
    <Container maxW={1400} />
    <Flex gap={{lg:'100px', base:"10px"}} display={{lg:'flex', base:'grid'}}>
        <Box pt={'70px'} flexBasis={'50%'}>
            <Image src='metaverse.avif' alt='metaverse sign' />
        </Box>
        <Box  flexBasis={'50%'} pl={{lg:'50px', base:'5px'}} pt={{lg:'80px', base:'10px'}} px={{lg:'0', base:'5px'}}>
            <Heading pt={'20px'} size={'2xl'}>Program Of Studies</Heading>
            <Text pr={'80px'} pt={'10px'}>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
            <Button mt={'10px'} size={'lg'} colorScheme="teal">Reade More</Button>
        </Box>
    </Flex>
   </Box>
   <Box>
    <Container maxW={1400} />
    <Flex gap={{lg:'100px', base:"10px"}} display={{lg:'flex', base:'grid'}}>
        {/* <Box pl={'40px'} flexBasis={'50%'} pt='30px'  /> */}
           
        <Box pl={{lg:'60px', base:'5px'}} flexBasis={'50%'} pt={{lg:'80px', base:'10px'}} px={{lg:'0', base:'5px'}}>
            <Heading pt={'20px'} size={'2xl'}>Program Of Studies</Heading>
            <Text pr={'80px'} pt={'10px'}>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
            <Button mt={'10px'} size={'lg'} colorScheme="teal">Reade More</Button>
        </Box>
        
        <Box pt={'70px'} flexBasis={'50%'}>
            <Image src='metaverse.avif' alt='metaverse sign' />
        </Box>
    </Flex>
   </Box>
   </ChakraProvider>
  )
}
