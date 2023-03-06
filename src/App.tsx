import { ChakraProvider } from "@chakra-ui/react";
import { Theme1 } from "assets/themes/theme1";
import { ErrorBoundary } from "components/global";
import { CustomColorsProvider } from "context/CustomColors";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { RouteList } from "routes/RouteList";

export const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ChakraProvider theme={Theme1}>
        <CustomColorsProvider>
          <RouteList />
        </CustomColorsProvider>
      </ChakraProvider>
    </Provider>
  </ErrorBoundary>
);
