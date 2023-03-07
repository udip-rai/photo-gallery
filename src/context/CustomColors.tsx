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
    common = useColorModeValue("#8952e0f0", "#b795eccc"),
    sky_red = useColorModeValue("maya_blue", "bright_red"),
    crimson_orange = useColorModeValue("space_cherry", "pumpkin");

  useEffect(() => {
    setMyColors({
      title,
      header,
      common,
      sky_red,
      crimson_orange,
    });
  }, [title, header, common, sky_red, crimson_orange]);

  return (
    <CustomColorsContext.Provider value={{ myColors }}>
      {children}
    </CustomColorsContext.Provider>
  );
};
