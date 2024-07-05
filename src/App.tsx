import { Heading } from "@chakra-ui/react";
import { Container } from "./assets/styles/styles";
import { Form } from "./assets/components/Form";

function App() {
  return (
    <Container>
      <Heading
        size="3xl"
        color="primary.800"
        fontWeight="bold"
      >
        Todo List
      </Heading>
      <Form />
    </Container>
  );
}

export default App;
