'use client'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'

export default function page() {
  return (
    <ChakraProvider>
    <Home title='Explore' bgImage='/bgimg.png' />
    </ChakraProvider>
  )
}
