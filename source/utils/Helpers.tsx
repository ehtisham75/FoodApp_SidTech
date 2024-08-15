import { CommonActions } from "@react-navigation/native";
import { Alert, Linking, Platform } from "react-native";
import Toast from "react-native-root-toast";
// import crashlytics from '@react-native-firebase/crashlytics';
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

class Helpers {
  isEmptyString(str: string) {
    return str == "" || !str;
  }

  isEmptyArray(arr: string) {
    return !arr || arr.length == 0;
  }

  isValidEmail(email: string) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePhoneNumber = (phoneNumber: any) => {
    const ukPhoneRegex = /^(?:0|\+?44)(?:\d\s?){9,10}$/; ///^((\+44)|(0044)|(0))\s{0,1}[1-9]{1}[0-9]{3}\s{0,1}[0-9]{3}$/;
    return ukPhoneRegex.test(phoneNumber);
  };

  isValidPassword(password: string) {
    let re =
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$_&-+-()/="':;?,.<>%^&*])[a-zA-Z0-9!@#$_&-+-()/="':;?,.<>%^&*]{8,100}$/;
    return password.match(re);
  }

  showToast(message: string, background?: any, color?: any) {
    try {
      let toast = Toast.show(message, {
        duration: Toast.durations.SHORT,
        position:
          Platform.OS == "ios" ? Toast.positions.TOP : Toast.positions.BOTTOM,
        backgroundColor: "white",
        textColor: color ? color : "black",
        // shadow: true,
        opacity: 1.0,
        animation: true,
        hideOnPress: true,
        containerStyle: {
          width: "90%",
          borderRadius: 10,
          marginTop: Platform.OS == "ios" ? 0 : 0,
        },
        delay: 0,

        onShow: () => {
          // calls on toast\`s appear animation start
        },
        onShown: () => {
          // calls on toast\`s appear animation end.
        },
        onHide: () => {
          // calls on toast\`s hide animation start.
        },
        onHidden: () => {
          // calls on toast\`s hide animation end.
        },
      });
    } catch (error) {
      console.log("showToast ==> ", error);
    }
  }

  resetAndGo(navigation: any, routeName: string) {
    try {
      if (navigation && !this.isEmptyString(routeName)) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: routeName }],
          })
        );
      }
    } catch (error) {
      console.log("resetAndGo ==> ", error);
    }
  }

  hexToRgbA(hex: any, alpha: any) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        "," +
        alpha +
        ")"
      );
    }
    return "";
  }

  showAlert(title: any, msg: any) {
    Alert.alert(title, msg, [{ text: "Okay", style: "cancel" }]);
  }

  openWebLink(urlLink: any) {
    Linking.canOpenURL(urlLink).then((supported) => {
      if (supported) {
        Linking.openURL(urlLink);
      } else {
        console.log("Don't know how to open URI: " + urlLink);
      }
    });
  }

  getDaysInfo() {
    return {
      SUN: { index: 0, name: "Sunday" },
      MON: { index: 1, name: "Monday" },
      TUE: { index: 2, name: "Tuesday" },
      WED: { index: 3, name: "Wednesday" },
      THU: { index: 4, name: "Thursday" },
      FRI: { index: 5, name: "Friday" },
      SAT: { index: 6, name: "Saturday" },
    };
  }

  getWithZero(num: any) {
    return ("0" + num).slice(-2);
  }


  getDatafromStorage = async (key: string) => {
    const data = await AsyncStorage.getItem(key);
    return data;
  }

  saveDataToStorage = async (key: string, data: string) => {
    await AsyncStorage.setItem(key, data);
  }

  randDarkColor = () => {
    const predefinedColors = ['', '', ''];
    const randIndex = Math.floor(Math.random() * 3);
    return predefinedColors[randIndex];
  };

  generateDaysOfWeek = () => {
    const today = moment();
    const days = [];

    for (let i = 0; i < 7; i++) {
      const date = today.clone().add(i, 'days');
      const isToday = today.isSame(date, 'day');
      days.push({
        dayName: date.format('dd'),
        dayNumber: date.format('YYYY-MM-DD'),
        dayNum: date.format('D'),
        isToday
      });
    }
    return days;
  };

  getTime(date: any) {
    const stamp = parseInt(date / 1000);
    return moment.unix(stamp).format('HH:mm a')
  }

  getDate(date: any) {
    const stamp = parseInt(date / 1000);
    return moment.unix(stamp).format('MMM DD')
  }

}

const Helper = new Helpers();

export default Helper;
