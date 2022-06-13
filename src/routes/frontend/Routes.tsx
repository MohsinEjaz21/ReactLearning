import { Greet } from '@pages/Greet';
import { Home } from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greet" element={<Greet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;