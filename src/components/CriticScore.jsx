import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }) => {
    const color = score > 75 ? "green" : score > 65 ? "yello" : "red"

  return (
    <Badge fontSize="0.75rem" padding="0.2rem 0.5rem" borderRadius="4px" colorScheme={color}> {score} </Badge>
  )
}

export default CriticScore