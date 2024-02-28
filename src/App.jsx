import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appstore from "./utils/store/appStore";

function App() {
  return (
    <Provider store={appstore}>
      <div className="w-full">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
