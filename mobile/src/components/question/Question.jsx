import { Text, View } from 'react-native';
import Button from "../button/Button";
import styles from './styles';

export default function Question({ title, description }) {
    return <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.description}>
            {description}
        </Text>
        <View style={{ display: "flex" }}>
            <Button
                content="Go to your answer"
                style={styles.button}
            />
        </View>
    </View>
}