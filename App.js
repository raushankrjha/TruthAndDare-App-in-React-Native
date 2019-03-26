import * as React from 'react';
import { Text, View, StyleSheet ,Image,Animated,TouchableOpacity,Easing} from 'react-native';
import { Constants } from 'expo';


export default class App extends React.Component {


constructor(props)
  {
      super(props);
      this.state=
      {
       
        rotateValue:new Animated.Value(0),
     
      }


  }

  
  //rotate bottle
_rotateAnimation=()=>
  {
      Animated.sequence([

        Animated.timing(this.state.rotateValue,
        {
          toValue:Math.floor(Math.random() * 4600) +360,
          duration:1000,
          easing:Easing.linear,
        }),
         
        
      ]).start();
  }





  render() {

  const interpolatedAnimation=this.state.rotateValue.interpolate({
      inputRange:[0,Math.floor(Math.random() * 4600) +360],
      outputRange:['0deg','360deg'],
    })    
    return (
      <View style={styles.container}>
        <Animated.Image 
       source={require('./assets/541.png')}
       style={[styles.imageview,{
          transform:[
            {
              rotate:interpolatedAnimation
            }
          ]},
          ]}   
       >
       </Animated.Image>

       <TouchableOpacity style={styles.button}
       onPress={this._rotateAnimation}
       >


       <Text style={styles.text}>Spin</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageview: {
    marginLeft:130,
    width:100,
    height:300,
    backgroundColor: 'transparent',
   
  },
  
   button: {
    
     marginTop:35,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:14,
    marginRight:19,
    borderRadius:7,
    borderWidth: 0,
    borderColor: '#fff',
    backgroundColor:'#32C516',
   
  },
  
  text: {
   
      fontSize: 22,
    color:'white',
    textAlign:'center',
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    textShadowColor: '#D50000',
    textShadowRadius: 4,
     fontWeight: 'bold',
    textShadowOffset: {width: 2, height: 2},
  
    
    
  },
});
