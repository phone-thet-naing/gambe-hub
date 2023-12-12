import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }) => {
    const color = score > 75 ? "green" : score > 65 ? "yello" : "red"

  return (
    <Badge fontSize="1rem" padding="0.2rem 0.7rem" borderRadius="25%" colorScheme={color}> {score} </Badge>
  )
}

export default CriticScore