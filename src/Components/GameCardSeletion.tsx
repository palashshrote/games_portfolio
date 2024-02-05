import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSeletion = () => {
  return (
    <Card width={"300px"} borderRadius={10} overflow="hidden">
      <Skeleton height={"200px"}>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSeletion;
