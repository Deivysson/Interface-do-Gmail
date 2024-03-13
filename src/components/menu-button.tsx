import { Pressable } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "expo-router"


import { colors } from "@/styles/colors"

export function MenuButton() {
  const navigation = useNavigation()
  

  return (
    <Pressable>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  )
}
