import { ScrollView, Text, View } from "react-native";
import BackIcon from "../../../assets/svg/back_icon.svg";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import styles from "./styles";

export default function QuestionForm() {
    return <ScrollView style={styles.container}>
        <View style={styles.appBar}>
            <BackIcon style={{ position: "absolute", bottom: 0, left: -10 }} />
            <Text style={styles.screenTitle}>Ask question</Text>
        </View>
        <Input
            placeholder="Input your question"
            multiline
            numberOfLines={7}
        />
        <Button content="Post question" style={styles.button} />
    </ScrollView>
}