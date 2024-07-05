import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";


interface PropsAddTaskButton{
    children: ReactNode
    
}


export const AddTaskButton =({children}: PropsAddTaskButton)=>{
    return(
        <Button
          
          colorScheme="teal"
          color="primary.50"
          type="submit"
        >
          {children}
        </Button> 
    )
}