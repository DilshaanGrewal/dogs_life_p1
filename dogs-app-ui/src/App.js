import logo from './logo.svg';
import './App.css';
import AllDogs from './components/AllDogs';
import DogDetail from './components/DogDetail';
import { Routes , Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <>
     <Container>
    <Routes>
        <Route path="alldogs" element={<AllDogs/>} />
        <Route path="dog" element={<DogDetail/>} />
    </Routes>
    </Container>
</>
  );
}

export default App;
