import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const { width, height } = Dimensions.get('window');


const slides = [
    {
        id: '1',
        image: require('../../assets/Image/Welcome2.png'),
        title: 'Find Barber and Salons Easily in Your Hans',
    },
    {
        id: '2',
        image: require('../../assets/Image/Welcome1.png'),
        title: 'Book Your Favorite Barber and Salon Quickly ',


    },
    {
        id: '3',
        image: require('../../assets/Image/Welcome3.png'),
        title: 'Come be handsome and beautiful with us right now!',
    },
];

const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={item?.image}
                style={{ height: "80%", width, resizeMode: 'contain', }}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const OnboardingScreen = ({ navigation }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: '#000',
                                    width: 25,
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={{ marginBottom: 20 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.replace('Signin')}>
                                <Text style={{ fontFamily: fonts.semiBold, color: colors.black, fontSize: 15 }}>
                                    {"GET STARTED"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                    styles.btn,
                                    {
                                        borderColor: colors.yellow_dark,
                                        borderWidth: 1,
                                        backgroundColor: 'transparent',
                                        elevation: 0
                                    },
                                ]}
                                onPress={skip}>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontFamily: fonts.semiBold,
                                        color: '#000',
                                    }}>
                                    {"SKIP"}
                                </Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={styles.btn}>
                                <Text
                                    style={{
                                        fontFamily: fonts.semiBold,
                                        color: colors.black,
                                        fontSize: 15,
                                    }}>
                                    {"NEXT"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 23,
        maxWidth: '70%',
        fontFamily: fonts.medium,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 2.5,
        width: 12,
        backgroundColor: colors.gray,
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: colors.yellow_dark,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
});
export default OnboardingScreen;