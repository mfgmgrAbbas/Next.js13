'use client'
import { ChakraProvider, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'

export default function page() {
  return (
    <ChakraProvider>
    <Home  title='Contact' bgImage='/bgimg.png' />
    </ChakraProvider>
  )
}
