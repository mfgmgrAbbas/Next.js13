'use client'
import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(hello:any) {
  return (
    <Box bgImage={'hello.src'} py='200px' >
        <Container maxW={1400} />
        <Heading>{hello.title}</Heading>
    </Box>
  )
}
