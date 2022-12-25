import { Input} from 'native-base';

import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
 


export function MaskedInput({...rest}: TextInputMaskProps){
    return (
    <TextInputMask
        style={{
            backgroundColor:'#3f3f46',
            padding:10,
            width:'100%',
            height:60,
            fontSize: 16,
            marginBottom: 10,
            borderRadius: 8,
            borderColor: '#3b82f6',                   
        }}   
        placeholderTextColor={'white'}     
        {...rest}
    />
    )
}

 