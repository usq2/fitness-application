import { StyleSheet } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../utils/dimension";

export const COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  lime_green: "#E2F163",
  purple: "#896CFE",
  light_purple: "#896CFE",
};

export const STYLES = StyleSheet.create({
  border0: { borderWidth: StyleSheet.hairlineWidth },
  border1: { borderWidth: 1 },

  fw600: { fontWeight: "600" },
  bold: { fontWeight: "600" },
  fw500: { fontWeight: "600" },
  semiBold: { fontWeight: "600" },
  fw400: { fontWeight: "400" },
  normal: { fontWeight: "400" },
  fw300: { fontWeight: "400" },
  light: { fontWeight: "400" },
  underline: { textDecorationLine: "underline" },
  f9: { fontSize: 9 },
  f10: { fontSize: 10 },
  f11: { fontSize: 11 },
  f12: { fontSize: 12 },
  f13: { fontSize: 13 },
  f14: { fontSize: 14 },
  f15: { fontSize: 15 },
  f16: { fontSize: 16 },
  f17: { fontSize: 17 },
  f18: { fontSize: 18 },

  mr2: { marginRight: 2 },
  mr5: { marginRight: 5 },
  mr10: { marginRight: 10 },
  mr20: { marginRight: 20 },
  ml2: { marginLeft: 2 },
  ml5: { marginLeft: 5 },
  ml10: { marginLeft: 10 },
  ml20: { marginLeft: 20 },
  mt2: { marginTop: 2 },
  mt5: { marginTop: 5 },
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  mb2: { marginBottom: 2 },
  mb5: { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  mb20: { marginBottom: 20 },

  // paddings
  p2: { padding: 2 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p20: { padding: 20 },
  pr2: { paddingRight: 2 },
  pr5: { paddingRight: 5 },
  pr10: { paddingRight: 10 },
  pr20: { paddingRight: 20 },
  pl2: { paddingLeft: 2 },
  pl5: { paddingLeft: 5 },
  pl10: { paddingLeft: 10 },
  pl20: { paddingLeft: 20 },
  pt2: { paddingTop: 2 },
  pt5: { paddingTop: 5 },
  pt10: { paddingTop: 10 },
  pt20: { paddingTop: 20 },
  pb2: { paddingBottom: 2 },
  pb5: { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pb20: { paddingBottom: 20 },
  px5: { paddingHorizontal: 5 },

  //BorderRadius
  borderRadius5: { borderRadius: 5 },
  borderRadius10: { borderRadius: 10 },
  borderRadius15: { borderRadius: 15 },
  borderRadius20: { borderRadius: 20 },

  // flex
  flexRow: { flexDirection: "row" },
  flexCol: { flexDirection: "column" },
  flex1: { flex: 1 },
  flexGrow1: { flexGrow: 1 },
  alignCenter: { alignItems: "center" },
  alignBaseline: { alignItems: "baseline" },
  justifyCenter: { justifyContent: "center" },
  alignSelfCenter: { alignSelf: "center" },

  // position
  absolute: { position: "absolute" },

  // dimensions
  w100pct: { width: "100%" },
  h100pct: { height: "100%" },
  window: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },

  // text align
  textLeft: { textAlign: "left" },
  textCenter: { textAlign: "center" },
  textRight: { textAlign: "right" },

  white: { color: COLORS.white },
  black: { color: COLORS.black },
});
