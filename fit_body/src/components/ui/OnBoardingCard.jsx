import { BlurView } from "expo-blur";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { STYLES } from "../../themes/styles";

const SkipButton = ({ onSkip, skipText, SkipLogo }) => (
  <Pressable onPress={onSkip}>
    <View style={[STYLES.alignCenter, STYLES.justifyCenter, STYLES.flexRow]}>
      <Text
        style={[STYLES.fw500, STYLES.f18, STYLES.mr10, { color: "#E2F163" }]}
      >
        {skipText}
      </Text>
      <SkipLogo />
    </View>
  </Pressable>
);

const ProgressIndicators = ({ currentPage }) => (
  <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 10 }}>
    {[1, 2, 3].map((item) => (
      <View
        key={item}
        style={{
          backgroundColor: item === currentPage ? "white" : "#896CFE",
          height: 5,
          width: 25,
          marginRight: 10,
          borderRadius: 2,
        }}
      />
    ))}
  </View>
);

const OnboardingButton = ({ buttonText, onPress }) => (
  <BlurView
    tint="dark"
    intensity={90}
    style={[STYLES.border0, STYLES.alignSelfCenter, STYLES.mt10, STYLES.p10]}
  >
    <Pressable onPress={onPress}>
      <Text style={styles.buttonStyle}>{buttonText}</Text>
    </Pressable>
  </BlurView>
);

const FirstScreen = ({ screenOptions }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={screenOptions.textStyle}>{screenOptions.text}</Text>
      {!!screenOptions.AppLogos && (
        <screenOptions.AppLogos container={screenOptions.appLogosStyle} />
      )}
      <View style={logoAnimation}>
        <screenOptions.CommonLogos />
      </View>
    </View>
  );
};

const OtherScreens = ({ screenOptions, pageNo, scrollNext }) => {
  return (
    <View style={{ width: WIDTH }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#B3A0FF",
          padding: 10,
        }}
      >
        <View style={logoAnimation}>
          <screenOptions.CommonLogos
            container={screenOptions.commonLogosStyle}
          />
        </View>
        <Text style={screenOptions.textStyle}>{screenOptions.text}</Text>

        <ProgressIndicators currentPage={pageNo} />
      </View>

      <View style={buttonAnimation}>
        <OnboardingButton
          buttonText={screenOptions?.button_text}
          onPress={() => screenOptions.showSkip && scrollNext(pageNo + 1)}
        />
      </View>
    </View>
  );
};

const OnBoardingBackground = ({
  screenOptions,
  pageNo,
  onSkip,
  scrollNext,
}) => {
  return (
    <View style={STYLES.window}>
      <ImageBackground
        source={screenOptions.backgroundImage}
        style={STYLES.flex1}
        imageStyle={{ objectFit: "fill" }}
      >
        {!!screenOptions.showSkip && (
          <View style={{ top: 10, right: 20, position: "absolute" }}>
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
    color: "#ffffff",
  },
});

export default OnBoardingBackground;
