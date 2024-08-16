import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PagerView from '../welcome/PagerView'
import { AppImages } from '../../assets/AppImages'
import { bannerProps } from '../../interfaces/HomeInterface'

interface listProps {
  item: any;
  index: number;
}

const OrderTab = () => {
  const bannerList: bannerProps[] = [
    { img: AppImages.banner },
    { img: AppImages.banner },
    { img: AppImages.banner },
    { img: AppImages.banner },
  ]

  const renderItemForBannerList = ({ item, index }: listProps) => (
    <View key={index} style={{  marginBottom: 10, }}>
      <ImageBackground
        source={item.img} resizeMode='stretch'
        style={{ width: "100%", height: 140, }}
      />
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={{ marginTop: 14, }}>
        <FlatList
          scrollEnabled={false}
          data={bannerList}
          renderItem={renderItemForBannerList}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default OrderTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})