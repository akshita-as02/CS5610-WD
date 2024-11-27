import Kanbas from "./kanbas";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./kanbas/store"; 
import { Provider } from "react-redux";
export default function App() {
 return (
  <HashRouter>
    <Provider store={store}>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Labs"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/kanbas/*" element={<Kanbas />} />
    </Routes>
   </div>
   </Provider>
  </HashRouter>
);}

