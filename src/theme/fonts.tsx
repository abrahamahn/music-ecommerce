import Metrics from "./metrics";

const size = {
  font6: Metrics.screenwidth * (6 / 365),
  font8: Metrics.screenwidth * (8 / 365),
  font10: Metrics.screenwidth * (10 / 365),
  font12: Metrics.screenwidth * (12 / 365),
  font14: Metrics.screenwidth * (14 / 365),
  font16: Metrics.screenwidth * (16 / 365),
  font20: Metrics.screenwidth * (20 / 365),
};

const weight = {
  full: "900",
  smi: "600",
  low: "400",
  bold: "bold",
  normal: "normal",
};

const type = {
  montserratMedium: "Montserrat-Medium",
  montserratRegular: "Montserrat-Regular",
  montserratSemiBold: "Montserrat-SemiBold",
};

export default {
  size,
  weight,
  type,
};
