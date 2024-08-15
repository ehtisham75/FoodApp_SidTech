import React from 'react'
import { Svg, Path } from 'react-native-svg'

const NewReminderIcon = ({ color = "#451088", size = 22 }) => {
    return (
        <Svg width={size}
            height={size}
            viewBox="0 0 10 10"
            fill="none" xmlns="http://www.w3.org/2000/svg">

            <Path
                d="M9.67128 3.74654V5.71897H0.59991V3.74654H9.67128ZM6.19907 0.0380094V9.67293H4.08121V0.0380094H6.19907Z"
                fill={color}
            />
        </Svg>

    )
}

export default NewReminderIcon