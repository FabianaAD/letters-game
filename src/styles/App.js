import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  closeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    margin: '5%',
    marginBottom: '10%',
    justifyContent: 'flex-end',
  },
  closeText: {
    color: '#C3C3C3',
    fontSize: 30,
  },
  xContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D8D8D8',
    marginLeft: 10,
    alignItems: 'center',
  },
  xText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    height: 'auto',
    marginTop: 6,
  },
  tilesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: '5%',
    marginBottom: 20,
  },
  wordContainer: {
    width: '90%',
    marginLeft: '5%',
    borderWidth: 1,
    borderColor: 'black',
    height: 'auto',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10%',
  },
  wordText: {
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 5,
    flex: 1,
    height: 'auto',
  },
  wordValid: {fontSize: 24, flex: 0, height: 'auto', color: '#C3C3C3'},
  greenText: {
    color: '#7ED321',
  },
  redText: {
    color: '#D0021B',
  },
  selectBoardContainer: {
    width: '90%',
    height: 'auto',
    marginLeft: '5%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  selectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    margin: '5%',
    marginBottom: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F76F1F',
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#FAD35D',
  },
  selectText: {
    color: 'black',
    fontSize: 30,
  },
});

export default styles;
