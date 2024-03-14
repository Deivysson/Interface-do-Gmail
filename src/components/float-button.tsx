import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export function FloatButton(){
    return(
        <TouchableOpacity style={styles.FloatButton} activeOpacity={0.7}>
            <MaterialIcons name="edit" size={22} color={colors.orange[500]} />
            <Text className="font-subtitle text-orange-500 px-1">Escrever</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    FloatButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#4A5568', // Equivalente a bg-gray-600
        borderRadius: 999, // Equivalente a rounded-full (um número grande para torná-lo um círculo)
        position: 'absolute',
        bottom: 16, // Equivalente a bottom-4
        right: 16, // Equivalente a right-4
        flexDirection: 'row', // Equivalente a flex-row
        alignItems: 'center', // Equivalente a items-center
        color: 'white',
        marginRight: 4
        
    }
  });