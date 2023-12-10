import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/m.jpg'
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {  
  return (
    <HStack justifyContent='space-between' padding="1rem 1rem 0 1rem">        
        <Image src={logo} boxSize='55px' borderRadius='full' boxShadow='base' />
        <ColorModeSwitch />
    </HStack>
  ) 
}

export default NavBar