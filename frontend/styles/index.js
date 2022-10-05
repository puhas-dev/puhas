import {StyleSheet} from 'react-native';
const COLORS = {
  dark: '#000',
  light: '#a5a5a5',
  white: '#fff',
  primary: '#28388f',
  secondary: '#64beff',
  pink: '#ff2d5f',
};

const STYLES = StyleSheet.create({
  
  inputContainer: {flexDirection: 'row',  borderRadius: 4, borderWidth: 1,
   paddingHorizontal: 12, paddingVertical: 8,borderColor:"grey",marginTop:5},
   inputContainer3: {flexDirection: 'row', width:271,height:56, borderRadius: 4, borderWidth: 1, paddingHorizontal:12, paddingVertical:8,borderColor:"grey",marginTop:5},
   input: {
     color: '#404943',
     flex: 1,
     fontSize: 18,
     marginLeft:4,
     fontWeight:'400'
   },
  input1: {
    color: '#404943',
    flex: 1,
    fontSize: 16,
    marginLeft:12,
    
  },
  input2: {
    color: '#404943',
    flex: 1,
    fontSize: 18,
    justifyContent:'center',
    marginLeft:12,
    
  },

  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: '#006C48',
    width:92,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:32,
   elevation:-2
   


  },
  btnPrimary1: {
    backgroundColor: '#006C48',
    width:92,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:32,
   
   elevation:-2
   


  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20, marginLeft: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;