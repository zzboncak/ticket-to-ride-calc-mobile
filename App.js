import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, PushNotificationIOS } from 'react-native';

export default function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState([]);

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Ticket to Ride Calculator</Text>
          <View>
            <Text style={styles.scoreText}>Total Score: </Text>
            <Text style={styles.scoreText}>{totalScore}</Text>
          </View>

        <Text id="routes-history"></Text>

        <View style={styles.editButtons}>
            <TouchableOpacity 
              onPress={() => setTotalScore(0)}
              style={styles.button}
            >
                <Text style={styles.buttonText}>Clear Score</Text>
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.buttonText}>Undo</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.calculator}>
            <View style={styles.calcRow}>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => setTotalScore(totalScore + 1)}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => setTotalScore(totalScore + 2)}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => setTotalScore(totalScore + 4)}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.calcRow}>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => setTotalScore(totalScore + 7)}>
                    <Text style={styles.buttonText}>4</Text>
                  </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => setTotalScore(totalScore + 10)}>
                    <Text style={styles.buttonText}>5</Text>
                  </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => setTotalScore(totalScore + 15)}>
                    <Text style={styles.buttonText}>6</Text>
                  </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CD3C1A',
    alignItems: 'center',
  },
  header: {
    marginTop: 100,
    fontFamily: "AmericanTypewriter-Bold",
    fontSize: 40,
    textAlign: "center"
  },
  scoreText: {
    fontSize: 30,
    textAlign: "center"
  },
  calculator: {
    position: "absolute",
    bottom: 20,
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
  },
  calcRow: {
    flexDirection: "row",
    flex: 1,
    height: 100,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: '#D6B690',
    borderRadius: 20,
    height: 70,
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  editButtons: {
    flexDirection: "row"
  }
});
