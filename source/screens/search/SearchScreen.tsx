import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList, StatusBar, KeyboardAvoidingView, Platform, ImageBackground, TextInput } from 'react-native'
import { AppImages } from '../../assets/AppImages'
import { Colors } from '../../utils/Colors'
import { AppFonts } from '../../constants/AppFonts'
import { listProps, MainProps } from '../../interfaces/HomeInterface'
import FontSize from '../Styles/FontSize'
import Buttons from '../../components/Buttons'
import { screenHeight, screenWidth } from '../Styles/ScreenSize'
import SimpleHeader from '../../components/SimpleHeader'

const SearchScreen = ({ navigation }: MainProps) => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = () => { };

    const [dealList, setDealList] = useState([
        {
            img: AppImages.banner,
            title: "Bottegea Fried Rice",
            realPrice: 110,
            discountPrice: 98,
        },
        {
            img: AppImages.banner,
            title: "Salmon with Rice",
            realPrice: 150,
            discountPrice: 105,
        },
    ])

    const renderItemForDealList = ({ item, index }: listProps) => (
        <View style={{ flex: 1, margin: screenWidth.width2 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    borderBottomColor: Colors.gray10,
                    borderBottomWidth: 1,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    paddingBottom: 10,
                    width: "100%",
                }}>
                <ImageBackground source={item.img} style={{ width: "100%", height: 120 }}>
                </ImageBackground>
                <Text numberOfLines={1} style={FontSize.bold14}>{item.title}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Text numberOfLines={1} style={FontSize.semiBold14}>CDF {item.discountPrice}</Text>

                    <Text numberOfLines={1} style={{
                        ...FontSize.semiBold14, color: Colors.gray30,
                        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
                    }}>CDF {item.realPrice}</Text>
                </View>

                <Buttons
                    width={"80%"}
                    height={32}
                    title={"Add"}
                    titleSize={13}
                    titleFontFamily={AppFonts.Poppins.semiBold}
                    backgroundColor={Colors.transparent}
                    radius={50}
                    border={true}
                    onAction={() => { }}
                />
            </TouchableOpacity>
        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.primary_color} barStyle={"dark-content"} />

            <View style={styles.container}>
                <SimpleHeader
                    ScreenTitle='Search'
                    onBackPress={() => navigation.goBack()}
                />

                <KeyboardAvoidingView
                    style={{ flex: 1, }}
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: "4%", flexGrow: 1, }}
                        style={{ paddingHorizontal: "4%", marginTop: 3, }}
                    >
                        <View style={{ flex: 1 }}>

                            <View style={styles.searchBox}>
                                <View style={styles.iconContainer}>
                                    <Image resizeMode='contain' source={AppImages.searchIcon2} style={styles.searchIcon} />
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        placeholder="Search"
                                        placeholderTextColor={Colors.black_text_color}
                                        value={searchText}
                                        onChangeText={setSearchText}
                                        onSubmitEditing={handleSubmit}
                                        style={styles.searchInput}
                                    />
                                </View>
                            </View>

                            <View style={{ marginTop: 14 }}>
                                <FlatList
                                    scrollEnabled={false}
                                    data={dealList}
                                    numColumns={2}
                                    renderItem={renderItemForDealList}
                                    keyExtractor={(item, index) => index.toString()}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>

                        </View>
                    </ScrollView>

                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}
export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white_background,
    },

    searchBox: {
        flexDirection: 'row',
        borderRadius: 12,
        borderColor: Colors.gray30,
        borderWidth: 1,
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        bottom: 1,
    },
    inputContainer: {
        flex: 1,
    },
    searchInput: {
        flex: 1,
        ...FontSize.regular15,
        paddingHorizontal: 10,
        textAlignVertical: 'center',
    },

})