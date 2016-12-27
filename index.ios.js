/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    ListView,
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

class AwesomeProject extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const shoppingList = ['Arroz', 'Atum', 'Ovos', 'Yogurtes', 'Laranjas', 'Limões', 'Pão', 'Azeite'];
        this.state = {
            shoppingList:shoppingList,
            dataSource: ds.cloneWithRows(shoppingList),
            text: 'click to add new item'
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Shopping List
                </Text>
                <ListView style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={styles.rowData}>{rowData}</Text>}
                />
                <TextInput
                    style={{height: 20}}
                    onChangeText={(text) => this.setState({
                        shoppingList: this.state.shoppingList.push(text),
                        dataSource: this.state.dataSource.cloneWithRows(this.state.shoppingList)
                    })}
                    value={this.state.text}
                    defaltValue='click to add new item'
                >
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        paddingLeft:5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF'
    },
    title: {
        alignItems: 'center',
        color:'black',
        fontWeight:'bold'
    },
    listView: {
        flex:1
    },
    rowData: {
        flex:1,
        color:'red',
        padding:2
    }
});

// App registration and rendering
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
