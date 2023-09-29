import { Provider } from 'react-redux';
import store from './store';
import Layouts from "./pages/Layouts";
import GlobalStyle from "./style/global-style";

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Layouts />
  </Provider>
);

export default App;