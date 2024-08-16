import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList, StatusBar, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native'
import { AppImages } from '../../assets/AppImages'
import { Colors } from '../../utils/Colors'
import { AppFonts } from '../../constants/AppFonts'
import HomeHeader from '../../components/HomeHeader'
import { bannerProps, FoodItemProps, MainProps } from '../../interfaces/HomeInterface'
import FontSize from '../Styles/FontSize'
import HomeSearchBox from '../../components/HomeSearchBox'
import { AppRoutes } from '../../constants/AppRoutes'
import PagerView from '../welcome/PagerView'
import Buttons from '../../components/Buttons'
import FestiveTab from './FestiveTab'
import RecommendTab from './RecommendTab'
import OrderTab from './OrderTab'
import { screenHeight, screenWidth } from '../Styles/ScreenSize'

interface listProps {
    item: any;
    index: number;
}

const HomeScreen = ({ navigation }: MainProps) => {
    const [menu, setMenu] = useState(false);
    const [activeButton, setActiveButton] = useState(1);
    const [orderTab, setOrderTab] = useState(true)
    const [recommendTab, setRecommendTab] = useState(false)
    const [festiveTab, setFestiveTab] = useState(false)

    const homeTopItems: FoodItemProps[] = [
        { img: AppImages.homeItems.item1, title: "Grocery" },
        { img: AppImages.homeItems.item2, title: "Asian" },
        { img: AppImages.homeItems.item3, title: "French" },
        { img: AppImages.homeItems.item4, title: "Fast Foods" },
        { img: AppImages.homeItems.item5, title: "Indian" },
        { img: AppImages.homeItems.item6, title: "Convinience" },
        { img: AppImages.homeItems.item7, title: "Congolese" },
        { img: AppImages.homeItems.item8, title: "Retails" },
    ];

    const homeBannerList: bannerProps[] = [
        { img: AppImages.banner },
        { img: AppImages.banner },
        { img: AppImages.banner },
        { img: AppImages.banner },
    ]

    const handleButtonPress = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
    };
    const handleOrderButton = () => {
        handleButtonPress(1);
        setRecommendTab(false);
        setFestiveTab(false);
        setOrderTab(true);
    }
    const handleRecommendButton = () => {
        handleButtonPress(2);
        setOrderTab(false);
        setFestiveTab(false);
        setRecommendTab(true);
    }
    const handleFestiveButton = () => {
        handleButtonPress(3);
        setOrderTab(false);
        setRecommendTab(false);
        setFestiveTab(true);
    }

    const FoodTypes = (index: number, item: FoodItemProps) => {
        return (
            <TouchableOpacity key={index} activeOpacity={0.7}
                style={styles.topitemsBox} onPress={() => console.log(item.title)}>
                <View style={styles.grayBox}>
                    <Image source={item.img} style={{ height: 50, width: 50 }} />
                </View>

                <Text style={{
                    textAlign: 'center',
                    fontSize: 12,
                    color: Colors.black_text_color
                }}>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    const renderItemForBannerList = ({ item, index }: listProps) => (
        <View key={index} style={{ marginBottom: 10, }}>
            <ImageBackground
                source={item.img} resizeMode='stretch'
                style={{ width: "100%", height: 140, }}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.transparent} barStyle={"dark-content"} translucent={true} />

            <View style={styles.container}>
                <HomeHeader navigation={navigation} />

                <HomeSearchBox onAction={() => navigation.navigate(AppRoutes.searchScreen)} />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: "4%", flexGrow: 1, }}
                    style={{ paddingHorizontal: "4%",marginTop: 3, }}
                >
                    <View style={{ flex: 1 }}>

                        <View style={styles.items}>
                            {homeTopItems.map((item, index) => FoodTypes(index, item))}
                        </View>

                        <View style={{
                            height: screenHeight.height25,
                            width: screenWidth.width92,
                            // backgroundColor: 'red',
                        }}>
                            <PagerView onLastIndexPress={() => { }}>
                                {homeBannerList.map((item, index) => (
                                    <View key={index} style={{ marginRight: 5, }}>
                                        <ImageBackground
                                            source={item.img} resizeMode='stretch'
                                            style={{ width: screenWidth.width92, height: screenHeight.height23, }}
                                        />
                                    </View>
                                ))}
                            </PagerView>
                        </View>

                        <View style={styles.topTabBarBox}>
                            <Buttons
                                width={"30%"}
                                height={32}
                                title={"Order Again"}
                                titleColor={activeButton === 1 ? Colors.white_text_color : Colors.dark_text_color}
                                titleSize={12}
                                backgroundColor={activeButton === 1 ? Colors.black : Colors.gray10}
                                radius={50}
                                onAction={() => { handleOrderButton() }}
                            />

                            <Buttons
                                width={"30%"}
                                height={32}
                                title={"Recommend"}
                                titleColor={activeButton === 2 ? Colors.white_text_color : Colors.dark_text_color}
                                titleSize={12}
                                backgroundColor={activeButton === 2 ? Colors.black : Colors.gray10}
                                radius={50}
                                onAction={() => { handleRecommendButton() }}
                            />

                            <Buttons
                                width={"30%"}
                                height={32}
                                title={"Festive Menu"}
                                titleColor={activeButton === 3 ? Colors.white_text_color : Colors.dark_text_color}
                                titleSize={12}
                                backgroundColor={activeButton === 3 ? Colors.black : Colors.gray10}
                                radius={50}
                                onAction={() => { handleFestiveButton() }}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            {orderTab && <View style={{ marginTop: 14, }}>
                                <FlatList
                                    scrollEnabled={false}
                                    data={homeBannerList}
                                    renderItem={renderItemForBannerList}
                                    keyExtractor={(item, index) => index.toString()}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>}

                            {recommendTab && <RecommendTab />}

                            {festiveTab && <FestiveTab />}
                        </View>

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white_background,
    },
    topitemsBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    items: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    grayBox: {
        height: 78,
        width: 78,
        backgroundColor: Colors.gray10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topTabBarBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: "3%",
        // paddingHorizontal: "8%",
        // backgroundColor: Colors.primary_color,
    },
});
