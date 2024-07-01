import { ReactNode } from "react";
import {
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";

interface Props {
  text: string;
  children: ReactNode;
  textDecoration: string;
  textDecorationColor: string;
}

export const TaskLIst = ({
  text,
  children,
  textDecoration,
  textDecorationColor,
}: Props) => {
  return (
    <Flex
      mt=".5rem"
      bg="#f7f7f7"
      borderRadius="md"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        pl="1rem"
        size="1rem"
        color="black"
        textDecoration={textDecoration}
        textDecorationColor={textDecorationColor}
      >
        {text}
      </Text>
      <HStack>{children}</HStack>
    </Flex>
  );
};
