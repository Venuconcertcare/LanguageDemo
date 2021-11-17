import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Container from '../../components/Container';

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>Profile</Text>
        </View>
      </Container>
    );
  }
}
