import { BlurView } from "expo-blur";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { useSlidingAnimation } from "../../hooks/useSlidingAnimation";
import { STYLES } from "../../themes/styles";
import { DEFAULT_THEME } from "../../themes/theme";
import { WINDOW_WIDTH } from "../../utils/dimension";

const SkipButton = ({ onSkip, skipText, SkipLogo }) => (
  <Pressable onPress={onSkip}>
    <View
      style={[
        STYLES.alignCenter,
        STYLES.justifyCenter,
        STYLES.flexRow,
        STYLES.pt20,
      ]}
    >
      <Text
        style={[
          STYLES.fw500,
          STYLES.f18,
          STYLES.pr5,
          { color: DEFAULT_THEME.COLORS.text_color_005 },
        ]}
      >
        {skipText}
      </Text>
      <SkipLogo />
    </View>
  </Pressable>
);

const ProgressIndicators = ({ currentPage, totalPages }) => (
  <View style={styles.progressIndicationContainer}>
    {Array.from({ length: totalPages - 1 }, (_, index) => index + 1).map(
      (item) => (
        <View
          key={item}
          style={[
            {
              backgroundColor:
                item === currentPage
                  ? DEFAULT_THEME.COLORS.background_color_002
                  : DEFAULT_THEME.COLORS.background_color_003,
            },
            styles.progressIndicator,
          ]}
        />
      )
    )}
  </View>
);

const OnboardingButton = ({ buttonText, onPress }) => (
  <BlurView tint="dark" intensity={90} style={styles.blurViewStyle}>
    <Pressable onPress={onPress}>
      <Text style={styles.buttonStyle}>{buttonText}</Text>
    </Pressable>
  </BlurView>
);

const FirstScreen = ({ screenOptions, scrollX }) => {
  return (
    <View>
      <Text style={screenOptions.textStyle}>{screenOptions.text}</Text>
      <View style={STYLES.alignCenter}>
        <screenOptions.AppLogos container={screenOptions.appLogosStyle} />
        <screenOptions.CommonLogos />
      </View>
    </View>
  );
};

const OtherScreens = ({
  screenOptions,
  pageNo,
  scrollNext,
  totalPages,
  scrollX,
}) => {
  const { contentAnimation } = useSlidingAnimation(scrollX, pageNo);
  //   const inputRange = [
  //     (pageNo - 1) * WINDOW_WIDTH,
  //     pageNo * WINDOW_WIDTH,
  //     (pageNo + 1) * WINDOW_WIDTH,
  //   ];

  //   return {
  //     opacity: interpolate(
  //       scrollX.value,
  //       inputRange,
  //       [0, 1, 0],
  //       Extrapolation.CLAMP
  //     ),
  //     transform: [
  //       {
  //         translateX: interpolate(
  //           scrollX.value,
  //           inputRange,
  //           [-500, 0, 500],
  //           Extrapolation.CLAMP
  //         ),
  //       },
  //     ],
  //   };
  // });
  return (
    <Animated.View style={[{ width: WINDOW_WIDTH }, contentAnimation]}>
      <View style={styles.otherScreen}>
        <View>
          <screenOptions.CommonLogos
            container={screenOptions.commonLogosStyle}
          />
        </View>
        <Text style={screenOptions.textStyle}>{screenOptions.text}</Text>
        <ProgressIndicators currentPage={pageNo} totalPages={totalPages} />
      </View>

      <View>
        <OnboardingButton
          buttonText={screenOptions?.button_text}
          onPress={() => screenOptions.showSkip && scrollNext(pageNo + 1)}
        />
      </View>
    </Animated.View>
  );
};

const OnBoardingCard = ({
  screenOptions,
  pageNo,
  onSkip,
  scrollNext,
  totalPages,
  scrollX,
}) => {
  return (
    <View style={STYLES.window}>
      <ImageBackground
        source={screenOptions.backgroundImage}
        style={STYLES.flex1}
        imageStyle={{ objectFit: "fill" }}
      >
        {!!screenOptions.showSkip && (
          <View style={styles.skipButton}>
            <SkipButton
              onSkip={onSkip}
              skipText={screenOptions.skipText}
              SkipLogo={screenOptions.SkipLogo}
            />
          </View>
        )}
        <View style={styles.container}>
          {screenOptions?.isFirstScreen ? (
            <FirstScreen screenOptions={screenOptions} />
          ) : (
            <OtherScreens
              screenOptions={screenOptions}
              pageNo={pageNo}
              scrollNext={scrollNext}
              totalPages={totalPages}
              scrollX={scrollX}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    color: DEFAULT_THEME.COLORS.text_color_002,
  },
  skipButton: {
    top: 10,
    right: 20,
    position: "absolute",
  },
  buttonContainer: {
    width: "70%",
  },
  blurViewStyle: {
    alignSelf: "center",
    borderWidth: StyleSheet.hairlineWidth,
    margin: 10,
    padding: 10,
    overflow: "hidden",
    width: "70%",
    borderRadius: 30,
    borderColor: DEFAULT_THEME.COLORS.border_color_002,
  },
  otherScreen: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: DEFAULT_THEME.COLORS.background_color_004,
    padding: 10,
  },
  progressIndicationContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  progressIndicator: {
    height: 5,
    width: 25,
    marginRight: 10,
    borderRadius: 2,
  },
});

export default OnBoardingCard;
