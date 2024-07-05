import { Button, ButtonProps } from "@chakra-ui/react";



export const RevomeTaskButton=({...props}: ButtonProps)=>{
    return(
        <Button
        {...props}
        colorScheme="red"
        
      >
        {props.children}
      </Button>
    )
}