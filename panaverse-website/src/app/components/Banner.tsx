'use client'
import { Box, Button, Container, Flex, Heading, Text, Image, ChakraProvider, Link, Center } from '@chakra-ui/react'
import React from 'react'
import { RevealWrapper } from 'next-reveal'
import { ArrowForwardIcon } from '@chakra-ui/icons'


// import avif from '../../../public/metaverse.avif'

export default function Banner() {
  return (
    <ChakraProvider>
    
   <Box 
//    bg={'#ab24ab'} 
   bgSize='cover' bgAttachment={'fixed'}
   bgImage='/bgimg.png'
>
    <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
    <Container maxW={1400} />
    <Flex pt={{lg:'150px', base:'30px'}} pb='100px' px={{lg:'40px', base:'0px'}} display={{lg:'flex', base:'grid'}}>
        <Box flexBasis={'50%'} px='40px'>
            <Heading color={'black'} size='2xl'>
            Prepare yourself for the Next Generation of Internet with Panaverse
            </Heading>
            <Text pt={'10px'}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
            <Link href='/syllabus' target={'_blank'}><Button size={'lg'} mt={'10px'} colorScheme='teal'>
            More Info
            </Button></Link>
        </Box>
        <Box mt={{lg:'-10px', base:"10"}} ml={{lg:'80px', base:'10px'}} flexBasis={'50%'} >
         <Image src='metaverse.avif' alt='metaverse pic' width={{lg:'700', base:'500'}} height={{lg:'300', base:'200'}} borderRadius='full' />
             
        </Box>
        
    </Flex>
    </RevealWrapper>
   </Box>
   <Box bgColor={'blue.100'}>
    <Container maxW={1400} />
    <Flex gap={{lg:'100px', base:"10px"}} display={{lg:'flex', base:'grid'}}>
        <Box pt={'70px'} flexBasis={'50%'}>
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
            <Image src='metaverse.avif' width={{lg:'500', base:'300'}} height={{lg:'250', base:'150'}} my='10px' alt='metaverse sign' borderRadius={'full'}/>
            </RevealWrapper>
        </Box>
        <Box  flexBasis={'50%'} pl={{lg:'50px', base:'5px'}} pt={{lg:'80px', base:'10px'}} px={{lg:'0', base:'5px'}}>
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
            <Heading py={'10px'} size={'2xl'} >Program Of Studies</Heading>
            <Text pr={'80px'} pt={'10px'}>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
            <Link href='/syllabus' target={'_blank'}><Button mt={'10px'} size={'lg'} colorScheme="teal" mb={'20px'}>Reade More</Button></Link>
            </RevealWrapper>
        </Box>
    </Flex>
   </Box>
   <Box 
  //  bg={'#ab24ab'} 
   bgSize='cover' bgAttachment={'fixed'}
   bgImage='/bgimg.png'
>
    <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
    <Container maxW={1400} />
    <Center flexDirection={'column'}>
          <Heading size={'2xl'} py='20px'>Our Top Courses</Heading>
          
        </Center>
       
        <Center>
        <Flex mt={'30px'} gap='20px'>
          <Box textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'280px'}>
            <Heading>Metaverse</Heading>
          <Text pt={'5px'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.</Text>
          <Link><Button colorScheme={'teal'} variant={'link'} rightIcon={<ArrowForwardIcon/>}>Learn More</Button> </Link>
          </Box>
          <Box textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'280px'}>
            <Heading>Blockchain</Heading>
          <Text pt={'5px'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.</Text>
          <Link><Button colorScheme={'teal'} variant={'link'} rightIcon={<ArrowForwardIcon/>}>Learn More</Button> </Link> 
          </Box>
          <Box textAlign={'center'} p ='30px' boxShadow={'dark-lg'} borderRadius='20px' width={'280px'} >
            <Heading>Typescript</Heading>
          <Text pt={'5px'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.</Text>
          <Link><Button colorScheme={'teal'} rightIcon={<ArrowForwardIcon />} variant='link'>Learn More</Button> </Link> 
          </Box>
        </Flex>
        </Center>
        <Center>
        <Link href='/syllabus' target={'_blank'}><Button colorScheme={'teal'} my='20px'>View all</Button></Link>
        </Center>
    </RevealWrapper>
   </Box>
   <Box bgColor={'gray.200'} px='50px'>

   <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>

      <Container maxW={1400}  >
        <Flex gap={'100px'}>
          <Box flexBasis={'50%'} py='50px'>
            <Heading >What Is Panaverse DAO?</Heading>
            <Text pt={'10px'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</Text>
            <Link href='https://www.panaverse.co/' target={'_blank'}><Button colorScheme={'teal'} my='20px'>Read More</Button></Link>
          </Box>
          <Box flexBasis={'50%'}>
            <Image src='/img.png' width={{lg:'500', base:'300'}} height={{lg:'250', base:'150'}} mx='100px' mt={'40px'} alt='metaverse sign' borderRadius={'full'} />
          </Box>
        </Flex>
     
      </Container>
      </RevealWrapper>
    </Box>
    <Box bgColor={'blackAlpha.300'} >
      
    <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>

      <Container maxW={1400} borderRadius='full'>
      
       
      
        <Box  py={'50px'}>
        <Center>
          <Heading size={'2xl'}>The Program in a Nutshell</Heading>
          </Center>
          <Center>
          <Heading size={'xl'} color='blue.500' pt='10px'>Earn While You Learn</Heading>
          </Center>
          <Center>
          <Text align={'center'} pt='10px' px={'80px'}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</Text>
          </Center>
        </Box>
       
        
       
       
      </Container>
      </RevealWrapper>
    
    </Box>
   
   </ChakraProvider>
  )
}
