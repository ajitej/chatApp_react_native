import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        };
    }

    render(){
        return (
            <View>
                <Text style={styles.title}>
                    Enter your name :
                </Text>   
                <TextInput
                    style={styles.nameInput}
                    placeholder="Enter your name please."
                    underlineColorAndroid='transparent'
                    onChangeText={(text)=>{
                        this.setState({
                            name: text
                        })
                    }}
                    value={this.state.name}
                />  
                <TouchableOpacity 
                    onPress={()=>{
                        Actions.chat({
                            name: this.state.name
                        })
                    }}
                >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>    
                </TouchableOpacity>       
            </View>    
        );
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 40
    },
    nameInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 2,
        margin: 20,
        padding: 5
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    }
})

