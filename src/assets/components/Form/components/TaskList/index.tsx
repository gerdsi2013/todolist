import { ReactNode } from "react";
import {
  HStack,
} from "@chakra-ui/react";
import { StyledMotionTaskBox, TaskListFlex, TaskListText } from "./taskList.stiyles";

interface Props {
  text: string;
  children: ReactNode; 
}

export const TaskLIst = ({
  text,
  children,   
}: Props) => {
  return (
    <StyledMotionTaskBox
    initial={{ y:-10}}
    animate={{ y: 0}}
    transition={{  duration:0.5}}
    >
    <TaskListFlex  bg={'primary.50'}
    >
     <TaskListText
        >
        {text}
      </TaskListText >
      <HStack>{children}</HStack>  
    </TaskListFlex>
    </StyledMotionTaskBox>
  );
};
