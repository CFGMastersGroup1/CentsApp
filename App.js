import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import {customTheme} from "./src/theme/Index";

export default function App() {

  return (
    <NativeBaseProvider theme={customTheme}>
      <Box flex={1} bgColor={"blueGray.300"} alignItems="center" justifyContent="center">
        <Text color={"gray.800"} fontSize={30}>Cents!</Text>
      </Box>
    </NativeBaseProvider>
  );
}