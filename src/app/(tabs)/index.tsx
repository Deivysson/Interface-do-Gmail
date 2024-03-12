import { View, Text  } from 'react-native'
import { Input } from '@/components/input'

export default function Home(){
    return(
        <View className='flex-1 bg-gray-900'>
            <Input>
            <Input.Field />
            </Input>
        </View>
    )
}