import { Button, ButtonSpinner, HStack, Image, Text, useColorMode } from "@chakra-ui/react"
import logo from '../assets/m.jpg'
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='0.5rem 0.75rem'>
        <Image src={logo} boxSize='60px' borderRadius='full' boxShadow='base' />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar