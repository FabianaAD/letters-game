import {Dimensions, StyleSheet} from 'react-native';

const dWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 0,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    borderColor: '#C8293C',
    alignItems: 'center',
    justifyContent: 'center',
    width: dWidth * 0.2,
    height: dWidth * 0.2,
  },
  buttonText: {
    fontSize: 34,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: -1},
    textShadowRadius: 5,
    textShadowColor: 'black',
  },
});

export default styles;
