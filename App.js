import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

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
          <View>
            <Text style={styles.scoreText}>Total Score: </Text>
            <Text style={styles.scoreText}>{totalScore}</Text>
            <Text>{scoreHistoryText}</Text>
          </View>

        <Text id="routes-history"></Text>

        <View style={styles.editButtons}>
            <TouchableOpacity 
              onPress={() => clearScore()}
              style={styles.calcButton}
            >
                <Text style={styles.buttonText}>Clear Score</Text>
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.calcButton}
              onPress={() => undoRoute()}
              disabled={scoreHistory.length === 0}
            >
              <Text style={styles.buttonText}>Undo</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.calculator}>
            <View style={styles.calcRow}>
                <TouchableOpacity 
                  style={styles.calcButton}
                  onPress={() => updateScore(1)}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.calcButton}
                  onPress={() => updateScore(2)}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.calcButton}
                  onPress={() => updateScore(3)}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.calcRow}>
                <TouchableOpacity 
                  style={styles.calcButton}
                  onPress={() => updateScore(4)}>
                    <Text style={styles.buttonText}>4</Text>
                  </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.calcButton}
                  onPress={() => updateScore(5)}>
                    <Text style={styles.buttonText}>5</Text>
                  </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.calcButton}
                  onPress={() => updateScore(6)}>
                    <Text style={styles.buttonText}>6</Text>
                  </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}