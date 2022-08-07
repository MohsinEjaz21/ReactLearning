import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AwaySurgery } from '../../pages/away-surgery';
import { SectionO8 } from '../../pages/away-surgery/section-08';
import GridComponent from '../../pages/grid-component';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridComponent />} />
        <Route path="/aws" element={<AwaySurgery />} />
        <Route path="/sec" element={<SectionO8 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;