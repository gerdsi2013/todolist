import { Heading } from "@chakra-ui/react";
import { Container } from "./assets/styles/styles";
import { Form } from "./assets/components/Form";

function App() {
  return (
    <Container>
      <Heading
        as="h1"
        size="3xl"
        color="blue"
        fontWeight="bold"
      >
        Todo list
      </Heading>
      <Form />
    </Container>
  );
}

export default App;
