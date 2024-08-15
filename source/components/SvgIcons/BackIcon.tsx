import React from 'react'
import { Svg, Path } from 'react-native-svg';

const BackIcon = ({ color = "#EDD24B", size = 20 }) => {
    return (
        <Svg width="15"
            height="25"
            viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M5.375 1.75L1.625 5.5L5.375 9.25"
                stroke={color}
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default BackIcon