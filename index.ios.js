/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    ScrollView,
    View
} from 'react-native';

class AwesomeProject extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const itemsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const items = [];
        this.getStorage().then((items) => this.setItems(items));
        this.state = {
            items:items,
            itemsDS: itemsDS.cloneWithRows(items),
            text: ''
        };
    }

    onChange (event) {
        console.log(event.nativeEvent.text);
        this.setState({text: event.nativeEvent.text});
    }

    onPress () {
        if (this.state.text) {
            this.state.items.push(this.state.text);
            this.setItems(this.state.items);
            this.setState({text: ''});
            this.updateStorage();
        }
    }

    getStorage () {
        return AsyncStorage
            .getItem('items')
            .then((items) => JSON.parse(items));
    }

    updateStorage () {
        return AsyncStorage.setItem('items', JSON.stringify(this.state.items));
    }

    setItems (items) {
        if(items) {
            const itemsDS = this.state.itemsDS.cloneWithRows(items);
            this.setState({items, itemsDS});
        }
    }

    render () {
        return (
            <ScrollView>
                <TextInput
                    style={styles.input}
                    onChange={this.onChange.bind(this)}
                    value={this.state.text}
                />
                <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
                    <View style={styles.submit}>
                        <Text>Add entry</Text>
                    </View>
                </TouchableWithoutFeedback>
                <ListView
                    enableEmptySections={true}
                    style={styles.list}
                    dataSource={this.state.itemsDS}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 5,
        paddingBottom: 25,
        paddingRight: 25,
        paddingLeft: 25,
        marginBottom: 10,
        backgroundColor: '#F5FCFF'
    },
    input: {
        flex: 1,
        marginTop:40,
        height: 10,
        marginRight: 20,
        marginLeft: 20,
        padding: 5,
        borderWidth: 1,
        borderColor: '#333',
        fontSize: 20
    },
    submit: {
        flex: 1,
        height: 10,
        alignSelf: 'center',
        margin: 20,
        padding: 5,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10
    },
});

// App registration and rendering
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
