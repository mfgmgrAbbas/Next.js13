import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

interface Props {
    Component: any,
    pageProps: any

}
const MyApp: React.FC<Props> = ({Component, pageProps})=>{
    return(
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
export default MyApp;