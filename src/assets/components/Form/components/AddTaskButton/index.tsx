import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";


interface PropsAddTaskButton{
    children: ReactNode
    onClick: () => void
}


export const AddTaskButton =({children, onClick}: PropsAddTaskButton)=>{
    return(
        <Button
          onClick={onClick}
          colorScheme="blue"
          color="white"
          type="submit"
          
        >
          {children}
        </Button> 
    )
}