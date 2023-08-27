import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import ContactList from "./components/ContactList"
import { Button } from "reactstrap";
function App() {
  return (
    <div className="App">
<Link to="/List">
<Button color="info">Contact list</Button>
</Link>
     <Routes>
      <Route path='/List' element={<ContactList />} />
     </Routes>
    </div>
  );
}

export default App;
