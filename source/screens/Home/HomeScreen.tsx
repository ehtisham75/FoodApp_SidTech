import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import { AppImages } from '../../assets/AppImages'
import { Colors } from '../../utils/Colors'
import { AppFonts } from '../../constants/AppFonts'
import HomeHeader from '../../components/HomeHeader'

interface FoodItemProps {
    img: any;
    title: string;
}

interface MainProps {
    navigation: any;
}

const HomeScreen = ({ navigation }:MainProps) => {
    const [menu, setMenu] = useState(false);

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

    const FoodTypes = (index: number, item: FoodItemProps) => {
        return (
            <TouchableOpacity key={index} activeOpacity={0.7}
                style={styles.topitemsBox} onPress={() => console.log(item.title)}>
                <Image source={item.img} style={{ height: 50, width: 50 }} />
                <Text style={{
                    textAlign: 'center',
                    fontSize: 12,
                    color: Colors.black_text_color
                }}>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar backgroundColor={Colors.transparent} barStyle={"dark-content"} translucent={true} />
            <View style={styles.container}>
                <HomeHeader navigation={navigation} />
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: "2%" }}
                        style={{ paddingHorizontal: "4%" }}
                        keyboardDismissMode='on-drag'
                    >
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}>
                            {homeTopItems.map((item, index) => FoodTypes(index, item))}
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
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
        backgroundColor: Colors.gray10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
        marginBottom: 5,
    },
});
