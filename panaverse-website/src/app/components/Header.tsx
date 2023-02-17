import {Box, Button, Container, Flex, SimpleGrid, Text, ChakraProvider} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/panaverseLogo.png";

export default function Header() {
  return (
    //     <div>
    //     <Box bg='tomato' w='100%' p={4} color='white'>
    //     This is the Box
    //   </Box>
    //   <Box as='button'
    //   borderRadius='md'
    //   bg='tomato'
    //   color='white'
    //   // px include both side padding left and padding right
    //   px={4} h={8}>
    //   Button
    // </Box>
    // </div>
    <ChakraProvider>
    <Box boxShadow={"dark-lg"}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3, 1fr)">
          <Box pt={"5px"}>
            <Image
              src={logo}
              alt="Panaverse Logo"
              height={150}
              width={150}
            ></Image>
          </Box>
          <Flex
          color={"black"} fontSize="18px"
          fontWeight={"semibold"} 
          gap={10}
          >
            <Link href={"./"}>Home</Link>
            <Link href={"/"}>Syllabus</Link>
            <Link href={""}>Explore</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
          </Flex>
          <Box>
            <Button mt='10px' size= 'lg' colorScheme='teal' float='right'>Apply</Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    </ChakraProvider>
  );
}
