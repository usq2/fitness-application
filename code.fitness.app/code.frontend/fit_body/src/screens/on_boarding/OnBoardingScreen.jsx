import React, { useCallback, useRef } from "react";
import { FlatList, View } from "react-native";
import OnBoardingCard from "../../components/ui/OnBoardingCard";
import { ONBOARDING_SCREEN_DATA } from "../../constants/screens/onboarding_data";
import { STYLES } from "../../themes/styles";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

const OnBoardingScreen = () => {
  const flatListRef = useRef(null);

  const scrollToEnd = useCallback(() => {
    flatListRef.current?.scrollToEnd({
      animated: true,
    });
  }, []);

  const scrollX = useSharedValue(0);

  const scrollNext = useCallback((nextPageNo) => {
    flatListRef.current?.scrollToIndex({ index: nextPageNo });
  }, []);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={STYLES.flex1}>
      <Animated.FlatList
        ref={flatListRef}
        data={ONBOARDING_SCREEN_DATA}
        horizontal
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        onScroll={onScrollHandler}
        renderItem={({ item, index }) => (
          <OnBoardingCard
            screenOptions={item}
            pageNo={index}
            onSkip={scrollToEnd}
            scrollNext={scrollNext}
            totalPages={ONBOARDING_SCREEN_DATA.length}
            scrollX={scrollX}
          />
        )}
      />
    </View>
  );
};

export default OnBoardingScreen;
