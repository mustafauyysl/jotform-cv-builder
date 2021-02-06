import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';

const myHeight = Dimensions.get('window').height;

class Header extends Component {
  render() {
    if (this.props.onPress) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.iconContainer}>
            <Text style={styles.icon}>X</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    height: myHeight * 0.09,
    flexDirection: 'row',
  },
  iconContainer: {
    marginTop: 30,
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  icon: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'stretch',
  },
  text: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
  },
});

export default Header;
