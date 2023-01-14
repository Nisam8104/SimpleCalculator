import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Pressable,
} from 'react-native';

const App = () => {
  const [resultText, setResultText] = useState('');
  const [calcilationText, setCalculationText] = useState(0);

  const onButtonClick = text => {
    if (text == '=') {
      return calculation();
    }
    setResultText(resultText + text);
  };
  const onOperationClick = text => {
    let operations = ['DEL', 'AC', '+', '-', '*', '/'];

    if (text == 'AC') {
      setResultText('');
      setCalculationText(0);
      return;
    }
    if (text == 'DEL') {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1),
      );
    }
    if (operations.includes(resultText.toString().split('').pop())) return;
    setResultText(resultText + text);
  };
  const calculation = () => {
    setCalculationText(eval(resultText));
  };
  const myData = [
    {text: 1},
    {text: 2},
    {text: 3},
    {text: 4},
    {text: 5},
    {text: 6},
    {text: 7},
    {text: 8},
    {text: 9},
    {text: '.'},
    {text: 0},
    {text: '='},
  ];
  const operationsData = [
    {text: "DEL"},
    {text: "AC"},
    {text: "+"},
    {text: "-"},
    {text: "*"},
    {text: "/"},
  ]
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcilationText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calcilationText}>{resultText}</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.numbers}>
        <FlatList
          data={myData}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() => {
                  onButtonClick(item.text);
                }}>
                <View style={{flex:1, padding:30}}>
                  <Text style={styles.number}>{item.text}</Text>
                </View>
              </Pressable>
            );
          }}
        />
        </View>
        <View style={styles.operations}>
          <FlatList
            data={operationsData}
            numColumns={1}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() => {
                    onOperationClick(item.text);
                  }}>
                    <View style={{flex:1, padding:30}}>
                    <Text style={styles.operationButton}>{item.text}</Text>
                    </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    backgroundColor: 'grey',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'blue',
  },
  operations: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  calcilationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    fontSize: 30,
    color: 'white',
  },
  operationButton: {
    fontSize: 30,
    color: 'white',
  },
});
export default App;
