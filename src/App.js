import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EmployeeForm from "./components/EmployeeForm";
import TableListing from "./components/TableListing";
import Update from "./components/Update";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="row">
          <div class="col-4">
            <Menu></Menu>
          </div>
          <div class="col-8">
            <Routes>
              <Route path="/" exact Component={Home}></Route>
              <Route path="/view" Component={TableListing}></Route>
              <Route path="/add" Component={EmployeeForm}></Route>
              <Route path="/update" Component={Update}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
