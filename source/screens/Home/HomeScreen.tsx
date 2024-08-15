import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import en from '../../../translation/en/en.json'
import Buttons from '../../components/Buttons'
import { AppImages } from '../../assets/AppImages'
import { Colors } from '../../utils/Colors'
import { AppFonts } from '../../constants/AppFonts'
import HomeHeader from '../../components/HomeHeader'
import MyScheduleCard from '../../components/MyScheduleCard'
import BoxHeader from '../../components/BoxHeader'
import moment from 'moment';
import { AppRoutes } from '../../constants/AppRoutes'

const HomeScreen = ({ navigation }) => {
    const formattedDate = moment().format('dddd, D');
    const [menu, setMenu] = useState(false);

    const scheduleData = [
        {
            name: 'Medicare Hospital',
            startTime: '01:30',
            endTime: '10:30'
        },
        {
            name: 'Sheikh Zaid Hospital',
            startTime: '01:30',
            endTime: '10:30'
        }
    ];

    const helpData = [
        {
            name: 'Sara. D',
            count: 3,
            user: 'isSender',
        },
        {
            name: 'Sara. D',
            count: 3,
            user: 'isSender',
        },
        {
            name: 'Manny. P',
            count: 2,
            user: 'isReceiver',
        },
        {
            name: 'Karan',
            count: 3,
            user: 'isSender',
        },
        {
            name: 'Dave',
            count: 1,
            user: 'isReciever',
        },
    ];

    const renderItemForSchedule = ({ item }) => (
        <MyScheduleCard
            name={item.name}
            startTime={item.startTime}
            endTime={item.endTime}
            onAction={() => { navigation.navigate(AppRoutes.schedule) }}
        />
    );

    const renderItemForHelp = ({ item, index }) => {
        const isFirstItem = index === 0;
        const isLastItem = index === helpData.length - 1;

        return (
            <TouchableOpacity
                onPress={() => { }}
                activeOpacity={0.6}
                style={[styles.cardWrapper, isFirstItem && styles.firstItem, isLastItem && styles.lastItem]}>
                <View style={styles.subCardWrapper}>
                    {item.user === 'isSender' ? (
                        <Text style={styles.helpp}>
                            You helped <Text style={styles.helpname}>
                                {item.name} <Text style={styles.helptime}>
                                    {`${item.count} times.`}
                                </Text>
                            </Text>
                        </Text>
                    ) : (
                        <Text style={styles.helpname}>
                            {item.name} <Text style={styles.helpp}>
                                helped you <Text style={styles.helptime}>
                                    {`${item.count} times.`}
                                </Text>
                            </Text>
                        </Text>
                    )}

                </View>
            </TouchableOpacity>
        );
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar backgroundColor={Colors.transparent} barStyle={"dark-content"} translucent={true} />

            <View style={styles.container}>

                <HomeHeader
                    userImage={AppImages.profileDP}
                    userTitle='Ian Warrior'
                    titleColor={Colors.white_text_color}
                    onProfileAction={() => { }}
                    navigation={navigation}
                    onMenuAction={() => { setMenu(true) }}
                    IsMenuVisible={menu}
                    IsMenuHide={() => { setMenu(false) }}
                    onSearchAction={() => { }}
                />

                <KeyboardAvoidingView
                    style={{ flex: 1, }}
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
                >
                    <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: "6%", }}
                        style={{ paddingHorizontal: "7%" }}
                        keyboardDismissMode='on-drag'
                    >

                        <View style={styles.scheduleBox}>
                            <Text style={styles.scheduleText}>{en.Headers.dutySchedule}</Text>

                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => { navigation.navigate(AppRoutes.calendarEventSreen) }}
                                style={{ paddingRight: 2 }}>
                                <Image resizeMode='contain'
                                    source={AppImages.calendarIcon}
                                    style={{ width: 24, height: 24 }} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.dateText}>{formattedDate}</Text>

                        <View style={{ marginTop: 14, }}>
                            <FlatList
                                scrollEnabled={false}
                                data={scheduleData}
                                renderItem={renderItemForSchedule}
                                keyExtractor={(item, index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>

                        <View style={{ marginTop: "10%", }}>
                            <BoxHeader
                                tilte={en.Headers.helpStatus}
                                tilteSize={20}
                                tilteColor={Colors.tertiary_color}
                                subTilte={en.viewAll}
                                subTilteSize={13}
                                subTilteColor={Colors.blue}
                                onSubTitlePress={() => { navigation.navigate(AppRoutes.helpScreen) }}
                            />

                            <View style={{ marginTop: 6, }}>
                                <FlatList
                                    scrollEnabled={false}
                                    data={helpData}
                                    renderItem={renderItemForHelp}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: "10%", }}>
                            <BoxHeader
                                tilte={en.swaps}
                                tilteSize={20}
                                tilteColor={Colors.tertiary_color}
                                onSubTitlePress={() => { }}
                            />

                            <View style={styles.buttonTab}>
                                <Buttons
                                    width={"32%"}
                                    title={en.Buttons.successful}
                                    titleColor={Colors.tertiary_color}
                                    titleSize={13}
                                    titleFontFamily={AppFonts.Inter.bold}
                                    backgroundColor={Colors.orange}
                                    radius={20}
                                    onAction={() => { navigation.navigate(AppRoutes.successfulSwap) }}
                                />

                                <Buttons
                                    width={"32%"}
                                    title={en.Buttons.sent}
                                    titleColor={Colors.tertiary_color}
                                    titleSize={13}
                                    titleFontFamily={AppFonts.Inter.bold}
                                    backgroundColor={Colors.orange}
                                    radius={20}
                                    onAction={() => { navigation.navigate(AppRoutes.sentSwap) }}
                                />

                                <Buttons
                                    width={"32%"}
                                    title={en.Buttons.received}
                                    titleColor={Colors.tertiary_color}
                                    titleSize={13}
                                    titleFontFamily={AppFonts.Inter.bold}
                                    backgroundColor={Colors.orange}
                                    radius={20}
                                    onAction={() => { navigation.navigate(AppRoutes.receiveSwap) }}
                                />
                            </View>

                            <View style={{ marginTop: "3%" }}>
                                <Buttons
                                    width={"50%"}
                                    title={en.Buttons.requestSwap}
                                    titleColor={Colors.white_text_color}
                                    titleSize={13}
                                    titleFontFamily={AppFonts.Inter.bold}
                                    backgroundColor={Colors.primary_color}
                                    radius={20}
                                    onAction={() => { navigation.navigate(AppRoutes.contactTab) }}
                                />
                            </View>

                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light_background,
    },
    menu: {
        width: 25,
        height: 25,
        marginLeft: 20,
    },
    scheduleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scheduleText: {
        fontSize: 21,
        color: Colors.tertiary_color,
        fontFamily: AppFonts.Inter.bold,
    },
    dateText: {
        fontSize: 18,
        color: Colors.primary_color,
        fontFamily: AppFonts.Inter.normal,
        marginTop: 2,
    },
    // for help list
    cardWrapper: {
        width: "100%",
        alignSelf: 'center',
        paddingVertical: "4%",
        paddingHorizontal: "8%",
        backgroundColor: Colors.white,
        marginBottom: 1.2,
    },
    subCardWrapper: {
        flexDirection: 'row',
        flex: 1,
    },
    firstItem: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    lastItem: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    // ----
    helpp: {
        fontSize: 16,
        color: Colors.primary_color,
        fontFamily: AppFonts.Inter.regular,
        marginRight: 4,
    },
    helpname: {
        fontSize: 16,
        color: Colors.primary_color,
        fontFamily: AppFonts.Inter.bold,
    },
    helptime: {
        fontSize: 16,
        color: Colors.primary_color,
        fontFamily: AppFonts.Inter.regular,
        marginLeft: 4,
    },
    buttonTab: {
        marginTop: "2%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modal: {
        position: 'absolute',
        top: "8%",
        right: "10%",
        backgroundColor: Colors.white_background,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 6,
    },
    modalText: {
        fontSize: 14,
        fontFamily: AppFonts.Inter.normal,
    },
});
