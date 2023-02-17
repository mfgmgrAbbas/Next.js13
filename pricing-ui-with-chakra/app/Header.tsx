import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react"
export default function Header() {
  return (
//  paddingtop: get space within the div while margintop will take space outer of div
//  pt= paddintop pb= padding bottom
  <Box textAlign= {{base: "left", md:"left", lg:"center"}} 
  pl= "15px" bg= "#4179FA" pt="90" pb= "250" color= "white" >
    <Heading pb= "10px" >Simple pricing for your business</Heading>
    <Text>Plans that are carefully crafted to suit your business.</Text>
  </Box>
  )
}
