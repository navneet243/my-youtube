import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Error from "./Components/Error";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watch from "./Pages/Watch";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <Watch/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
