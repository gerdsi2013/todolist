import { Flex, Box, Text, FlexProps, TextProps, css, BoxProps } from "@chakra-ui/react";
import styled from "@emotion/styled"
import { motion } from "framer-motion";




export const MotionTaskBox = motion(Box)
export const StyledMotionTaskBox = styled(MotionTaskBox)(css({
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      gap:5,
}))

export const ContainerTaskList = styled(Box)<BoxProps>(css({  
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      gap:5,
         
}))as typeof Box;


export const TaskListFlex = styled(Flex)<FlexProps>(css({
      color:"blue",
      borderRadius:"md",
      width:"100%",
      alignItems:"center",
      justifyContent:"space-between",   
})) as typeof Flex;

export const TaskListText = styled(Text)<TextProps>(css({
        pl:"1rem",
        size:"1rem",
})) as typeof Text;
