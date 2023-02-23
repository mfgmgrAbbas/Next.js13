'use client'
import { HamburgerIcon } from "@chakra-ui/icons";
import {Box, Button, Container, Flex, SimpleGrid, Text, ChakraProvider, Menu, MenuButton, IconButton, MenuList, MenuItem} from "@chakra-ui/react";
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
    <Box boxShadow={"lg"}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns={{lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)"}}>
          <Box>
            <Image
              src={logo}
              alt="Panaverse Logo"
            ></Image>
          </Box>
          <Flex
          display={{lg:'flex', base:'none'}}
          placeItems={'center'}
          color={"black"} fontSize="18px"
          fontWeight={"semibold"} 
          gap={10}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/syllabus"}>Syllabus</Link>
            <Link href={"/explore"}>Explore</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </Flex>
          <Box display={{lg:'initial', base:"none"}}>
            <Button  mt='10px' size= 'lg' colorScheme='teal' float='right'>Apply</Button>
          </Box>
          <Box pt={'20px'} display={{lg:'none', base:"initial"}}>
            <Menu>
              <MenuButton float={'right'} as={IconButton} aria-label='Options'
              icon={<HamburgerIcon />} variant='outline'  />
              <MenuList>
                <MenuItem>
                Home
                </MenuItem>
                <MenuItem>
                Syllabus
                </MenuItem>
                <MenuItem>
                Explore
                </MenuItem>
                <MenuItem>
                About
                </MenuItem>
                <MenuItem>
                Contact
                </MenuItem>
              </MenuList>

            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    </ChakraProvider>
  );
}
