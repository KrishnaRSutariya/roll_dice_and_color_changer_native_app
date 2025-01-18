import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const { floor, random } = Math;
import React from 'react';

const { height } = Dimensions.get('window');

const RandomColorGenerate = () => {

    const hexR = '0123456789abcdef';

    const [backgroundColor, setBackgroundColor] = React.useState('#ffffff');

    const generateColor = () => {
        setBackgroundColor(`${Array.from({ length: 6 }).reduce(c => `${c}${hexR[floor(random() * 16)]}`, '#')}`);
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.headingText}>App.js</Text>
            <View style={styles.buttonPosition}>
                <TouchableOpacity onPress={generateColor}>
                    <Text style={styles.buttonCenter}>
                        Click Here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RandomColorGenerate;

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
    buttonCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
    },
});
