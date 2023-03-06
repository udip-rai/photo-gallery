import { ChakraProvider } from "@chakra-ui/react";
import { Theme1 } from "assets/themes/theme1";
import { ErrorBoundary } from "components/global";
import { CustomColorsProvider } from "context/CustomColors";
import { RouteList } from "routes/RouteList";

export const App = () => (
  <ErrorBoundary>
    <ChakraProvider theme={Theme1}>
      <CustomColorsProvider>
        <RouteList />
      </CustomColorsProvider>
    </ChakraProvider>
  </ErrorBoundary>
);
