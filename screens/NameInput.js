import React from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

import { MonoText } from '../components/StyledText';

export default class NameInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    static navigationOptions = {
        title: 'Names',
    };

    render() {
        return(

            <View style={{padding: 10}}>
                <Text style={[styles.title]}>
                    Herro, {this.state.text}
                </Text>
                <TextInput
                    style={{padding: 10, height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    underlineColorAndroid="transparent"
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 38,
    },
    input: {
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: "#222",
    }

})