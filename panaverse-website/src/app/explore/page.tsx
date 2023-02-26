'use client'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'
import { RevealList, RevealWrapper } from 'next-reveal'
import { motion } from 'framer-motion'

export default function page() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <ChakraProvider>
      <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
      <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
    <Home title='Explore' bgImage='/bgimg.png' />
    </motion.div>
    </RevealWrapper>
    </ChakraProvider>
  )
}
