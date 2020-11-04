import React, {Component} from 'react';
import { View, StatusBar, StyleSheet, Image, Alert } from 'react-native';
import { connect }  from 'react-redux';
import CvTemplate from '../components/CvTemplate';
import FooterButton from '../components/FooterButton';
import ViewShot from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";


class CvScreen extends Component{
    state = {
        uri: ''
    }

    savePhotoToCameraRoll = () => {
      CameraRoll.saveToCameraRoll(this.state.uri,'photo')
      Alert.alert(
        'Başarılı',
        'Cv\'niz galeriye kaydedilmiştir.',
        [
          {
            text: 'Tamam'
          }
        ])
    }
    
    componentDidMount () {
        this.refs.viewShot.capture().then(uri => {
          console.log("do something with ", uri);
          this.setState({uri})
        });
      }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.5 }}>
                  <CvTemplate />
                </ViewShot>
                <Image source={{ uri: this.state.uri }} resizeMode='contain' style={styles.img} />
                <FooterButton icon='download' onPress={() => this.savePhotoToCameraRoll()}/>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
      currentCv: state.changeCvReducer
    }
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
      width: '100%',
      height: 100,
      display: 'none'
    }
})

export default connect(mapStateToProps)(CvScreen);