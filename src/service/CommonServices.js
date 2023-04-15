import axios from "axios";
import { BASE_URL } from "../redux/config";
import { apiEndPoints } from "../utils/ApiEndPoint";
import { showError, showSucess } from "../utils/helperFunction";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerUser = async (body) => {
    console.log("Base URL ::", BASE_URL + apiEndPoints.register_user, body);
    let config = {
        method: 'post',
        url: `${BASE_URL + apiEndPoints.register_user}`,
        data: body
    };
    try {
        return await axios(config);

    } catch (e) {
        console.log("errror", e);
        return e;
    }
}

// otpVerify
export const otpVerify = async (body) => {
    let config = {
        method: 'post',
        url: `${BASE_URL + apiEndPoints.genrate_otp}`,
        data: body
    };
    try {
        return await axios(config);

    } catch (e) {
        console.log("errror", e);
        return e;
    }
}

// login API
export const verifyOtp = async (body) => {

    let config = {
        method: 'post',
        url: `${BASE_URL + apiEndPoints.login}`,
        data: body
    };
    try {
        return await axios(config);
    } catch (e) {
        console.log("errror login", e);
        return e;
    }
}



export const createSalon = async (data) => {
    let token = await AsyncStorage.getItem('token');
    console.log("Data : Item :: ", data, token);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    // let config = {
    //     data: body
    // };
    try {
        return await axios.post(`${BASE_URL + apiEndPoints.salons}`, data, { headers: headers })
        // console.log("DTI :: ", dataItem);
        // return dataItem;
    } catch (e) {
        console.log("errror", e);
        return e;
    }
}




// Put Api UPLOAD IMAGE
export const uploadLogoImage = async (formData) => {
    let token = await AsyncStorage.getItem('token');
    console.log("Data  formdata : Item :: ", formData, token);

    try {
        axios({
            url: `${BASE_URL + apiEndPoints.logoUpload}`,
            method: 'PUT',
            data: formData,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
        })
            .then(function (response) {
                console.log("response :", response);
            })
            .catch(function (error) {
                console.log("error from image :");
            })
    } catch (e) {
        console.log("errror", e);
        return e;
    }
}




// salon Times
export const salonsTime = async (body) => {
    console.log("Based on URL ::", BASE_URL + apiEndPoints.salonsTimings, body);
    let config = {
        method: 'post',
        url: `${BASE_URL + apiEndPoints.salonsTimings}`,
        data: body
    }
    try {
        return await axios(config);

    } catch (e) {
        console.log("salon Error ", e);
        return e;
    }
}