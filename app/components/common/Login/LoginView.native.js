import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';

import styles from '../../../native/styles';

export default (props) => 
    <View>
        <Text>Username</Text>
        <TextInput 
            style={styles.textInput}
            editable = {true}
            maxLength = {40}
        />
        <Text>Password</Text>
        <TextInput 
            style={styles.textInput}
            editable = {true}
            maxLength = {40}
        />
        <Button
            title={props.clickStatus}
            onPress={props.onPress}
            accessibilityLabel="Click to login"
        />  
    </View>;