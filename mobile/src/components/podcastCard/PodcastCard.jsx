import { Image, Text, View } from 'react-native'
import InactivePlayIcon from '../../../assets/svg/play_inactive.svg'

import styles from './styles'

const PodcastCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/thumbnail.jpg')}
                />
                <View>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.description}>Description</Text>
                </View>
            </View>
            <View>
                <InactivePlayIcon width={50} height={50} />
            </View>
        </View>
    )
}

export default PodcastCard
