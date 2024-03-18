import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appstore from "./utils/store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/:channelId/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appstore}>
      <div className="w-full font-sans ">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
