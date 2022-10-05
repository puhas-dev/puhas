import {View, Image, Text} from 'react-native';

const Tooltip = ({tooltipMessage, imageStyles, imagePath,imageContainer,imagePath1}) => {
    return (
      <View style={{marginTop:7}}>
    
                
        <View
          style={[imageContainer,{
            borderRadius: 4,
            display:"flex",
            flexDirection:"row",
            alignItems: 'center',
            justifyContent: 'center',
            // padding: 16,
            backgroundColor: '#4E57A9',
           
            
          }]}
        >
          <Image source={imagePath1} style={{resizeMode:"contain",width:30,height:30,color:"white"}}></Image>
          <Text style={{fontSize: 12, color: 'white'}}>{tooltipMessage}</Text>
        </View>
        <Image
          style={[imageStyles, { resizeMode: 'contain'}]}
          source={imagePath}
        />
      </View>
    );
  };
  
  export default Tooltip;