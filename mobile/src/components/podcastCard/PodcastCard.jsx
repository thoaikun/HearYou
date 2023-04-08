import { Image, Text, View } from 'react-native'
import InactivePlayIcon from '../../../assets/svg/play_inactive.svg'

import styles from './styles'

const PodcastCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.infoContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/thumbnail.jpg')}
                    />
                    <Text style={styles.title}>Title</Text>
                </View>
                <View>
                    <InactivePlayIcon width={50} height={50} />
                </View>
            </View>
            <Text style={styles.description}>
                The Mindful Minute is a weekly podcast that explores the
                practice of mindfulness and how it can improve our daily lives.
            </Text>
            <View style={styles.bar}></View>
        </View>
    )
}

export default PodcastCard
