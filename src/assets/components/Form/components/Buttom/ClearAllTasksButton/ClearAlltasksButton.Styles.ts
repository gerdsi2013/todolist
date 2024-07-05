import { Flex, Text, FlexProps, TextProps, css } from "@chakra-ui/react";
import styled from "@emotion/styled";






export const ClearAllTasksFlex = styled(Flex)<FlexProps>(()=> css({
    justifyContent:'space-between',
    mt:'1rem',
    pl:'1rem',
    alignItems:'center' 
}))as typeof Flex

export const ClearAllTasksText = styled(Text)<TextProps>(()=> css({
    color:'red'
})) as typeof Text