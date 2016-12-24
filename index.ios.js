/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    MapView
} from 'react-native';

export default class AwesomeProject extends Component {
    _onPressButton() {
        console.log("You tapped the button!");
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Shopping App Awesome!
            </Text>
            <Text style={styles.instructions}>
                Os dados estão lançados, em breve isto estará
                a bombar!!
            </Text>
            <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
            </Text>
            <TouchableHighlight style={styles.button}
                                onPress={this._onPressButton}
                                underlayColor={'pink'}>
                <Text style={styles.buttonText}>Button</Text>
            </TouchableHighlight>
            <MapView
                style={{height: 200, width: 200, margin: 40}}
                showsUserLocation={true}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'blue'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
