import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AwaySurgery from '../../pages/away-surgery';
import GridComponent from '../../pages/grid-component';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridComponent />} />
        <Route path="/aws" element={<AwaySurgery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;