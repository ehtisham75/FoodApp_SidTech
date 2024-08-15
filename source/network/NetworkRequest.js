import AsyncStorage from "@react-native-async-storage/async-storage";
import Helper from "../utilis/Helper";

const BASE_URL = "https://getdeep.app/MobileApi/public/api/"

//token = "FgpMcVHTE1Mf51R2CFQMIL4oQ5hhUQ23-06-10xTqd4Wpbl0odpFlsIaEwzYL7CDe3X6xHYK0rVK8q5aItosI7MK"

export const API_REQUEST = async (
  method,
  endPoint,
  data,
  onSuccess,
  onFailed
) => {
  try {
    const token = await AsyncStorage.getItem("@Session:Token");
    let header = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };
    console.log(BASE_URL + endPoint, token)

    fetch(BASE_URL + endPoint, {
      method: method,
      body: data ? JSON.stringify(data) : null,
      headers: header,
    })
      .then(async (response) => {
        // get json response here
        let jsonData = await response.json();
        if (response.status === 200) {
          onSuccess(jsonData);
        } else {
          // Rest of status codes (400,500,303), can be handled here appropriately
          onFailed(jsonData.message);
        }
      })
      .catch((err) => {
        Helper.crashlyticsHelperFunction({
          screeName: "NetWorkRequest",
          functionName: `API_REQUEST and endpoint is ${endPoint}`,
          error: err,
        })
        onFailed("Network error");
      });
  } catch (error) {
    console.log("catch block of API_REQUEST: ", error, "\n==========\n\n\n")
    Helper.crashlyticsHelperFunction({
      screeName: "NetWorkRequest",
      functionName: `API_REQUEST and endpoint is ${endPoint}`,
      error: error,
    })
  }
};
