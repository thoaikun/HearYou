import React, { forwardRef } from 'react'
import { Pressable, Text } from 'react-native'
import styles from './styles'

const Button = ({ content, style }, ref) => {
    const [pressed, setPressed] = React.useState(false)

    return (
        <Pressable
            style={[styles.btn, pressed ? styles.pressed : null, style]}
            // onPress={() => onPress()}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            ref={ref}
        >
            <Text style={styles.content}>{content}</Text>
        </Pressable>
    )
}

export default forwardRef(Button)
