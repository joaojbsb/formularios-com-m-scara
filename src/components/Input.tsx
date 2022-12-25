import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';
import { MaskedTextInputProps } from 'react-native-mask-text';

type Props = IInputProps & MaskedTextInputProps & {
    errorMessage?: string | null;
};

export function Input({errorMessage = null, isInvalid, ...rest}: Props){
    const invalid = !!errorMessage || isInvalid;

    return(
        <FormControl mb={4} isInvalid={invalid} >
            <NativeBaseInput 
                bg={"gray.700"}
                fontSize={"md"}
                h={16} 
                rounded={8}               
                _focus={{
                    bg:'gray.200',
                    borderWidth: 1,
                    borderColor: 'blue.500'
                }}
                isInvalid={invalid}           
                {...rest}
            />

            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>

    );
};