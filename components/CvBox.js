import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';


class CvBox extends Component{
    render(){
        return(
        <View>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.text}>{this.props.first}</Text>
            <Text style={styles.text}>{this.props.second}</Text>
            <Text style={styles.text}>{this.props.third}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 10,
        fontWeight: 'bold'
    },
    text: {
        marginVertical: 5,
        fontSize: 14
    }
});


export default CvBox;