import { StyleSheet, Dimensions } from "react-native";
import * as themes from "../../themes";

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center"
  },
  inputViewContainer: {
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#CFD8DC"
  },
  buttonContainerStyle: {
    width: "80%",
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: themes.colors.darkOrangeColor
  },
  buttonTextStyle: {
    fontSize: 15,
    fontWeight: "500",
    color: themes.colors.white
  },
  bottomContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpTextStyle: {
    marginLeft: 2,
    fontWeight: "500",
    alignSelf: "center",
    color: themes.colors.lightBlueColor
  }
});
