"use client"

import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Header from './Header'
import Pricing from "./Pricing"
import Practice from './Practice'
import Features from './Features'
export default function Home() {
  return (
   
      <ChakraProvider>
        
        <Header/>
        <Pricing />
        <Features />

        {/* <Practice /> */}
      </ChakraProvider>
    
  )
}
