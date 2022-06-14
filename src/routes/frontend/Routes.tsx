import { ClassClick } from '@pages/ClassClick';
import { Counter } from '@pages/Counter';
import { FunctionClick } from '@pages/FunctionClick';
import { Greet } from '@pages/Greet';
import { Home } from '@pages/Home';
import { Welcome } from '@pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greet" element={<Greet />} />
        <Route path="/wellcome" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/functionClick" element={<FunctionClick />} />
        <Route path="/classClick" element={<ClassClick />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;