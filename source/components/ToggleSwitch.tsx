import * as React from 'react';
import { Animated, Easing, StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../utils/Colors';

const Toggle = (props) => {
    const animatedValue = new Animated.Value(0);

    const moveToggle = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 20],
    });

    const { isOn, onColor, offColor, style, onToggle } = props;
    const color = isOn ? onColor : offColor;
    animatedValue.setValue(isOn ? 1 : 0);

    return (
        <View style={styles.container}>

            <TouchableOpacity activeOpacity={0.9} onPress={typeof onToggle === 'function' && onToggle}>
                <View style={[styles.toggleContainer, style, { backgroundColor: color }]}>
                    <Animated.View
                        style={[
                            styles.toggleWheelStyle,
                            {
                                marginLeft: moveToggle,
                                width: isOn ? 20 : 18,
                                height: isOn ? 20 : 18,
                                borderWidth: isOn ? 1 : 0,
                                borderColor: isOn ? Colors.primary_color : color
                            },
                        ]}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

Toggle.propTypes = {
    onColor: PropTypes.string,
    offColor: PropTypes.string,
    label: PropTypes.string,
    onToggle: PropTypes.func,
    style: PropTypes.object,
    isOn: PropTypes.bool.isRequired,
    labelStyle: PropTypes.object,
};

Toggle.defaultProps = {
    onColor: '#4cd137',
    offColor: '#ecf0f1',
    label: '',
    onToggle: () => { },
    style: {},
    isOn: false,
    labelStyle: {},
};

export default Toggle;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggleContainer: {
        width: 40,
        height: 18,
        borderRadius: 15,
        justifyContent: 'center',
    },
    toggleWheelStyle: {
        backgroundColor: 'white',
        borderRadius: 12.5,
    },
});