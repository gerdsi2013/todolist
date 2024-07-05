import { Button} from "@chakra-ui/react";
import { ReactNode } from "react";
import { ClearAllTasksFlex, ClearAllTasksText } from "./ClearAlltasksButton.Styles";



interface PropsClearTask{
   text:string
   children:ReactNode
   onclick: () => void
}

export const ClearAllTasksButton = ({ text, children, onclick}: PropsClearTask)=>{
    return(
        <ClearAllTasksFlex>
        <ClearAllTasksText>{text}</ClearAllTasksText>
        <Button
          colorScheme={'purple'}
          onClick={onclick}
        >
          {children}
        </Button>
      </ClearAllTasksFlex>

    )
}


