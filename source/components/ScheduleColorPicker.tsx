import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';

interface ColorPickerProps {
    selectedColor: string;
    onColorChange: (color: string) => void;
}

const ScheduleColorPicker = ({ selectedColor, onColorChange }: ColorPickerProps) => {
    const colors = [
        Colors.lightPurple,
        Colors.lightPink,
        Colors.lightOrange,
        Colors.cyan,
        Colors.yellow,
        Colors.lightBlue,
        Colors.lightGreen,
    ];

    return (
        <View style={styles.colorOptions}>
            {colors.map((color, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => onColorChange(color)}
                    style={{
                        ...styles.colorOption,
                        borderColor: selectedColor === color ? color : 'transparent'
                    }}>
                    <View style={{
                        width: 16,
                        height: 16,
                        borderRadius: 15,
                        backgroundColor: color,
                    }} />
                </TouchableOpacity>
            ))
            }
        </View >
    );
};

const styles = StyleSheet.create({

    colorOptions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorOption: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ScheduleColorPicker;
