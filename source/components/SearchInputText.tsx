
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { AppImages } from '../assets/AppImages'
import { AppFonts } from '../constants/AppFonts'
import { Colors } from '../utils/Colors'

type SearchInputTextProps = {
    placeholder?: string | undefined,
    value: string,
    onChangeText?: ((text: string) => void) | undefined,
    handleCloseSearch: () => void,
}

const SearchInputText = ({ value, onChangeText, placeholder, handleCloseSearch }: SearchInputTextProps) => {
    return (
        <View style={{ ...styles.searchInputContainer }}>
            <TextInput
                showSoftInputOnFocus
                placeholderTextColor={"black"}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                returnKeyType="search"
                style={styles.inputStyle}
            />

            {value &&
                <TouchableOpacity activeOpacity={0.6} onPress={() => handleCloseSearch && handleCloseSearch()}
                    style={{
                        padding: 5,
                        position: 'absolute',
                        right: 8,
                        borderRadius: 100
                    }}>
                    <Image source={AppImages.closeIcon} resizeMode="contain" style={{ width: 12, height: 12 }} />
                </TouchableOpacity>}

        </View>
    )
}
export default SearchInputText

const styles = StyleSheet.create({
    searchInputContainer: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginHorizontal: 30,
        marginTop: 10,
        borderWidth: 1,
        borderColor: Colors.black,
        backgroundColor: Colors.white_background,
    },
    inputStyle: {
        flex: 1,
        color: Colors.black_text_color,
        fontFamily: AppFonts.Inter.light,
        paddingHorizontal: 30,
        height: 40,
    },
})