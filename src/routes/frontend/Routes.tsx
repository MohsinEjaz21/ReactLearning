import { Counter } from '@pages/Counter';
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

      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;