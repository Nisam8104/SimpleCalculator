import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [resultText, setResultText] = useState('');
  const [calcilationText, setCalculationText] = useState('');

  const onButtonClick = text => {
    console.log(text);
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
    console.log(text);
    if (operations.includes(resultText.toString().split('').pop())) return;
    setResultText(resultText + text);
  };
  const calculation = () => {
    setCalculationText(eval(resultText));
  };
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
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(1);
              }}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(2);
              }}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(3);
              }}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(4);
              }}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(5);
              }}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(6);
              }}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(7);
              }}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(8);
              }}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(9);
              }}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick('.');
              }}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(0);
              }}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick('=');
              }}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('DEL');
            }}>
            <Text style={styles.operationButton}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('AC');
            }}>
            <Text style={styles.operationButton}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('+');
            }}>
            <Text style={styles.operationButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('-');
            }}>
            <Text style={styles.operationButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('*');
            }}>
            <Text style={styles.operationButton}>*</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onOperationClick('/');
            }}>
            <Text style={styles.operationButton}>/</Text>
          </TouchableOpacity>
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
