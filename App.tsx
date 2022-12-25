import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Cadastro } from './src/screens/Cadastro';


export default function App() {
  return (
    <NativeBaseProvider>
      <Cadastro />
    </NativeBaseProvider>
  );
};

