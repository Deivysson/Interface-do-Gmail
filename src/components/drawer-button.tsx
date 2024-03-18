import clsx from "clsx";
import { Pressable, View, Text } from "react-native";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

export function DrawerButton() {
    const isDividir = true

    return (
        <Pressable 
        className={clsx('py-2 w-full', {
        'border-b ml-10 border-gray-500': isDividir,
        })}>

            <View 
            className={clsx('flex-row items-center gap-4 h-14 px-6 -ml-2', {
                '-ml-14': isDividir,
            })}
            >
                <MaterialIcons name="email" size={20} color={colors.orange[300]} />
                <Text>Todas as caixa de E-mail</Text>
            </View>
        </Pressable>
    )
    
}