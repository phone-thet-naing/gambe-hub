import { HStack, Icon } from '@chakra-ui/react'
import { FaWindows, FaApple, FaLinux, FaPlaystation, FaXbox, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone, MdPhoneAndroid } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"

const PlatformIconList = ({ platforms }) => {
  const iconMap = {
    pc: FaWindows,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe
  }

  return (
    <HStack marginY="0.25rem">
        { 
          platforms.map((platform, index) => <Icon aria-label={platform.slug} key={index} color="gray.500" cursor="pointer" marginEnd="0.25rem" as={iconMap[platform.slug]} />) 
        }
    </HStack>
  )
}

export default PlatformIconList