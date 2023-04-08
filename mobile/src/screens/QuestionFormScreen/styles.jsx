import { StyleSheet } from "react-native";

export default StyleSheet.create({
    appBar: {
        height: 80,
        marginBottom: 45,
        paddingBottom: 5,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    screenTitle: {
        fontWeight: 600,
        fontSize: 25,
    },
    container: {
        paddingHorizontal: 38,
    },
    input: {
        minHeight: 350,
        borderWidth: 2,
        borderColor: "#A2A9B8",
        paddingHorizontal: 29,
        paddingVertical: 34,
        textAlignVertical: "top",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#E070C8",
        paddingVertical: 15,
    }
})