'use client'
import { Box, Center, ChakraProvider, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import RevealWrapper from 'next-reveal/dist/esm/components/RevealWrapper'
import React from 'react'
import { data } from './database'

export default function Instructor() {
  return (
    <ChakraProvider>
        <Box>
        <Container maxW={1400}>
        <Center>
        <Heading size={'2xl'} py={'20px'}>Our Instructors</Heading>
        </Center>
        <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={false}>
        <Flex flexDir={'row'}>
        
        {/* <SimpleGrid minChildWidth={200}> */}
        {data.map((ins)=>(
            <Box 
            key={ins.id}
            >
                
                <Center>
                <Image mt={'10px'} borderRadius={'full'}
                height={90}width={90}
                 src={ins.src} />
                 
                </Center>
                
                <Heading pt={'10px'} size={'md'} textAlign={'center'}>{ins.heading}</Heading>
                <Text px={"30px"} pb='20px' fontSize='sm' textAlign={'center'}>{ins.text}</Text>
                
            </Box>
        //        /* <Box>
        //         <Center>
        //         <Image borderRadius={'full'}
        //         height={100 }width={100}
        //          src='https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_200_200/0/1638368405154?e=1682553600&v=beta&t=Dl5tBLNUq3Ro6CL19n-TksLOXNm92tDJ0llBgeTZJU8' alt='Zia Khan'/>
                 
        //         </Center>
        //         <Heading textAlign={'center'}>Zia Khan</Heading>
        //         <Text px={"40px"} textAlign={'center'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                
        //     </Box>
        //     <Box>
        //         <Center>
        //         <Image borderRadius={'full'}
        //         height={100 }width={100}
        //          src='https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_200_200/0/1638368405154?e=1682553600&v=beta&t=Dl5tBLNUq3Ro6CL19n-TksLOXNm92tDJ0llBgeTZJU8' alt='Zia Khan'/>
                 
        //         </Center>
        //         <Heading textAlign={'center'}>Zia Khan</Heading>
        //         <Text px={"40px"} textAlign={'center'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                
        //     </Box>
        //     <Box>
        //         <Center>
        //         <Image borderRadius={'full'}
        //         height={100 }width={100}
        //          src='https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_200_200/0/1638368405154?e=1682553600&v=beta&t=Dl5tBLNUq3Ro6CL19n-TksLOXNm92tDJ0llBgeTZJU8' alt='Zia Khan'/>
                 
        //         </Center>
        //         <Heading textAlign={'center'}>Zia Khan</Heading>
        //         <Text px={"40px"} textAlign={'center'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                
        //     </Box>
        //     <Box>
        //         <Center>
        //         <Image borderRadius={'full'}
        //         height={100 }width={100}
        //          src='https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_200_200/0/1638368405154?e=1682553600&v=beta&t=Dl5tBLNUq3Ro6CL19n-TksLOXNm92tDJ0llBgeTZJU8' alt='Zia Khan'/>
                 
        //         </Center>
        //         <Heading textAlign={'center'}>Zia Khan</Heading>
        //         <Text px={"40px"} textAlign={'center'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                
        //     </Box>
        // </SimpleGrid> */
        ))}
        </Flex>
        
        
        </RevealWrapper>
        </Container>
        </Box>
    </ChakraProvider>
  )
}
