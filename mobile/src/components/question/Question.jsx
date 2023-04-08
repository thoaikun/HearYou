import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

export default function Question({ title, description }) {
    const [pressed, setPressed] = React.useState(false)

    return <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.description}>
            {description}
        </Text>
        <View style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Pressable
                style={[styles.btn, pressed ? styles.pressed : null]}
                // onPress={() => onPress()}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
            >
                <Text style={styles.content}>Go to your answer</Text>
            </Pressable>
        </View>
    </View>
}