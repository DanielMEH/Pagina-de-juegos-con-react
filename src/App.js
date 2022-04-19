import './Index.css';

import {RouterIndex} from "./router/RouterIndex"
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <RouterIndex/>
     </BrowserRouter>
    </div>
  );
}

export default App;
