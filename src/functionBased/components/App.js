import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import TodoContainer from './TodoContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
