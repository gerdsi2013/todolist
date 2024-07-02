import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  flexbox,
} from "@chakra-ui/react";

interface Props {
  text: string;
  children: ReactNode;
  
}

export const TaskLIst = ({
  text,
  children,
  
  
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
        color="blue"
      >
        {text}
      </Text>
      <HStack>{children}</HStack>  
    </Flex>
  );
};
