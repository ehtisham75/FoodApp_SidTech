import React from 'react'
import { Svg, Path, Circle } from 'react-native-svg'

const MenuThreeDot = ({ color = "#7356B5" }) => {
    return (
        <Svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="2" cy="2" r="2" fill={color} />
            <Circle cx="2" cy="7" r="2" fill={color} />
            <Circle cx="2" cy="12" r="2" fill={color} />
        </Svg>

    )
}

export default MenuThreeDot