import React from 'react';
import { View, Text, SafeAreaView, StyleSheet} from 'react-native';

const Progress = () => {
    return (
        <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.container}>
            <Text>Hello Scan 🧾</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#7A0195',
        alignItems: 'center',
    },
})

export default Progress;