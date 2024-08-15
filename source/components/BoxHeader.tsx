import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppFonts } from '../constants/AppFonts';
import { Colors } from '../utils/Colors';

interface BoxHeaderProps {
    tilte: string;
    tilteSize?: number;
    tilteColor?: string;
    subTilte?: string;
    subTilteSize?: number;
    subTilteColor?: string;
    onSubTitlePress: () => void;
}

const BoxHeader: React.FC<BoxHeaderProps> = ({ tilte, subTilte, tilteSize, subTilteSize, tilteColor, subTilteColor, onSubTitlePress }) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: tilteSize ?? 20,
                color: tilteColor ?? Colors.primary_color,
                fontFamily: AppFonts.Inter.bold
            }}>{tilte}</Text>

            {subTilte &&
                <TouchableOpacity onPress={() => { onSubTitlePress() }}
                    activeOpacity={0.7}>
                    <Text style={{
                        fontSize: subTilteSize ?? 15,
                        color: subTilteColor ?? Colors.orange,
                        fontFamily: AppFonts.Inter.regular,
                        alignSelf: 'flex-end',
                    }}>{subTilte}</Text>
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: "2%",
        marginHorizontal: '1%',
        // backgroundColor: 'cyan',
    },
});

export default BoxHeader;
