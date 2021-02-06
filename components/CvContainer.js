import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

class CvContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.nameSurname}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.props.viewCv}>
            <Icon name="eye" style={styles.icon} color="green" size={28} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.deleteCv}>
            <Icon name="trash" style={styles.icon} color="red" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    height: 80,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    margin: 5,
  },
});

export default CvContainer;
