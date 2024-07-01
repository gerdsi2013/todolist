import {
  Button,
  HStack,
  Input,
} from "@chakra-ui/react";
import { TaskLIst } from "../TaskList";
import {
  CheckIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { TaskProps } from "../../../interface";
import { CustomForm } from "./styles";

export const Form = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(
    []
  );
  const [newTask, setNewTask] = useState("");
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newTodo: TaskProps = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTodo]);
    setNewTask("");
  };

  const handleRemoveTask = (id: number) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const handleToggleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };
  return (
    <CustomForm
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTask;
      }}
    >
      <HStack>
        <Input
          type="text"
          placeholder="add new task..."
          value={newTask}
          onChange={handleOnChange}
        />

        <Button
          onClick={() => {
            handleAddTask();
          }}
          colorScheme="blue"
          color="white"
          type="submit"
        >
          add
        </Button>
      </HStack>

      {tasks.map((task) => {
        return (
          <TaskLIst
            key={task.id}
            text={task.text}
            textDecoration={
              task.completed
                ? "line-through"
                : "none"
            }
            textDecorationColor={
              task.completed ? "blue" : "inherit"
            }
          >
            <Button
              colorScheme="green"
              onClick={() =>
                handleToggleDone(task.id)
              }
            >
              <CheckIcon />
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                handleRemoveTask(task.id);
              }}
            >
              <DeleteIcon />
            </Button>
          </TaskLIst>
        );
      })}
    </CustomForm>
  );
};
