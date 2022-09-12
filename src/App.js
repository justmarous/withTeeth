import './css/styles.css';
import store from "./js/redux/store";
import {Provider} from 'react-redux'
import Index from "./js/components";

function App() {
  return (
      <Provider store={store}>
          <Index/>
      </Provider>
  );
}

export default App;
