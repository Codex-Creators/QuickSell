import Routes from './routes.js';
import Navbar from './components/Navbar.jsx';
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
export const serverUrl = 'http://localhost:8000';
function App() {

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes />
            </Router>
        </div>
    );
}

export default App;
