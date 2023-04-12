import { showMessage } from "react-native-flash-message";

const showSucess = (message) => {
    showMessage({
        type: 'success',
        message
    })
}

const showError = (message) => {
    showMessage({
        type: "danger",
        message
    })
}

export {
    showSucess,
    showError
}