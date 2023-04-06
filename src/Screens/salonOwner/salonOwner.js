import React from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet, ScrollView } from "react-native";
import Button from "../../Components/Buttons";
import Input from "../../Components/Input";
import colors from "../../utils/colors";
import { constants } from "../../utils/constants";
import fonts from "../../utils/fonts";



const SalonOwner = ({ navigation }) => {
    return (

        <>

            <SafeAreaView />

            <View style={styles.container}>

                <ScrollView>


                    <Text style={styles.hedertext}>{constants?.salonOwer}</Text>
                    <Text style={styles.businesstext}>{'Create and take your business to new heights!'}</Text>


                    <View style={styles.mainContainer}>

                        <Input
                            label={"Salon Name"}
                            leftIcon={"User"}
                            placeholder={'Salon Name'}
                        />
                        <Input
                            label={"Address"}
                            leftIcon={"Address"}
                            placeholder={'address'}
                            nol={4}
                            multiline={true}
                        />
                        <Input
                            label={"City"}
                            leftIcon={"City"}
                            placeholder={'City'}
                        />
                        <Input
                            leftIcon={"Pin"}
                            label={"Pin Code"}
                            placeholder={'Pin Code'}
                            keyboardType={"number-pad"}
                        />

                        <Input
                            leftIcon={"State"}
                            label={"State"}
                            placeholder={'State'}
                        />
                        <Input
                            leftIcon={"Country"}
                            label={"country"}
                            placeholder={'country'}
                        />

                    </View>

                </ScrollView>

                <Button
                    onPress={() => navigation.navigate('uploadImage')}
                    innerContainerStyle={{ width: '90%', marginVertical: 10, alignSelf: "center" }}
                    label={constants?.Next} />
            </View>

            <SafeAreaView />

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    hedertext: {
        fontFamily: fonts.semiBold,
        fontSize: 25,
        color: colors.black,
        textAlign: "center",
        paddingTop: 32
    },
    businesstext: {
        fontFamily: fonts.regular,
        color: colors.black,
        fontSize: 20,
        textAlign: "center",
        paddingTop: 26,
        maxWidth: '60%',
        alignSelf: "center"
    },
    mainContainer: {
        paddingHorizontal: 25,
        backgroundColor: colors.white,
        marginVertical: 50,
    },
    divider: {
        marginVertical: 10
    }
})

export default SalonOwner;