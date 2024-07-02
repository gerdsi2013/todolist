import { Button, Flex ,Text

 } from "@chakra-ui/react";
import { ReactNode } from "react";


interface PropsClearTask{
   text:string
   children:ReactNode
   onclick: () => void
}



export const ClearAllTasksButton = ({ text, children, onclick}: PropsClearTask)=>{
    return(
        <Flex justifyContent={'space-between'} mt={'1rem'} pl={'1rem'} alignItems={'center'} >
        <Text color={'red'}>{text}</Text>
        <Button
          colorScheme="red"
          onClick={onclick}
        >
          {children}
        </Button>
      </Flex>

    )
}


