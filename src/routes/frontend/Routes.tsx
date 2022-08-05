import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Section01 from '../../pages/away-surgery/section-01';
import Section02 from '../../pages/away-surgery/section-02';
import GridComponent from '../../pages/grid-component';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridComponent />} />
        <Route path="/sec1" element={<Section01 />} />
        <Route path="/sec2" element={<Section02 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;