import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Button from '../../components/UI/Button';
import styles from './home.styles';
function Home({navigation}: {navigation: any}) {
  const handlePress = (route: string) => {
    navigation.navigate(route);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bgImg}
        source={require('../../assets/bg.jpg')}
        alt="bg"
        resizeMode="cover"
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
          alt="bg"
          resizeMode="contain"
        />
        <Text style={styles.logoText}>CODETALKS</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Codetalks</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet adipisicing elit. Accusamus vel soluta
          molestiae quo et!
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Sign In" onPress={() => handlePress('Sign')} />
        <Button title="Login" onPress={() => handlePress('Login')} />
      </View>
    </SafeAreaView>
  );
}

export default Home;
