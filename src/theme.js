// import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

// extend the theme
const theme = extendTheme({ config })

export default theme