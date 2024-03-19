import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

function ScrollViewExample(): React.JSX.Element {
  return(
    <View style={styles.container}>
        <ScrollView horizontal={true}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        height: 250,
        backgroundColor: '#815ac0',
        width: 250
    },
    box2: {
        height: 250,
        backgroundColor: '#9163cb',
        width: 250
    },
    box3: {
        height: 250,
        backgroundColor: '#a06cd5',
        width: 250
    },
    box4: {
        height: 250,
        backgroundColor: '#b185db',
        width: 250
    },
});

export default ScrollViewExample;