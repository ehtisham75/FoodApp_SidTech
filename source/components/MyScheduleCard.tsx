import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../utils/Colors';
import { AppFonts } from '../constants/AppFonts';

interface CardProps {
    name: string;
    startTime: string;
    endTime: string;
    onAction: () => void;
}

const MyScheduleCard = ({ name, startTime, endTime, onAction }: CardProps) => {

    const formattedStartTime = moment(startTime, 'HH:mm').format('hh:mm a');
    const formattedEndTime = moment(endTime, 'HH:mm').format('hh:mm a');

    return (
        <TouchableOpacity style={styles.card}
            onPress={() => { onAction() }} activeOpacity={0.6}>
            <Text numberOfLines={1} style={styles.name}>{name}</Text>
            <Text style={styles.time}>
                {formattedStartTime} - {formattedEndTime}
            </Text>
        </TouchableOpacity>
    )
}

export default MyScheduleCard

const styles = StyleSheet.create({
    card: {
        paddingVertical: '3%',
        paddingHorizontal: '8%',
        borderRadius: 10,
        backgroundColor: Colors.yellow,
        marginBottom: '2%',
    },
    name: {
        fontSize: 18,
        color: Colors.tertiary_color,
        fontFamily: AppFonts.Inter.bold,
    },
    time: {
        fontSize: 14,
        color: Colors.tertiary_color,
        fontFamily: AppFonts.Inter.regular,
    },
})


// 