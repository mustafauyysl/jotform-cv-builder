import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

class FooterButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Icon name={this.props.icon} size={30} color="#fff" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 30,
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 50,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text: {
    color: '#fff',
    fontSize: 50,
    lineHeight: 55,
    textAlign: 'center',
  },
});

export default FooterButton;
