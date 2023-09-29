import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Transfer from '../Transfer';
import Charts from '../Chart';
import TransfersView from '../TransferView';

const Layouts = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/transferView" element={<TransfersView />}></Route>
        <Route path="/charts" element={<Charts />}></Route>
      </Routes>
    </Router>
  );
}

export default Layouts;
