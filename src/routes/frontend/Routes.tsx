import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AwaySurgery from '../../pages/away-surgery';
import GridComponent from '../../pages/grid-component';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AwaySurgery />} />
        <Route path="/awaySurgery" element={<GridComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;