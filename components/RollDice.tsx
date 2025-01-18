// import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const { height } = Dimensions.get('window');

const dices = [
    require('../assets/dice-1.jpg'),
    require('../assets/dice-2.jpg'),
    require('../assets/dice-3.jpg'),
    require('../assets/dice-4.jpg'),
    require('../assets/dice-5.jpg'),
    require('../assets/dice-6.jpg'),
];

// const options = {
//     enableVibrateFallback: true,
//     ignoreAndroidSystemSettings: false,
// };

const RollDice = () => {
    const [image, setImage] = React.useState(dices[0]);

    const getRandomDice = () => {
        setImage(dices[Math.floor(Math.random() * dices.length)]);

        // ReactNativeHapticFeedback.trigger('impactMedium', options);
    };

    return (
        <View style={[styles.container]}>
            <Text style={styles.headingText}>Roll Dice</Text>
            <View style={styles.buttonPosition}>
                <Image
                    source={image}
                    style={styles.image}
                    width={300}
                    height={300}
                />
                <TouchableOpacity onPress={getRandomDice}>
                    <Text style={styles.buttonCenter}>
                        Roll Dice
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RollDice;

const styles = StyleSheet.create({
    container: {
        height: height / 2 - 40,
        borderRadius: 5,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 10,
    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonPosition: {
        flex: 1,
        marginHorizontal: 'auto',
        marginVertical: 50,
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
        margin: 20,
        borderRadius: 10,
        borderColor: 'black',
    },
    buttonCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#6c5ce7',
        padding: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
    },
});
