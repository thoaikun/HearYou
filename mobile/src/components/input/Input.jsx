import { useState } from "react";
import { TextInput } from "react-native";

/**
 *
 * @param {import("react-native/types").TextInputProps} props
 * @returns
 */
export default function Input(props) {
    const [value, setValue] = useState("");

    const onChangeText = (txt) => {
        setValue(txt)
        if (props.onChangeText) {
            props.onChangeText(txt)
        }
    }

    return <TextInput
        onChangeText={onChangeText}
        value={value}
        {...props}
        style={[{
            borderWidth: 2,
            borderColor: "#A2A9B8",
            paddingHorizontal: 29,
            paddingVertical: 34,
            textAlignVertical: "top",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            marginBottom: 40,
            fontWeight: value.length == 0 ? "600" : "400",
            fontSize: 16,
        }, props.style]}
    />
}