import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MainProps } from '../../interfaces/HomeInterface'
import { useRoute } from '@react-navigation/native'
import { Colors } from '../../utils/Colors'
import HomeHeader from '../../components/HomeHeader'
import { screenHeight, screenWidth } from '../Styles/ScreenSize'
import Buttons from '../../components/Buttons'
import { AppFonts } from '../../constants/AppFonts'
import FontSize from '../Styles/FontSize'

const ProductDetailScreen = ({ navigation }: MainProps) => {
    const route = useRoute();
    const [details, setDetails] = useState(route.params?.data ?? "");

    useEffect(() => {
        console.log("======== product details ======== ", details)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.transparent} barStyle={"light-content"} translucent={true} />

            <View style={styles.container}>

                <ImageBackground
                    // source={{ uri: details.img }}
                    source={details.img}
                    style={{ width: "100%", height: screenHeight.height35 }}
                >

                </ImageBackground>

                <View style={styles.subContainer}>

                    <Text style={styles.title}>{details.title}</Text>
                    <Text style={styles.subDet}>Orange leaves, chicken, tempeh, sambal, singkong, egg, crackers.</Text>

                    <View style={styles.priceBox}>
                        <Text numberOfLines={1} style={FontSize.semiBold14}>CDF {details.discountPrice}</Text>

                        <Text numberOfLines={1} style={{
                            ...FontSize.semiBold14, color: Colors.gray30,
                            textDecorationLine: 'line-through', textDecorationStyle: 'solid'
                        }}>CDF {details.realPrice}</Text>
                    </View>

                    <View style={styles.btnContainer}>
                        <Buttons
                            width={"40%"}
                            height={35}
                            title={"Extra Discount"}
                            titleSize={13}
                            titleFontFamily={AppFonts.Poppins.semiBold}
                            backgroundColor={"#F47960"}
                            radius={15}
                            // border={true}
                            onAction={() => { }}
                        />
                    </View>

                </View>

            </View>

        </SafeAreaView>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white_background,
    },
    subContainer: {
        marginTop: "3%",
        marginHorizontal: '5%',
    },
    title: {
        ...FontSize.bold20,
    },
    subDet: {
        ...FontSize.regular16,
    },
    priceBox: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        width:screenWidth.width40,
        marginVertical: '3%',
    },
    btnContainer: {
        alignItems: 'flex-start',
    },
})