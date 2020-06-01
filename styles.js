import { StyleSheet } from 'react-native';

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
    calcButton: {
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
    },
    button: {
        backgroundColor: '#D6B690',
        borderRadius: 20,
        height: 70,
        width: 200,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 300,
    },
});

export default styles;