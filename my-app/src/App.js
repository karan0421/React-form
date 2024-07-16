import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./componenet/form";
import Login from "./componenet/login";
import Nav from "./componenet/nav";
import "bootstrap/dist/css/bootstrap.css";
import Child from "./componenet/child";
import Parent from "./componenet/parent"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
        <Route path="login" element={<Login />}/>
        <Route path="form" element={<Form />}/>
        <Route path="child" element={<Child />}/>
        <Route path="parent" element={<Parent />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
