import React, {Component} from 'react';
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';
import Header from '../components/Header';
import FooterButton from '../components/FooterButton';
import FormModal from '../components/FormModal';
import CvContainer from '../components/CvContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../redux/actions/cvActions';


class HomeScreen extends Component{
  state = {
    isFormModalVisible: false,
  }

  toggleModal = () => {
    this.setState({ isFormModalVisible: !this.state.isFormModalVisible });
  };

  componentDidMount(){
    this.props.actions.getCvs();
  }

  viewCv = (cv) => {
    this.props.actions.changeCv(cv);
    this.props.navigation.navigate('Cv');
  }

  deleteCvAlert = (id) => {
    Alert.alert(
      "Uyarı",
      "Cv'nizi silmek istediğinize emin misiniz ?",
      [
        {
          text: "Hayır",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Evet", onPress: () => this.deleteCv(id) }
      ],
      { cancelable: false }
    );
  }

  deleteCv = (id) => {
   this.props.actions.deleteCv(id);
   this.props.actions.getCvs();
   alert('Cv\'niz silinmiştir')
  }

  renderItem = (cv) => {
    return(
      <CvContainer 
        nameSurname={cv.item.answers[4].answer.first+' '+cv.item.answers[4].answer.last}
        viewCv={() => this.viewCv(cv)}
        deleteCv={() => this.deleteCvAlert(cv.item.id)}/>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <Header title='CVlerim' />
        <FlatList
          data={this.props.cvs}
          renderItem={(cv) => this.renderItem(cv)}/>
        <FooterButton icon='add' onPress={() => this.toggleModal()}/>
        <View>
          <FormModal onPress={() => this.toggleModal()} isVisible={this.state.isFormModalVisible} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});

function mapStateToProps(state) {
  return {
    currentCv: state.changeCvReducer,
    cvs: state.cvListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCvs: bindActionCreators(
        cvActions.getCvs,
        dispatch
      ),
      changeCv: bindActionCreators(
        cvActions.changeCv,
        dispatch
      ),
      deleteCv : bindActionCreators(
        cvActions.deleteCv,
        dispatch
      )

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);