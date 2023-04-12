import React from 'react';
import {
    useWindowDimensions,
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import colors from '../utils/colors';
const Loader = ({ visible }) => {
    const { width, height } = useWindowDimensions();
    return (
        visible && (
            <View style={[style.container, { height, width }]}>
                <View style={style.loader}>
                    <ActivityIndicator size="large" color={colors.light_Yellow} />
                    <Text style={{ marginLeft: 10, fontSize: 16, color: colors.yellow_dark }}>
                        {'Loading...'}
                    </Text>
                </View>
            </View>
        )
    );
};

const style = StyleSheet.create({
    loader: {
        height: 70,
        backgroundColor: colors.white,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    container: {
        position: 'absolute',
        // zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
    },
});

export default Loader;
