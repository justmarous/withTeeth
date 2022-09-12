import store from "./js/redux/store";
import {Provider} from 'react-redux'
import Main from "./js/components/Main";

function App() {
  return (
      <Provider store={store}>
          <Main/>
      </Provider>
  );
}

export default App;
