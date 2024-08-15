import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors';

type StatusBarProps = {
  BGColor?: string;
  BarStyleColor?: string;
  IsTranslucent?: boolean;
}

const Statusbar = ({ BGColor, BarStyleColor, IsTranslucent }: StatusBarProps) => {
  return (
    <StatusBar
      backgroundColor={BGColor ?? Colors.transparent}
      barStyle={BarStyleColor == "dark" ? "dark-content" : "light-content"}
      translucent={IsTranslucent ?? true}
    />
  )
}

export default Statusbar

const styles = StyleSheet.create({})