import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score > 90 ? "green" : score > 80 ? "red" : score > 25 ? "blue" : "";
  return (
    <Badge colorScheme={color} fontSize={18} paddingX={2} borderRadius={3}>
      {score}
    </Badge>
  );
};

export default CriticScore;
