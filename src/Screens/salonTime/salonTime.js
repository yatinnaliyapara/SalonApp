import React, { useState } from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet, Pressable, ScrollView, } from "react-native";
import colors from "../../utils/colors";
import { constants } from "../../utils/constants";
import * as Svg from "../../assets/Svg/svgs"
import fonts from "../../utils/fonts";
import DatePicker from "react-native-date-picker"
import Input from "../../Components/Input";
import Button from "../../Components/Buttons";

const salonTime = ({ navigation }) => {

    const [data, setData] = useState(new Date())



    return (
        <>

            <SafeAreaView style={styles.container}>

                <ScrollView style={styles.container}>

                    <View style={styles.mainContainer}>

                        <View style={{ flexDirection: "row", paddingTop: 20, alignItems: "center" }}>
                            <Pressable
                                style={styles.back_arrow}
                                onPress={() => navigation.goBack()}>
                                <Svg.BackArrow width={30} height={30} />
                            </Pressable>
                            <Text style={styles.businesstext}>{constants?.salonTimeSloat}</Text>
                        </View>

                        <View style={styles.divider} />

                        <Text style={styles.label}>{constants?.DayTime}</Text>
                        <View style={styles.timeSloat}>
                            <Text style={{ color: colors.white, fontFamily: fonts.semiBold, fontSize: 18 }}>{"From Time"}</Text>
                            <DatePicker
                                mode="time"
                                date={data}
                                fadeToColor="none"
                            />
                        </View>

                        <View style={styles.divider} />


                        <Text style={styles.label}>{constants?.EndTime}</Text>
                        <View style={styles.timeSloat}>
                            <Text style={{ color: colors.white, fontFamily: fonts.semiBold, fontSize: 18 }}>{"To Time"}</Text>
                            <DatePicker
                                mode="time"
                                date={data}
                                textColor={colors.white}
                                fadeToColor="none"
                                dividerHeight={2}
                                androidVariant="iosClone"
                            />
                        </View>

                        <View style={styles.divider} />

                        <Text style={styles.label}>{constants?.Lunch}</Text>

                        <View style={styles.rowDateContainer}>
                            <View style={{ flex: 1, overflow: 'hidden', alignItems: 'center' }} >
                                <DatePicker
                                    mode="time"
                                    date={data}
                                    textColor={colors.white}
                                    fadeToColor="none"
                                    dividerHeight={2}
                                />
                            </View>

                            <Text style={{ color: colors.white, fontFamily: fonts.semiBold, fontSize: 18, marginHorizontal: 10 }}>
                                {"to"}
                            </Text>

                            <View style={{ flex: 1, overflow: 'hidden', alignItems: 'center' }} >
                                <DatePicker
                                    mode="time"
                                    date={data}
                                    textColor={colors.white}
                                    fadeToColor="none"
                                    dividerHeight={2}
                                />
                            </View>
                        </View>

                        <View style={styles.divider} />

                        <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", }}>
                            <Input
                                keyboardType={"number-pad"}
                                label={constants?.Interval}
                                placeholder={"23"}
                            />
                            <View style={{ marginHorizontal: 15 }} />
                            <Input
                                keyboardType={"number-pad"}
                                label={constants?.Max_Appointments}
                                placeholder={"5"}
                            />
                        </View>
                    </View>


                </ScrollView>

                <Button
                    innerContainerStyle={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}
                    label={constants?.continue} />

            </SafeAreaView >


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    back_arrow: {
        width: 70,
        height: 40,
    },
    mainContainer: {
        paddingHorizontal: 20,
        paddingTop: 10
    },
    businesstext: {
        fontFamily: fonts.medium,
        color: colors.black,
        fontSize: 20,
        textAlign: "center",
    },
    divider: {
        marginVertical: 15
    },
    timeSloat: {
        width: 380,
        height: 120,
        borderRadius: 8,
        backgroundColor: colors.yellow_dark,
        borderWidth: 2,
        borderColor: colors.white,
        elevation: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        overflow: "hidden",
    },
    label: {
        color: colors.black,
        fontSize: 15,
        fontFamily: fonts.regular,
        marginLeft: 5
    },
    rowDateContainer: {
        width: '100%',
        height: 100,
        overflow: 'hidden',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.white,
        backgroundColor: colors.yellow_dark,
        elevation: 3,
        alignItems: "center",
        flexDirection: "row"
    }
})


export default salonTime;