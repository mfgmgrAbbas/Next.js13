'use client'
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Image,
  ChakraProvider
} from "@chakra-ui/react";
// import Image from 'next/image'

import Link from "next/link";
import React from "react";
import logo from "../../../public/panaverseLogo.png";
import { IconButton } from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  EmailIcon,
  LockIcon,
} from "@chakra-ui/icons";

export default function Footer() {
  return (
    <ChakraProvider>
    <Box bg="black">
      <Container maxW={1300}>
        {/* <SimpleGrid textAlign={{lg:'start',base:'center'}} spacing='30px' py='60px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}> */}
        <SimpleGrid
          textAlign={{ lg: "start", base: "center" }}
          // spacingX={'30px'}
          // spacingY= {'30px'}
          spacing={"30px"}
          py={"60px"}
          // templateColumns="repeat(4, 1fr)">
          templateColumns= {{base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)'}}>
          <Box>
            <Heading pb="20px" color="white">
              About us
            </Heading>
            {/* <Image src={logo}  alt = "Panaverse Logo"></Image> */}
            <Image
              m={{ base: "auto", lg: "0" }}
              src="/logo3.png"
              alt="Panaverse Logo"
            ></Image>

            <Text pt="15px" 
            // pr="40px" 
            pr={{base:'0', lg:"40px"}} 

            color="gray">
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread{" "}
            </Text>
          </Box>
          <Box>
            <Heading color="white">Useful Links</Heading>
            <Grid pt="40px" color="gray">
              <Link href={""}>Home</Link>
              <Link href={""}>Syllabus</Link>
              <Link href={""}>Explore</Link>
              <Link href={""}>About</Link>
              <Link href={""}>Contact</Link>
            </Grid>
          </Box>
          <Box>
            <Heading color={"white"}>Follow us</Heading>
            <Grid pt="40px" color="gray">
              <Link href={""}>FaceBook</Link>
              <Link href={""}>Linkedin</Link>
              <Link href={""}>Twitter</Link>
              <Link href={""}>YouTube</Link>
              <Link href={""}>GitHub</Link>
            </Grid>
          </Box>
          <Box>
            <Heading color={"white"}>Contact us</Heading>
            <Grid color='gray'>
            <HStack>
                <IconButton
                  alignItems={"end"}
                  color={"white"}
                  colorScheme="teal"
                  aria-label="Call Segun"
                  icon={<PhoneIcon />}
                />
                <Text>+92 315 8887488</Text>
              </HStack>
              <HStack>
                <IconButton
                  alignItems={"end"}
                  color={"white"}
                  colorScheme="teal"
                  aria-label="Send email"
                  icon={<EmailIcon />}
                />
                <Text>smasnb5@gmail.com</Text>
              </HStack>
                
            </Grid>

            {/* <SimpleGrid pt="40px" color="gray">
              <HStack>
                <IconButton
                  alignItems={"end"}
                  color={"white"}
                  colorScheme="teal"
                  aria-label="Call Segun"
                  icon={<PhoneIcon />}
                />
                <Text>+92 315 8887488</Text>
              </HStack>
              <HStack>
                <IconButton
                  alignItems={"end"}
                  color={"white"}
                  colorScheme="teal"
                  aria-label="Send email"
                  icon={<EmailIcon />}
                />
                <Text>smasnb5@gmail.com</Text>
              </HStack>
              </SimpleGrid> */}

              {/* <Grid */}
              {/* // templateColumns= {{lg: 'repeat(4, 1fr)', base: 'repeat(1, 1fr)'}}
                    // textAlign={{lg:'start',base:'center'}} py='60px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}
                    //   minChildWidth={'120px'} 
                    //   spacing={"40px"}> */}
              <SimpleGrid 
            //   templateColumns={{lg: 'repeat(4, 1fr)', base: 'repeat(1, 1fr)'}} 
            //   templateColumns="repeat(2, 1fr)" 
            //   gap={6}
            //   minChildWidth='120px' spacing='40px'
              columns={[1, null, 2]} spacingX= '40px' spacingY= '20px'
            //   columns={2} spacingX={{base:'auto', lg:'40px'}} spacingY={{base:'auto', lg:'20px'}}
              >
                <Box pt={"10px"} height={"80px"}>
                  <Link
                    href={"https://goo.gl/maps/jXXAZYoyroTu5j9r5"}
                    target="_blank"
                  >
                    <Text color="gray" pb={"10px"}>Karachi</Text>
                  </Link>
                  <AspectRatio ratio={16 / 9}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1676569383626!5m2!1sen!2s" />
                  </AspectRatio>
                </Box>

                <Box pt={"10px"} height={"80px"}>
                  <Link
                    href={"https://goo.gl/maps/7QrdxbBegR57Zp4HA"}
                    target="_blank"
                  >
                    <Text color="gray" pb="10px">Lahore</Text>
                  </Link>
                  <AspectRatio ratio={16 / 9}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435525.28956771066!2d73.79303710207067!3d31.48180133811726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1676569477925!5m2!1sen!2s" />
                  </AspectRatio>
                </Box>

                <Box pt={"10px"} height={"80px"}>
                  <Link
                    href={"https://goo.gl/maps/imiecfbr6fRQ7bgV8"}
                    target="_blank"
                  >
                    <Text color="gray" pt={"25px"}>Islamabad</Text>
                  </Link>
                  <AspectRatio ratio={16 / 9}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425292.2137982175!2d72.80591942218109!3d33.61580039479871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1676569578436!5m2!1sen!2s" />
                  </AspectRatio>
                </Box>

                <Box pt={"10px"} height={"80px"}>
                  <Link
                    href={"https://goo.gl/maps/D5SaaiosredE6vSu7"}
                    target="_blank"
                  >
                    <Text color="gray" pt={"25px"}>Peshawar</Text>
                  </Link>
                  <AspectRatio ratio={16 / 9}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211750.1647964046!2d71.42538531776188!3d33.977213685362436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1676569638447!5m2!1sen!2s" />
                  </AspectRatio>
                </Box>

                {/* </Grid> */}

                {/* <Center  w='40px' h='40px' bg='tomato' color='white'>
                        <PhoneIcon />
                    </Center> */}
                {/* <Text>+92 315 8887488</Text> */}
                {/* <Link href={'/'}></Link>
                    <Link href={'/'}>smasnb5@gmail.com</Link> */}
                
              </SimpleGrid>
              <Link
                  href={"https://goo.gl/maps/22iQTPtzRCXTa3B28"}
                  target="_blank"
                >
                  Kamra KalanAttock, Punjab
                </Link>
            
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    </ChakraProvider>
  );
}
