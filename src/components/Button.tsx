import { Button as ButtonNativeBase , IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function Button({title,...rest}: Props){
    return(
        <ButtonNativeBase
            w={'full'}
            h={16}
            bgColor={'blue.800'}
            rounded={8}
            _pressed={{
                bgColor: 'blue.600'
            }}
            {...rest}
        >
            <Text color={'white'} fontSize={"md"} >
                {title}
            </Text>
        </ButtonNativeBase>
    );
};