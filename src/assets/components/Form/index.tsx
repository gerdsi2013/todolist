import {

  Input,
} from "@chakra-ui/react";
import { TaskLIst } from "./components/TaskList";
import {
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { useState } from "react";

import { AddTaskButton, ClearAllTasksButton, RevomeTaskButton } from "./components";
import { useForm } from "react-hook-form";
import { ConntainerForm, CusttomForm } from "./styles";
import { ContainerTaskList } from "./components/TaskList/taskList.stiyles";


export interface TaskProps {
  id: number;
  text: string; 
}

interface InputForm extends TaskProps{}
 
export const Form = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(
    []
  );
  
  const [countPeddingTask, setCountPeddingTask] = useState<number>(0);
  const [isLoadingClearAll, setIsLoadingClearAll] = useState(false)
  const{handleSubmit, register  } = useForm<InputForm>()
  

  const handleAddTask = (data: any) => {    
    setIsLoadingClearAll(true)
    
    const newTodo: TaskProps = {
      id: Date.now(),
      text: data.text,
    };
    setTasks([...tasks, newTodo]);
    setCountPeddingTask(tasks.length+1)
  
  };


  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id!== id));
    setCountPeddingTask(tasks.length-1)
  };

  return (
    <CusttomForm>
      <ConntainerForm
      onSubmit={handleSubmit(handleAddTask)}
      >
        <Input
          type="text"
          placeholder="Add new task..."
          color="text.light"      
          {...register('text')}
        />
       
       <AddTaskButton >
       <AddIcon/>
       </AddTaskButton>
      </ConntainerForm>

       <ContainerTaskList 

       as='section'>
      {tasks.map((task) => {
        return (
          <TaskLIst
            key={task.id}
            text={task.text}
          >
            <RevomeTaskButton 
            onClick={()=>{
              handleRemoveTask(task.id);
              setCountPeddingTask(tasks.length-1);
              if(countPeddingTask == 1){
                setIsLoadingClearAll(!isLoadingClearAll)
              }
            }}
            >
              <DeleteIcon />
            </RevomeTaskButton>
          </TaskLIst>
        );
      })}
   </ContainerTaskList>

      {isLoadingClearAll && (
        <ClearAllTasksButton text={`You have ${countPeddingTask} pedding tasks`} onclick={()=>{
          setTasks([]);
          setCountPeddingTask(0)
          setIsLoadingClearAll(!isLoadingClearAll)
        }} >
          Clear All
        </ClearAllTasksButton> 
      )}

    </CusttomForm>

  );
}
