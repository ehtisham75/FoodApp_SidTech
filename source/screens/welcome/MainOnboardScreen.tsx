import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PagerView from './PagerView'
import Statusbar from '../../components/Statusbar'
import { AppImages } from '../../assets/AppImages'
import Helper from '../../utils/Helpers'
import { AppRoutes } from '../../constants/AppRoutes'

const MainOnboardScreen = ({ navigation }) => {

    const handleLastIndexPress = () => {
        Helper.resetAndGo(navigation, AppRoutes.register)
    };

    return (
        <View style={{ flex: 1 }}>
            <Statusbar />

            <PagerView onLastIndexPress={handleLastIndexPress}>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={AppImages.onboardBg1}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={AppImages.onboardBg2}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
            </PagerView>
        </View>
    )
}

export default MainOnboardScreen

const styles = StyleSheet.create({})


