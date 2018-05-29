import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text, ToolbarAndroid,
    TouchableOpacity,
    View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.containerToolbar}>
                <ToolbarAndroid
                    title="AwesomeApp"
                    style={styles.toolbar}
                    titleColor={'#fff'}/>
            </View>

        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    containerToolbar: {
        flex: 1,
        //justifyContent: 'center',
        justifyContent: 'flex-start',
        // https://github.com/facebook/react-native/issues/2957#event-417214498
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        marginTop: 0,
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    contentContainer: {
        paddingTop: 30,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    codeHighlightText: { // light blue
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: { // light grey
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },

});
