import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Ticket to Ride Calculator</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Game Setup')}>
                <Text>Let's Play!</Text>
            </TouchableOpacity>
        </View>
    )
}