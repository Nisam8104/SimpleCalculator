import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [subhanallah, setSubhanallah] = useState(0);
  const [alhamdulillah, setAlhamdulillah] = useState(0);
  const [allahuakbar, setAllahuakbar] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.subhanallahboxStyle}>
          <Text>{subhanallah}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (subhanallah == 32) {
              setSubhanallah('33 Subhanallaha Completed');
            } else if (subhanallah == '33 Subhanallaha Completed') {
            } else {
              setSubhanallah(subhanallah + 1);
            }
          }}>
          <View style={styles.subhanallatextStyle}>
            <Text>subhanallah</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSubhanallah(0);
          }}>
          <View style={styles.resettextStyle}>
            <Text>Reset</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.alhamdulillahboxStyle}>
          <Text>{alhamdulillah}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (alhamdulillah == 32) {
              setAlhamdulillah('33 alhamdulillah Completed');
            } else if (alhamdulillah == '33 alhamdulillah Completed') {
            } else {
              setAlhamdulillah(alhamdulillah + 1);
            }
          }}>
          <View style={styles.alhamdulillahStyle}>
            <Text>alhamdulillah</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setAlhamdulillah(0);
          }}>
          <View style={styles.resettextStyle}>
            <Text>Reset</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.allahuakbarboxStyle}>
          <Text>{allahuakbar}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (allahuakbar == 32) {
              setAllahuakbar('33 allahuakbar Completed');
            } else if (allahuakbar == '33 allahuakbar Completed') {
            } else {
              setAllahuakbar(allahuakbar + 1);
            }
          }}>
          <View style={styles.allahuakbarStyle}>
            <Text>allahuakbar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setAllahuakbar(0);
          }}>
          <View style={styles.resettextStyle}>
            <Text>Reset</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',

    backgroundColor: 'white',
    flex: 1,
  },

  subhanallatextStyle: {
    backgroundColor: 'skyblue',
    width: 300,
    height: 45,
    fontSize: 100,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    marginLeft: 25,
  },

  alhamdulillahStyle: {
    backgroundColor: 'skyblue',
    width: 300,
    height: 45,
    fontSize: 100,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    marginLeft: 25,
  },
  allahuakbarStyle: {
    backgroundColor: 'skyblue',
    width: 300,
    height: 45,
    fontSize: 100,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    marginLeft: 25,
  },

  resettextStyle: {
    backgroundColor: 'yellow',
    width: 300,
    height: 45,
    fontSize: 100,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 50,
    marginLeft: 25,
  },

  subhanallahboxStyle: {
    width: 300,
    height: 45,
    backgroundColor: 'red',
    fontSize: 20,
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 150,
    marginBottom: 10,
    marginLeft: 25,
  },

  alhamdulillahboxStyle: {
    width: 300,
    height: 45,
    backgroundColor: 'red',
    fontSize: 20,
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    marginTop: -30,
    marginLeft: 25,
  },
  allahuakbarboxStyle: {
    width: 300,
    height: 45,
    backgroundColor: 'red',
    fontSize: 20,
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
  },
});

export default App;

// const App = () => {
// const [buttonColors,setButtonColors]=useState('red');
// // var buttonColors = 'red';

// return(

// <Button title='Green' color={buttonColors} onPress={()=> {
//   console.log('Nisam',buttonColors);
//   if(buttonColors == 'red') {

//     setButtonColors('green');
//   } else if (buttonColors == 'green'){
//     setButtonColors('yellow');
//   } else if (buttonColors == 'yellow'){
//     setButtonColors('red');
//   }

// } }></Button>
// )
// };

// export default App;

// const App = () => {

//  return (
//  <View style={styles.container}>

// {/* <Button title='Nisamkjnjknjknl' color='red'
//  onPress={()=>alert("poda")} >

// </Button>

// <Button title='Yasi  ghghfyjgghfgjhg' color='red'
//  onPress={()=>alert("povoola")} >

// </Button>   */}

//   <TouchableOpacity onPress={() => {
//     console.log('Nisam tapped');
//   }}
//   style={ styles.buttoncontainer}
//  >

//  <Text style={styles.buttontext}>Nisam </Text>

//  </TouchableOpacity>

//  <TouchableOpacity onPress={() => {
//     console.log('yasi tapped');
//   }}
//   style={ styles.buttoncontainer2}
//  >

//  <Text style={styles.buttontext2}>Yasi </Text>

//  </TouchableOpacity>

//  <TouchableOpacity onPress={() => {
//     console.log('Davood tapped');
//   }}
//   style={ styles.buttoncontainer3}
//  >

//  <Text style={styles.buttontext3}>Davood </Text>

//  </TouchableOpacity>

//  <TouchableOpacity onPress={() => {
//     console.log('Arun tapped');
//   }}
//   style={ styles.buttoncontainer4}
//  >

//  <Text style={styles.buttontext4}>Arun </Text>

//  </TouchableOpacity>

//  </View>

//   );
// };

// //  <Button title='click me' color='red'
// //  onPress={()=>alert("poda")} disabled={false}>

// // </Button>

// const styles = StyleSheet.create({
//   container: {

//         marginTop:150,
//         paddingLeft: 20,
//         paddingRight: 20,
//         justifyContent: 'space-between',
//         flexDirection: 'column',
//         marginHorizontal: 10,

//   },

//   //       backgroundColor:'red',

//   buttoncontainer: {

//     backgroundColor: '#5d57ff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 40,
//     height:40,
//     borderRadius:8,
//     marginVertical: 0,

//    },
//   // buttontext: {
//   //   textTransform: 'uppercase',
//   //   color: '#fff',
//   //   fontSize: 30,

//   // },

//     buttoncontainer2: {

//       backgroundColor: '#5d57ff',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 8,
//       marginHorizontal: 40,
//       marginVertical: 30,
//       height: 40,

//      },
//     // buttontext2: {
//     //   textTransform: 'uppercase',
//     //   color: '#fff',
//     //   fontSize: 30,

//     // },

//     buttoncontainer3: {

//       backgroundColor: '#5d57ff',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 8,
//       marginHorizontal: 40,
//       marginVertical: 30,
//       height: 40,

//      },

//      buttoncontainer4: {

//       backgroundColor: '#5d57ff',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 8,
//       marginHorizontal: 40,
//       marginVertical: 30,
//       height: 40,

//      },

// });

// export default App;
