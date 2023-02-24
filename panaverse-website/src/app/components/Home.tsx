// 'use client'
// import { Box, Container, Heading } from '@chakra-ui/react'
// import React from 'react'

// export default function Home(hello:any) {
//   return (
//     <Box bgImage={'hello.src'} py='200px' >
//         <Container maxW={1400} />
//         <Heading>{hello.title}</Heading>
//     </Box>
//   )
// }
'use client'
import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(props: { title?: string; bgImage: string }) {
  return (
    <Box bgImage={props.bgImage} py='200px' bgSize={'cover'} bgAttachment='fixed'>
      <Container maxW={1100}>
        <Heading size='2xl' color='black' >{props.title}</Heading>
      </Container>
    </Box>
  )
}
