import "./App.css";
import SimpleForm from "./SimpleForm.tsx";
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Heading>Test exemples de Formiz</Heading>
        <Text> Simple form : </Text>
        <SimpleForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
