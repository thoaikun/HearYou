import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import BackIcon from "../../../assets/svg/back_icon.svg";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import styles from "./styles";

const TOPICS = [
    "peer-pressure",
    "depression",
    "anxiety",
    "self-esteem",
    "burn-out",
    "stress",
]

export default function UploadEpisodeScreen() {

    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();

    return <>
        <View style={styles.appBar}>
            <BackIcon style={{ position: "absolute", bottom: 0, left: 38 }} />
            <Text style={styles.screenTitle}>Upload</Text>
        </View>
        <ScrollView style={styles.container}>
            <View style={{ height: 130 }} />
            <Input placeholder="Title"
                onSubmitEditing={() => ref2.current.focus() } />
            <Input placeholder="Description"
                multiline numberOfLines={6}
                ref={ref2}
                onSubmitEditing={() => ref4.current.focus() }
                blurOnSubmit={false} />
            {/* <Input placeholder="Podcast"
                ref={ref3}
                onSubmitEditing={() => ref4.current.focus()}
                blurOnSubmit={false}  /> */}
            <View style={{
                borderWidth: 2,
                borderColor: "#A2A9B8",
                paddingHorizontal: 17,
                textAlignVertical: "top",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                marginBottom: 40,
                fontSize: 16,
            }}>
                <Picker>
                    {TOPICS.map((topic, index) => <Picker.Item key={topic} label={topic} value={topic} />)}
                </Picker>
            </View>
            <Button content="Post question" style={styles.button}
                ref={ref5} />
        </ScrollView>
    </>
}