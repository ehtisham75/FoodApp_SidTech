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
        marginTop: "3%",
    },
    dot: {
        width: 7,
        height: 3,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    activeDot: {
        backgroundColor: Colors.gray30,
        width: 30,
        height: 3,
    },
    inactiveDot: {
        backgroundColor: Colors.gray40,
    }
});

export default PagerView;




















// import React, { useState, useRef, useEffect } from 'react';
// import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Colors } from '../../utils/Colors';

// const PagerView = ({ children, onLastIndexPress }) => {
//     const [currentPage, setCurrentPage] = useState(0);
//     const scrollViewRef = useRef(null);
//     let autoScrollRef = useRef(null);

//     const handlePageChange = (event) => {
//         const { width } = Dimensions.get('window');
//         const page = Math.round(event.nativeEvent.contentOffset.x / width);
//         setCurrentPage(page);
//     };

//     const startAutoScroll = () => {
//         autoScrollRef.current = setInterval(() => {
//             const nextIndex = (currentPage + 1) % children.length;
//             scrollViewRef.current?.scrollTo({
//                 animated: true,
//                 x: nextIndex * Dimensions.get('window').width,
//                 y: 0,
//             });
//             setCurrentPage(nextIndex);
//         }, 3000);
//     };

//     const stopAutoScroll = () => {
//         if (autoScrollRef.current) {
//             clearInterval(autoScrollRef.current);
//             autoScrollRef.current = null;
//         }
//     };

//     useEffect(() => {
//         startAutoScroll();
//         return () => stopAutoScroll();
//     }, [currentPage, children.length]);

//     return (
//         <View style={styles.container}>
//             <ScrollView
//                 ref={scrollViewRef}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={handlePageChange}
//                 scrollEventThrottle={16}
//                 onTouchStart={stopAutoScroll} // Stop auto-scroll when the user starts interacting
//                 onTouchEnd={startAutoScroll} // Restart auto-scroll after interaction
//             >
//                 {children.map((child, index) => (
//                     <View key={index} style={styles.page}>
//                         {child}
//                     </View>
//                 ))}
//             </ScrollView>

//             <View style={styles.dotsContainer}>
//                 {children.map((_, index) => (
//                     <View
//                         key={index}
//                         style={[
//                             styles.dot,
//                             index === currentPage ? styles.activeDot : styles.inactiveDot,
//                         ]}
//                     />
//                 ))}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     page: {
//         width: Dimensions.get('window').width,
//     },
//     dotsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: "5%",
//     },
//     dot: {
//         width: 7,
//         height: 3,
//         borderRadius: 4,
//         marginHorizontal: 2,
//     },
//     activeDot: {
//         backgroundColor: Colors.gray30,
//         width: 30,
//         height: 3,
//     },
//     inactiveDot: {
//         backgroundColor: Colors.gray40,
//     }
// });

// export default PagerView;