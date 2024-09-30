import * as React from 'react';
import { StyleSheet, Text, View, Button, Linking, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import people from './assets/nologoedit.png';

const Stack = createStackNavigator();

function HomeCurriculum({ navigation }) {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={people} />
      <TouchableOpacity onPress={() => navigation.navigate('Sobre mim')}>
        <Text style={styles.text}>João Victor de Lima Rosa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkedin}>
        <Button color='#4361ee' onPress={() => Linking.openURL('https://www.linkedin.com/in/jo%C3%A3o-rosa-22b6851bb/')} title="Linkedin"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.github}>
        <Button color='#fb5607' onPress={() => Linking.openURL('https://github.com/astracoder')} title="Github"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.email}>
        <Button color='#c9184a' onPress={() => Linking.openURL('mailto:cy4kqq@hotmail.com')} title="E-mail"/>
      </TouchableOpacity>
    </View>
  )
}

function AboutMeScreen({ navigation }) {
  return (
    <View style={styles.mainPurple}>
      <Image style={styles.image} source={people}/>
      <Text style={styles.text}>S K I L L S</Text>
      <Text style={styles.skills}>HTML</Text>
      <Text style={styles.stars}>⭐ ⭐ ⭐ ⭐ ⭐</Text>
      <Text style={styles.skills}>CSS</Text>
      <Text style={styles.stars}>⭐ ⭐ ⭐ ⭐ ⭐</Text>
      <Text style={styles.skills}>JS</Text>
      <Text style={styles.stars}>⭐ ⭐ ⭐</Text>
      <Text style={styles.skills}>React Native</Text>
      <Text style={styles.stars}>⭐</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeCurriculum'>
        <Stack.Screen name="Faculdade Positivo" component={HomeCurriculum} />
        <Stack.Screen name="Sobre mim" component={AboutMeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#184e77',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainPurple: {
    flex: 1,
    backgroundColor: '#5a189a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#F2F2F2',
    fontSize: 32,
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#f2f2f2',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderColor: '#FEFEFE',
    borderWidth: 10,
    borderRadius: 100
  },
  linkedin: {
    width: 100,
    marginBottom: 10
  },
  github: {
    width: 100,
    marginBottom: 10
  },
  email: {
    width: 100,
    marginBottom: 10
  },
  skills: {
    textAlign: 'center',
    width: 100,
    fontWeight: 'bold',
    color: '#ff4d6d',
    backgroundColor: '#202020',
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 5
  },
  stars: {
    fontSize: 24,
    marginBottom: 20
  }
});
