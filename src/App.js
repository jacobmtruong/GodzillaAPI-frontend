import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import FormInput from './Components/displays/FormInput';
import Monsters from './Components/results/Monsters';
import Monster from './Components/results/Monster';
import Banner from './Components/displays/Banner';
import Linkslist from './Components/displays/Linkslist';
import PlaygroundBanner from './Components/displays/PlaygroundBanner';

function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Navigate to='/' replace />} />

        <Route path='/' element={<>
          <Banner />
          <Linkslist />
        </>} />

        <Route path='/form' element={<FormInput />} />


        <Route path='/playground' element={<>
          <PlaygroundBanner />
          <FormInput />
        </>} />

        <Route path="/api/:input" element={<Monsters />} />

        <Route path="/api/:input/:name" element={<Monster />} />
      </Routes>
    </div>
  );
}

export default App;


