import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSeletion = () => {
  return (
    <Card>
      <Skeleton height={"200px"}>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSeletion;
