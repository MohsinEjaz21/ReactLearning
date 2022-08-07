import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AwaySurgery } from '../../pages/away-surgery';
import { SectionO6 } from '../../pages/away-surgery/section-06';
import GridComponent from '../../pages/grid-component';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridComponent />} />
        <Route path="/aws" element={<AwaySurgery />} />
        <Route path="/sec" element={<SectionO6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;