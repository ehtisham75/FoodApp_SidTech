import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';
import { AppFonts } from '../constants/AppFonts';

interface RadioButtonProps {
    label: string;
    value: boolean;
    onButtonPress: (value: boolean) => void;
    activeButtonColor: string;
}

const RadioButton = ({ label, value, onButtonPress, activeButtonColor }: RadioButtonProps) => {

    const handlePress = () => {
        onButtonPress(!value);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.radioButton}>
            <View style={styles.radioWrapper}>
                <View style={[styles.radioCircle, { backgroundColor: value ? activeButtonColor : 'transparent' }]} />
            </View>
            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'cyan',
        flex: 1,
    },
    radioWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 18,
        height: 18,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.gray40,
        marginRight: 8,
    },
    radioCircle: {
        width: 10,
        height: 10,
        borderRadius: 50,
    },
    radioLabel: {
        fontSize: 16,
        color: Colors.tertiary_color,
        fontFamily: AppFonts.Inter.semiBold
    },
});

export default RadioButton;
