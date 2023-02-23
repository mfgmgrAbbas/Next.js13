'use client'
import React from 'react'
import { ChakraProvider, Image } from '@chakra-ui/react'
import Home from '../components/Home'
import bg from '../../../public/bgimg.png'

export default function page() {
  return (
    <ChakraProvider>
    <Home title='About' src = '/bgimg.png'/>
    </ChakraProvider>
  )
}
