import { ScrollView, Text, TextInput, View } from "react-native";
import BackIcon from "../../../assets/svg/back_icon.svg";
import Button from "../../components/button/Button";
import styles from "./styles";

export default function QuestionForm() {
    return <ScrollView style={styles.container}>
        <View style={styles.appBar}>
            <BackIcon style={{ position: "absolute", bottom: 0, left: -10 }} />
            <Text style={styles.screenTitle}>Ask question</Text>
        </View>
        <TextInput
            placeholder="Ask question"
            multiline={true}
            numberOfLines={10}
            style={styles.input}
        />
        <Button content="Post question" style={styles.button} />
    </ScrollView>
}