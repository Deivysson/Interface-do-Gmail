import { View } from 'react-native'
import { Input } from '@/components/input'
import { MenuButton } from '@/components/menu-button'
import { Avatar } from '@/components/avatar'

export default function Home(){
    return(
        <View className='flex-1 bg-gray-900 pt-14 p-4'>
            <Input>
            <MenuButton />
            <Input.Field placeholder='Pesquisar no e-mail' />
            <Avatar source={{uri: "https://github.com/Deivysson.png"}} size='small'/>
            </Input>
        </View>
    )
}