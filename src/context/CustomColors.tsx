import { useColorModeValue } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import {
  CustomColorsProviderProps,
  MyColorsState,
} from "schemas/ContextSchema";

export const CustomColorsContext = createContext<any | null>(null);

export const CustomColorsProvider = (props: CustomColorsProviderProps) => {
  const { children } = props;
  const [myColors, setMyColors] = useState<MyColorsState>();

  // List of colors
  const title = useColorModeValue("pumpkin", "blue_atoll"),
    header = useColorModeValue("good_blue", "cyber_yellow"),
    paragraph = useColorModeValue("gray.700", "new_white"),
    span = useColorModeValue("gray.500", "purple.200"),
    light = useColorModeValue("whiteAlpha.700", "blackAlpha.300"),
    dark = useColorModeValue("blackAlpha.300", "whiteAlpha.700"),
    lighter = useColorModeValue("gray.50", "gray.800"),
    darker = useColorModeValue("gray.800", "gray.50"),
    common = useColorModeValue("#8952e0f0", "#b795eccc"),
    sky_red = useColorModeValue("maya_blue", "bright_red"),
    crimson_orange = useColorModeValue("space_cherry", "pumpkin"),
    red = useColorModeValue("red.400", "red.100"),
    orange = useColorModeValue("orange.400", "orange.100"),
    yellow = useColorModeValue("yellow.600", "yellow.100"),
    green = useColorModeValue("green.400", "green.100");

  useEffect(() => {
    setMyColors({
      title,
      header,
      paragraph,
      span,
      light,
      lighter,
      dark,
      darker,
      common,
      sky_red,
      crimson_orange,
      red,
      orange,
      yellow,
      green,
    });
  }, [
    title,
    header,
    paragraph,
    span,
    light,
    lighter,
    dark,
    darker,
    common,
    sky_red,
    crimson_orange,
    red,
    orange,
    yellow,
    green,
  ]);

  return (
    <CustomColorsContext.Provider value={{ myColors }}>
      {children}
    </CustomColorsContext.Provider>
  );
};
