import { Text, View } from "react-native";
import { Icon, IconProps } from "@tabler/icons-react-native";

import { colors } from "@/styles/theme";
import { s } from "./styles";

type props = {
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>;
}

export function Step({title, description, icon: Icon }: props) {
    return (
        <view style={s.cointainer}>

            {Icon && <Icon size={32} color={colors.red.base} />}

            <View style={s.details}>

            <text style={s.title}> {title} </text>
            <text style={s.description}> {description} </text>

            </View>

        </view>
    )
}