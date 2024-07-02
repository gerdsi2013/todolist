import {
  HStack,
  Input,
} from "@chakra-ui/react";
import { TaskLIst } from "../TaskList";
import {
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { CustomForm } from "./styles";
import { AddTaskButton, ClearAllTasksButton, RevomeTaskButton } from "./components";


export interface TaskProps {
  id: number;
  text: string;
  
}
 
export const Form = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(
    []
  );
  const [newTask, setNewTask] = useState("");
  const [countPeddingTask, setCountPeddingTask] = useState<number>(0);
  const [isLoadingClearAll, setIsLoadingClearAll] = useState(false)

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if(newTask.trim() === '') return;
    setIsLoadingClearAll(true)
    
    const newTodo: TaskProps = {
      id: Date.now(),
      text: newTask,
      
    };
    setTasks([...tasks, newTodo]);
    setCountPeddingTask(tasks.length+1)
    setNewTask("");
  };
 const handleOnSubmit = (e: React.FormEvent<HTMLDivElement>) => {
   e.preventDefault();
   handleAddTask();

 }
  const handleRemoveTask = (id: number) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
    
    if(tasks.length <= 1){
     return setIsLoadingClearAll(false)
    }
    

  };

  return (
    <CustomForm
      onSubmit={handleOnSubmit}
    >
      <HStack>
        <Input
          type="text"
          placeholder="Add new task..."
          color={'blue'}
          value={newTask}
          onChange={handleOnChange}
        />
       
       <AddTaskButton onClick={
        ()=>{
          handleAddTask();
        }
       } >
       <AddIcon/>
       </AddTaskButton>

      </HStack>
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
            }}
            >
              <DeleteIcon />
            </RevomeTaskButton>
          </TaskLIst>
        );
      })}
   
      {isLoadingClearAll && (
        <ClearAllTasksButton text={`You have ${countPeddingTask} pedding tasks`} onclick={()=>{
          setTasks([]);
          setCountPeddingTask(0)
          setIsLoadingClearAll(!isLoadingClearAll)
        }} >
          Clear All
        </ClearAllTasksButton>
         
      )}


    </CustomForm>

  );
}
