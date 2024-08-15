import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { AppFonts } from '../constants/AppFonts';

type MaterialMenuProps = {
    isVisible: boolean,
    // showMenu: () => void;
    hideMenu: () => void;
    isIcon?: boolean,
    menuText?: string,
    // onReport: () => void,
    blockTitle?: string,
    // onBlock: () => void,
    // onInviteFriend: () => void,
};

const MaterialMenuPopup = ({ isVisible, hideMenu, blockTitle = "Block", }: MaterialMenuProps) => {
    const [visible, setVisible] = useState(isVisible);
    // const hideMenu = () => setVisible(false);
    // const showMenu = () => setVisible(true);

    return (
        <View style={{}}>
            <Menu
                visible={visible}
                style={{ borderRadius: 20, paddingTop: 10, backgroundColor: 'white' }}
                // anchor={(
                //     <Text onPress={showMenu}>Show menu</Text>
                // )}
                onRequestClose={hideMenu}>

                <View style={styles.menuContainer}>
                    <MenuItem
                        style={styles.menuItemStyle}
                        textStyle={styles.txtStyle}
                        onPress={() => { hideMenu() }}>Let's Jive</MenuItem>
                </View>

                <View style={styles.menuContainer}>
                    <MenuItem style={styles.menuItemStyle} textStyle={styles.txtStyle}
                        onPress={() => {
                            hideMenu();
                            // onReport && onReport();
                        }}>
                        Report
                    </MenuItem>
                </View>

                <View style={styles.menuContainer}>
                    <MenuItem
                        style={styles.menuItemStyle}
                        textStyle={styles.txtStyle}
                        onPress={() => {
                            hideMenu();
                            // onBlock && onBlock();
                        }}>
                        {blockTitle}
                    </MenuItem>
                </View>

            </Menu >
        </View >
    );
};

export default MaterialMenuPopup;

const styles = StyleSheet.create({
    txtStyle: {
        fontSize: 14,
        color: 'black',
        fontFamily: AppFonts.Inter.normal,
    },
    menuItemStyle: {
        // borderRadius: 10,
        // marginVertical: 0,
        justifyContent: 'center',
        backgroundColor: 'plum',
    },
    menuContainer: {
        marginLeft: 10,
        marginBottom: 1,
        // paddingVertical:5
        // backgroundColor: 'cyan',
    },
})
