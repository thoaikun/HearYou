import React from "react";
import Playing from "../../components/playing/Playing";
import { View } from "react-native";
import styles from "./styles";

export default HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Playing />
        </View>
    )
}