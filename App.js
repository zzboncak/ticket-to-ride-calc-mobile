import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState([]);

  const routeValues = {
    1: 1,
    2: 2,
    3: 4,
    4: 7,
    5: 10,
    6: 15
  };

  const updateScore = (route) => {
    let newScoreHistory = scoreHistory.concat(routeValues[route]);
    let total = newScoreHistory.reduce((a, b) => a + b);
    setTotalScore(total);
    setScoreHistory(newScoreHistory);
  }

  const undoRoute = () => {
    let newScoreHistory = scoreHistory.slice(0, -1);
    if (newScoreHistory.length === 0) {
      setTotalScore(0);
      setScoreHistory(newScoreHistory);
    } else {
      let total = newScoreHistory.reduce((a, b) => a + b);
      setTotalScore(total);
      setScoreHistory(newScoreHistory);
    }
  }

  const clearScore = () => {
    setTotalScore(0);
    setScoreHistory([]);
  }

  let scoreHistoryText = scoreHistory.join(", ");

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Ticket to Ride Calculator</Text>
          <View>
            <Text style={styles.scoreText}>Total Score: </Text>
            <Text style={styles.scoreText}>{totalScore}</Text>
            <Text>{scoreHistoryText}</Text>
          </View>

        <Text id="routes-history"></Text>

        <View style={styles.editButtons}>
            <TouchableOpacity 
              onPress={() => clearScore()}
              style={styles.button}
            >
                <Text style={styles.buttonText}>Clear Score</Text>
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.button}
              onPress={() => undoRoute()}
              disabled={scoreHistory.length === 0}
            >
              <Text style={styles.buttonText}>Undo</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.calculator}>
            <View style={styles.calcRow}>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => updateScore(1)}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => updateScore(2)}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => updateScore(3)}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.calcRow}>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => updateScore(4)}>
                    <Text style={styles.buttonText}>4</Text>
                  </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => updateScore(5)}>
                    <Text style={styles.buttonText}>5</Text>
                  </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => updateScore(6)}>
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
