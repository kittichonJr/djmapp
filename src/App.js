import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AddActivity from './page/AddActivity';
import Navigator from './page/nevigatior'
import DataActivity from './page/DataActivity';

const App = () => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigator />} />
        <Route path="AddActivity" element={<AddActivity  />} />
        <Route path="DataActivity" element={<DataActivity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;