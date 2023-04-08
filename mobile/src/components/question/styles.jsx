import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderRadius: 30,
        paddingHorizontal: 29,
        paddingVertical: 22,
        display: "flex",
        // elevation: 1,
        borderWidth: 2,
        borderColor: "#eee"
    },
    title: {
        fontWeight: 600,
        fontSize: 20,
    },
    description: {
        color: "#A2A9B8",
        minHeight: 100,
        fontSize: 18,
    },
    button: {
        width: "auto",
        paddingVertical: 12,
    }
});