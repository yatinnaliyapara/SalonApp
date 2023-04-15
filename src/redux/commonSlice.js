import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSalon, otpVerify, registerUser, salonData, salonsTime, uploadLogoImage, verifyOtp } from "../service/CommonServices";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "../routes";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const register = createAsyncThunk(
    'auth/register',
    async (userData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        const response = await registerUser(userData);
        console.log("Response from Register :: ", response);
        if (response?.status === 201) {
            let otpData = { mobile_number: JSON.stringify(response?.data?.data?.mobile_number) }
            dispatch(generateOtp(otpData));
            return fulfillWithValue(response?.data?.data)
        } else {
            console.log("delete error case", response);
        }
        return rejectWithValue(response?.response?.data?.Error);
    }
)

export const generateOtp = createAsyncThunk(
    'auth/generate-otp',
    async (otpData, { fulfillWithValue, rejectWithValue }) => {
        const response = await otpVerify(otpData);
        console.log("Respone on data", response);
        if (response?.status === 201) {
            navigate("OtpVerify", { mobile_number: otpData.mobile_number });
            return fulfillWithValue(response?.data?.data);
        } else {
            console.log("delete error case", response);
        }
        return rejectWithValue(response?.response?.data?.Error);
    }
)

export const verifyOtpData = createAsyncThunk(
    'auth/login',
    async (otpData, { fulfillWithValue, rejectWithValue }) => {
        const response = await verifyOtp(otpData);
        console.log("Response on login api token :::", response);
        if (response?.status === 200) {
            navigate("UploadImage");
            await AsyncStorage.setItem("token", response?.data?.data?.access_token)
            return fulfillWithValue(response?.data?.data?.access_token);
        } else {
            console.log("delete error case", response);
        }
        return rejectWithValue(response?.response?.data?.Error);
    }
)


// salon Create
export const salonOwner = createAsyncThunk(
    'auth/salons',
    async (salonDetails, { fulfillWithValue, rejectWithValue }) => {
        console.log("Salon :: ", salonDetails);
        const response = await createSalon(salonDetails)
        if (response?.status === 200) {
            navigate("UploadImage");
            console.log("Navigate :::", navigate);
            return fulfillWithValue(response?.data?.data)
        } else {
            console.log("delete error case", response);
        }
        return rejectWithValue(response?.response?.data?.error);
    }
)


// Salon upload Logo
export const uploadLogo = createAsyncThunk(
    'auth/salons',
    async (logoFormData, { fulfillWithValue, rejectWithValue }) => {
        const response = await uploadLogoImage(logoFormData)
        if (response?.status === 200) {
            navigate("SalonTime")
            // console.log("Navigate :::", navigate);
            return fulfillWithValue(response?.data?.data)
        } else {
            console.log("delete error case", response);
        }
        return rejectWithValue(response?.response?.data?.error);
    }
)


// Salons Times
export const salonTimedata = createAsyncThunk(
    'auth/salons/timings',
    async (salonTimes, { fulfillWithValue, rejectWithValue }) => {

        const res = await salonsTime(salonTimes);
        console.log("Respnse on salon details", response, salonDetails);
        if (res?.status === 201) {
            console.log("salon Details", res?.data?.data);
            return fulfillWithValue(res?.data?.data)
        } else {
            console.log("delete error case", res);
        }
        return rejectWithValue(res?.res?.data?.Error);

    }
)