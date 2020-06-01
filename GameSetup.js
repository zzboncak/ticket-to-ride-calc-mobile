import React, { useState } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import styles from './styles';

export default function GameSetup({ navigation }) {
    const [value, setValue] = useState('');
    const [players, setPlayers] = useState([]);

    const validateInput = (input) => {
        if (value > 5 || value < 1) {
            return 'Only 1 - 5 players can play Ticket to Ride';
        } else {
            return ''
        }
    }

    const generateNameInputs = (numberOfPlayers = 0) => {
        let playerInputs = [];
        for (let i = 0; i < numberOfPlayers; i++) {
            playerInputs.push(<TextInput placeholder={`Dad ${i + 1}`} />)
        }
        setPlayers(playerInputs);
    }

    const errorMessage = validateInput(value);

    return (
        <View style={styles.container}>
            <Text>How many people are playing the game?</Text>
            <Text>{errorMessage}</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 100, backgroundColor: 'gray', borderRadius: 5, textAlign: 'center', fontSize: 18 }}
                placeholder='3'
                keyboardType='number-pad'
                onChangeText={text => setValue(text)}
                value={value}    
            />
            <Button
                title='Next'
                onPress={() => {
                    generateNameInputs(value)
                    // navigation.navigate("App")
                }}
                disabled={!!errorMessage}
            />
            <View>
                {players}
            </View>
        </View>
    )
}