import React, {Component} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import Header from './Header';
import {WebView} from 'react-native-webview';

class FormModal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.props.isVisible} animationType="slide">
          <View style={{flex: 1}}>
            <Header onPress={this.props.onPress} title="Yeni Cv ekle" />
            <WebView
              source={{uri: 'https://form.jotform.com/203063398519056'}}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: -0,
  },
});

export default FormModal;
