import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import icon1 from './Icons/icon1'
import icon2 from './Icons/icon2'
import icon3 from './Icons/icon3'

export default function Features() {
  return (
  <Box 
  // width={"500px"}
  // width={"850px"} m="auto" mt={"25px"}
  maxW={"850px"} m="auto" 
  >
    <Flex pt={"50px"}>
    <HStack>
   <Icon as={icon1} />
   <Text>30 days money back Guarantee</Text>
   </HStack>
    <HStack>
   <Icon as={icon2} />
   <Text>No setup fees 100% hassle-free</Text>
   </HStack>
    <HStack>
   <Icon as={icon3} />
   <Text>No monthly subscription Pay once and for all</Text>
   </HStack>
   </Flex>
  </Box>
  )
}
