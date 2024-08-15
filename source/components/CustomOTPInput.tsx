import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';
import { AppFonts } from '../constants/AppFonts';

const CustomOTPInput = ({ otpCode, onChangeOtp, onSubmit }) => {
    const inputRefs = Array.from({ length: otpCode?.length }).map(() => useRef());
    const [otp, setOTP] = useState(Array(otpCode?.length).fill(''));

    const handleOTPChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);
        onChangeOtp(newOTP);
        if (value && index < inputRefs.length - 1 && inputRefs[index + 1].current) {
            inputRefs[index + 1].current.focus();
        }
    };

    return (
        <View style={styles.container}>
            {Array.from({ length: 4 }).map((_, index) => (
                <View key={index} style={styles.inputView}>

                    <TextInput
                        cursorColor={'rgba(0, 0, 0, 1)'}
                        placeholderTextColor={Colors.black}
                        textAlign='center'
                        style={styles.input}
                        maxLength={1}
                        onChangeText={(value) => handleOTPChange(index, value)}
                        onSubmitEditing={() => onSubmit && onSubmit()}
                        value={otp[index]}
                        keyboardType="numeric"
                        ref={inputRefs[index]}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                                inputRefs[index - 1].current.focus();
                                handleOTPChange(index - 1, ''); // Clear the previous field
                            }
                        }}
                    />

                    <View style={styles.bottomLine} />
                </View>

            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputView: {
        width: 48,
        height: 48,
        borderRadius: 10,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6,
        textAlign: 'center',
    },
    input: {
        // paddingLeft: 13,
        alignItems: 'center',
        justifyContent: 'center',
        // color: Colors.primary_color,
        fontFamily: AppFonts.Inter.bold,
        fontSize: 17
    },
    bottomLine: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary_color,
        borderRadius: 5,
        width: '40%',
        position: 'absolute',
        bottom: 10,
    }
});

export default CustomOTPInput;
