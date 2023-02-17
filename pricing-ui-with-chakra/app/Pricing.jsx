import React from 'react'
import { Box, Flex, Text, Heading, Button, HStack, Icon } from "@chakra-ui/react"
import checkMarkIcon from './Icons/checkMarkIcon'
export default function Pricing() {
  return (
//    box container
   <Box maxWidth={"950px"} 
  //  m = "auto" 
   //   ml={{ base: "20px", lg: "auto" }}
      //   mr={{ base: "20px", lg: "auto" }}
   mt={"-150px"}
   mx= {{base:"20px", lg:"auto"}}
   //   mx="20px"
  //  mx="20px" 
  // mx="auto"
    // ml= "auto"
    // mr="auto"
   bg= "white" borderRadius={"10px"}  overflow= "hidden"
   boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"}>
        <Flex direction={{base:'column', md:"column", lg:"row"}}>
            {/* right box start */}
        <Box  bg={"#72dd72"} p= "40px" textAlign={"center"}>
            <Text fontWeight="bold" fontSize={"24PX"} >
        Premium PRO</Text>
        <Heading fontSize={"60px"}>
        $329</Heading>
        <Text>billed just once</Text>
        <Button mt={"20px"} w={"300px"} bg={"#2056d3"} color={"white"}>Get Started</Button>
        </Box>
        {/* right box end */}
        <Box pt={"50px"} pl = "25px" pr={"15px"}>
          <Text mb={"10px"}>
          Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb={"15px"}>
            <Icon as= {checkMarkIcon} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as= {checkMarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as= {checkMarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as= {checkMarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
        </Flex>

    {/* Box container end */}
    </Box>
  )
}
