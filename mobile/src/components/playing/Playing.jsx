import React, { useState } from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
import Play from '../../../assets/svg/play2.svg';
import Pause from '../../../assets/svg/pause.svg';
import { IconButton } from "@react-native-material/core";

export default Playing = ({ title }) => {
    const [isPlay, setIsPlay] = useState(true)

    return (
        <View style={styles.playingContainer}>
            <View style={styles.playingEpisode}>
                <Image source={require("../../../assets/podcastthumnial.png")} style={styles.playingLogo} />
                <Text style={styles.playingTitle}>Title</Text>
            </View>
            <IconButton
                icon={isPlay ? <Play height="40" width="40" /> : <Pause height="40" width="40" />}
                onPress={() => setIsPlay(!isPlay)}
            />
        </View>
    )
}