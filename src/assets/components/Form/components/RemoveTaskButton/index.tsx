import { Button, ButtonProps } from "@chakra-ui/react";



interface PropsRemoveTask extends ButtonProps{

}
    


export const RevomeTaskButton=({...props}: PropsRemoveTask)=>{
    return(
        <Button
        {...props}
        colorScheme="red"
        
      >
        {props.children}
      </Button>
    )
}