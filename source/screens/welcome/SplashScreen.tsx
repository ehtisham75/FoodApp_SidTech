import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { AppFonts } from '../../constants/AppFonts'
import { Colors } from '../../utils/Colors'
import Statusbar from '../../components/Statusbar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppRoutes } from '../../constants/AppRoutes'

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(async () => {
      await AsyncStorage.getItem('userData').then((value) => {
        console.log("USER DATA in splash screen::: ", value)
        navigation.replace(value === null || value === '' ? AppRoutes.login : AppRoutes.home);
      })
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Statusbar
      // BarStyleColor='dark'
      />

      <View style={styles.container}>

        <View>
          <View style={styles.logoBox}>
            <Image
              resizeMode='contain'
              style={styles.logo}
              source={require('../../assets/icons/logo.png')}
            />
          </View>

          <View style={styles.title}>
            <Text style={styles.appNameFirst}>Wee</Text>
            <Text style={styles.appNameLast}>Minder</Text>
          </View>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-evenly",
    backgroundColor: Colors.primary_color,
  },
  logoBox: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.white_background,
    borderRadius: 40,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },
  appNameFirst: {
    fontSize: 22,
    color: Colors.white_text_color,
    fontFamily: AppFonts.Inter.light,
  },
  appNameLast: {
    fontSize: 22,
    color: Colors.white_text_color,
    fontFamily: AppFonts.Inter.bold,
  },
})