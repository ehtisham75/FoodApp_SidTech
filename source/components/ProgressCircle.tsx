import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import moment from 'moment';
import { Colors } from '../utils/Colors';
import { AppFonts } from '../constants/AppFonts';

interface ProgressCircleProps {
  currentTime: Date;
  radius: number;
  strokeWidth: number;
}

const ProgressCircle = ({ currentTime, radius, strokeWidth }: ProgressCircleProps) => {
  const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
  const totalMinutes = moment(currentTime).diff(moment().startOf('day'), 'minutes');
  const progress = (totalMinutes % (12 * 60)) / (12 * 60); // 12 hours in minutes
  const offset = circumference * (1 - progress);

  const formattedTime = moment(currentTime).format('hh:mm');
  const formattedTimeSection = moment(currentTime).format('a');

  return (
    <View style={[styles.container, Platform.OS === 'android' && styles.androidElevation]}>
      <Svg height={radius * 2} width={radius * 2}>
        {/* Background circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={Colors.orange}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={Colors.tertiary_color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          transform={`rotate(-90 ${radius} ${radius})`}
        // strokeLinecap='round'
        />
      </Svg>

      <Text style={styles.text}>
        {formattedTime} <Text style={styles.ampm}>{formattedTimeSection}</Text>
      </Text>
    </View>
  );
};

export default ProgressCircle;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
    }),
  },
  androidElevation: {
    elevation: 5,
  },
  text: {
    position: 'absolute',
    fontSize: 34,
    fontFamily: AppFonts.Inter.normal,
    color: Colors.tertiary_color,
  },
  ampm: {
    fontSize: 15,
    fontFamily: AppFonts.Inter.regular,
    color: Colors.tertiary_color,
  },
});