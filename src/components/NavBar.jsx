import { Button, ButtonSpinner, HStack, Image } from "@chakra-ui/react"
import logo from '../assets/m.jpg'
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='0.25rem 0.5rem'>
        <Image src={logo} boxSize='55px' borderRadius='full' boxShadow='base' />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar