import { Stack } from "expo-router"
import { colors } from "@/styles/theme"

export default function Leyout() {
  return <Stack  
  screenOptions={{ headerShown: false,
    contentStyle: { backgroundColor: colors.gray[100] }
   }}/>
}
