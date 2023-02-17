import React from 'react'
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
export default function Practice() {
  return (
    <div>
        <ChakraProvider>
        <h1 style={{color:"red", fontSize:"20px" }} >hello world</h1>
        <h2>hi----</h2>
        <p>paragrafh</p>
        <Heading>Chakra</Heading>
        <Heading>Chakra</Heading> 
        <Heading as={"h1"} color ="red" fontSize={"48px"} >Chakra heading h1</Heading>
        <Heading as={"h3"} color = {"blue"}>Chakra heading h3</Heading>
        <Text fontWeight={"bold"} >This is paragrafh</Text>
        <Heading>Flex Box in HTML CSS</Heading>
        {/* <div style={{color:"white", display: "flex", flexDirection:"column"}}> */}
        {/* <div style={{color:"white", display: "flex", justifyContent:"space-between"}}> */}
        {/* <div style={{color:"white", display: "flex", justifyContent:"space-around"}}> */}
        {/* <div style={{color:"white", display: "flex", justifyContent:"end"}}> */}
        {/* <div style={{color:"white", display: "flex", justifyContent:"end",
         backgroundColor: "green", height:"500px"}}> */}
        {/* <div style={{color:"white", display: "flex", justifyContent:"start",
         backgroundColor: "green", height:"500px"}}> */}
        {/* <div style={{color:"white", display: "flex", justifyContent:"space-between",
         backgroundColor: "green", height:"500px"}}> */}
        {/* <div style={{color:"white", display: "flex", , alignItems:"center",
         backgroundColor: "green", height:"500px"}}> */}
        <div style={{color:"white", display: "flex", alignItems:"center" , justifyContent:"center",
         backgroundColor: "green", height:"500px"}}>
        {/* <div style={{color:"white", display: "flex", alignItems:"end" ,
         backgroundColor: "green", height:"500px"}}> */}
          {/* <div style={{backgroundColor: "red", padding: "50px"}} >div1</div>
          <div style={{backgroundColor: "blue", padding:"50px" }} >div 2</div>
          <div style={{backgroundColor: "orange", padding:"50px" }} >div 3</div> */}
          <div style={{backgroundColor: "red", padding: "50px", height:"100px"}} >div1</div>
          <div style={{backgroundColor: "blue", padding:"50px", height:"100px" }} >div 2</div>
          <div style={{backgroundColor: "orange", padding:"50px", height:"100px" }} >div 3</div>
        </div>
      </ChakraProvider>
    </div>
  )
}
