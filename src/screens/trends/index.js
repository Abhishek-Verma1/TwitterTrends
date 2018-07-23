import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground, FlatList, NetInfo, Alert } from 'react-native';
import { connect } from 'react-redux';
import Item from '../../components/Item';
import { List, Card, Text, Icon } from 'native-base';
import styles from './style';

import { Login } from '../../actions/auth'

import { Dimensions } from 'react-native';

import { width, height } from 'react-native-dimension'
import Spinner from 'react-native-spinkit'

class TwitterTrends extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            isConnection: true
        })
    }

    componentDidMount() {

        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

        NetInfo.isConnected.fetch().done(
           (isConnected) => { this.setState({ status: isConnected }); }
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.feeds != nextProps.feeds && nextProps.feeds != null) {

            const { feeds, isFetching } = this.props
        }
    }

    handleConnectionChange = (isConnected) => {

        this.setState({
            isConnection: isConnected
        })

        if (isConnected) {
            const { feeds, isFetching } = this.props

            this.props.dispatch(Login());
        } else {
            Alert.alert("Please check your internet connection.");
        }
    }

    pushScreen = () => {

    }

    render() {

        const { feeds, isFetching } = this.props

        return (
            <View style={styles.content}>
                <View style={{height: 65, backgroundColor: 'gray'}}>
                    <Text style={{flex: 1, marginTop: 26, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Twitter Trends</Text>
                </View>

                {isFetching === true ?
                    <FlatList
                        key={feeds[0].trends.name}
                        data={feeds[0].trends}
                        keyExtractor={(item, index) => item.name}
                        renderItem={({item}) => <TouchableOpacity
                            onPress={() => this.pushScreen()}>
                            <Item name={item.name} url={item.url}/>
                        </TouchableOpacity>}
                    /> : null}
                
                {this.state.isConnection === true && isFetching === false ? 
                    <View style={{ position: 'absolute', width: width(100), height: height(100), backgroundColor: '#00000000', left: 0, top: 0, justifyContent: 'center' }}>
                        <Spinner style={{ alignSelf: 'center' }} isVisible={!isFetching} size={100} type="FadingCircleAlt" color='#7197BD'/>
                    </View> : null}

            </View>
        );
    }
}

const mapStateToProps = state => ({
    feeds: state.feed.feed,
    isFetching: state.feed.isFetching,
})

export default connect(mapStateToProps)(TwitterTrends);