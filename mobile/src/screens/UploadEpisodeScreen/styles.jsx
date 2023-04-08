import { StyleSheet } from "react-native";

export default StyleSheet.create({
    appBar: {
        position: "absolute",
        left: 0,
        right: 0,
        height: 80,
        marginBottom: 45,
        paddingBottom: 5,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 100,
    },
    screenTitle: {
        fontWeight: 600,
        fontSize: 25,
    },
    container: {
        paddingHorizontal: 38,
    },
    button: {
        backgroundColor: "#E070C8",
        paddingVertical: 15,
    }
})