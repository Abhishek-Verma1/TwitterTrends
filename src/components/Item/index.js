import React, { Component } from 'react';
import styles from './style';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { Header, Left, Right, Body, Title, Input, Icon, Button, Text } from 'native-base'

export default class Item extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flexDirection: 'column'}}>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.content}> {this.props.name} </Text>
                </View>               
                <View style={{backgroundColor: 'grey', height: .5}}/>
            </View>
        )
    }
}
