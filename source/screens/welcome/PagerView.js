import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { AppImages } from '../../assets/AppImages';
import { Colors } from '../../utils/Colors';

const PagerView = ({ children, onLastIndexPress }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const scrollViewRef = useRef(null);

    const handlePageChange = (event) => {
        const { width } = Dimensions.get('window');
        const page = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentPage(page);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentPage + 1) % children.length;
            scrollViewRef.current.scrollTo({
                animated: true,
                x: nextIndex * Dimensions.get('window').width,
                y: 0,
            });
            setCurrentPage(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentPage, children.length]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handlePageChange}
                scrollEventThrottle={16}
            >
                {children.map((child, index) => (
                    <View key={index} style={styles.page}>
                        {child}
                    </View>
                ))}
            </ScrollView>

            <View style={styles.dotsContainer}>
                {children.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === currentPage ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>

            {currentPage === children.length - 1 && (
                <TouchableOpacity
                    style={styles.arrowButton}
                    onPress={onLastIndexPress}
                    activeOpacity={0.7}
                >
                    <Image
                        resizeMode='contain'
                        source={AppImages.backIcon}
                        style={{ width: 20, height: 20, transform: [{ rotate: '-180deg' }], tintColor: 'white', right: -3 }}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        width: Dimensions.get('window').width,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: Platform.OS == 'ios' ? 40 : 30,
        left: 0,
        right: 0,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: Colors.yellow,
        width: 24,
        height: 8,
    },
    inactiveDot: {
        backgroundColor: Colors.gray40,
    },
    arrowButton: {
        position: 'absolute',
        bottom: Platform.OS == 'ios' ? 20 : 10,
        right: 20,
        backgroundColor: Colors.pink,
        borderRadius: 100,
        padding: 15
    },
});

export default PagerView;
