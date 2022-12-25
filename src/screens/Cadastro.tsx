import { VStack, Heading, Center, ScrollView } from "native-base";
import { useForm, Controller } from 'react-hook-form';

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { MaskedInput } from "../components/MaskInput";

export function Cadastro(){

    const {control, handleSubmit, reset} = useForm();

    function handleCadastrar(data){
        console.log(data);
        reset();
    };

    
    return(
        <VStack flex={1} bgColor={"gray.300"} px={6} >
            <Center>
                <Heading my={10}>
                    Faça seu Cadastro
                </Heading>

                <ScrollView w={'full'}>
                    
                    <Controller 
                        control={control}
                        name="name"                        
                        render={({ field: {onChange, value}})=>(
                            <Input 
                                placeholder="Nome"
                                errorMessage=""
                                onChangeText={onChange}
                                value={value}
                            />
                        )}                        
                    />

                    <Controller 
                        control={control}
                        name="email"
                        render={({ field: {onChange,value}})=>(
                            <Input 
                                placeholder="E-mail"
                                errorMessage=""
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                        <Controller 
                        control={control}
                        name="password"
                        render={({ field: {onChange,value}})=>(
                            <Input 
                                placeholder="Senha"
                                errorMessage=""
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                            />                           
                        )}
                    />

                    <Controller 
                        control={control}
                        name="fone"
                        render={({ field: {onChange,value}})=>(
                            <Input 
                                placeholder="Telefone (00) 0000-0000"
                                errorMessage=""
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Controller 
                        control={control}
                        name="cpf"
                        render={({ field: {onChange,value}})=>(
                            <Input 
                                placeholder="CPF 000.000.000-00"
                                errorMessage=""
                                onChangeText={onChange}
                                value={value}
                            />   
                        )}
                    />

                    <Controller 
                        control={control}
                        name="dtnasc"
                        render={({ field: {onChange,value}})=>(
                            <Input 
                                placeholder="Data de Nascimento 00/00/0000"
                                errorMessage=""
                                onChangeText={onChange}
                                value={value}
                            />    
                        )}
                    />

                    <Button 
                        title="Cadastrar"
                        onPress={handleSubmit(handleCadastrar)}
                    />

                </ScrollView>
            </Center>
        </VStack>
    )
};