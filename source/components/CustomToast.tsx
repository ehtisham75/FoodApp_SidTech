import { ToastAndroid } from 'react-native'

interface ToastProps {
    message: string;
    time?: number;
}
const CustomToast = ({ message, time }: ToastProps) => {

    // export const CustomToast = (message: string, time: any) => {
    ToastAndroid.showWithGravity(
        message ?? "I m Toast",
        time ? time : ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
}

export default CustomToast