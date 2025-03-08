import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { WINDOW_WIDTH } from "../utils/dimension";
export const useSlidingAnimation = (scrollX, pageNo) => {
  const contentAnimation = useAnimatedStyle(() => {
    const inputRange = [
      (pageNo - 1) * WINDOW_WIDTH,
      pageNo * WINDOW_WIDTH,
      (pageNo + 1) * WINDOW_WIDTH,
    ];

    return {
      opacity: interpolate(
        scrollX.value,
        inputRange,
        [0, 1, 0],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            inputRange,
            [-500, 0, 500],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });
  return { contentAnimation };
};
