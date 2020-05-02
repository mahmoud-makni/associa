import React, {Component} from 'react';
import {View, Text, Container, Content} from 'native-base';
import SplashScreen from '../spalshScreen/splashScreen';
import PollContainer from '../../components/pollContainer/pollContainer';
import HeaderInTabs from '../../components/headerInTabs/headerInTabs';
import {StyleSheet} from 'react-native';
import {GlobalSheet} from '../../config';
const pollQuestion = 'Is react-polls useful?';
const pollAnswers = [
  {option: 'Yes', votes: 8},
  {option: 'No', votes: 2},
  {option: 'Si', votes: 5},
  {option: 'Ha', votes: 3},
];
function Polls(props) {
  return (
    <Container>
      <Content>
        <HeaderInTabs {...props} />
        <Text style={styles.title}>Non-Voted Polls</Text>
        <PollContainer question={pollQuestion} pollAnswers={pollAnswers} />
        <PollContainer question={pollQuestion} pollAnswers={pollAnswers} />
        <Text style={styles.title}>Voted Polls</Text>
        <PollContainer question={pollQuestion} pollAnswers={pollAnswers} />
        <PollContainer question={pollQuestion} pollAnswers={pollAnswers} />
      </Content>
    </Container>
  );
}

export default Polls;

const styles = StyleSheet.create({
  title: {
    left: 10 * GlobalSheet.units.vw,
    fontFamily: 'Montserrat-Bold',
    fontSize: 2.5 * GlobalSheet.units.vh,
  },
});
