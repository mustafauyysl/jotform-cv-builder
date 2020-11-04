import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CvBox from './CvBox';
import { connect } from 'react-redux';



class CvTemplate extends Component{
    render(){
        let prop = this.props.currentCv;
        console.log(prop.item.answers[8])
        return(
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.name}>{prop.item.answers[4].answer.first+' '+prop.item.answers[4].answer.last}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.leftContainer}>
                        <View>
                            <Text style={styles.title}>ÖN YAZI</Text>
                            <Text style={{ fontSize: 10 }}>{prop.item.answers[8].answer}</Text>
                        </View>

                        <CvBox 
                            title='DENEYİM'
                            first={prop.item.answers[9].answer}
                            second={prop.item.answers[10].answer}
                            third={prop.item.answers[11].answer}
                        />
                        <CvBox 
                            title='SERTİFİKALAR'
                            first={prop.item.answers[12].answer}
                            second={prop.item.answers[13].answer}
                            third={prop.item.answers[14].answer}
                        />

                    </View>
                    <View style={styles.rightContainer}>
                        <CvBox 
                            title='İLETİŞİM'
                            first={prop.item.answers[5].answer}
                            second={prop.item.answers[6].answer.full}
                            third={prop.item.answers[7].answer}
                        />
                        <CvBox 
                            title='EĞİTİM'
                            first={prop.item.answers[15].answer}
                            second={prop.item.answers[16].answer}
                            third={prop.item.answers[17].answer}
                        />
                        <CvBox 
                            title='REFERANSLAR'
                            first={prop.item.answers[18].answer}
                            second={prop.item.answers[19].answer}
                        />

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E75B7',
        padding: 15,
        paddingTop: 35
    },
    bodyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    leftContainer: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 5
    },
    rightContainer: {
        flex: 0.5
    },
    title: {
        marginVertical: 10,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'flex-start'
    }

});

function mapStateToProps(state) {
    return {
      currentCv: state.changeCvReducer
    }
  }
  

export default connect(mapStateToProps)(CvTemplate);