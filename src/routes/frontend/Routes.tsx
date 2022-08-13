import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider from '../../components/slider';
import { AwaySurgery } from '../../pages/away-surgery';
import { Section14 } from '../../pages/away-surgery/section-14';
import GridComponent from '../../pages/grid-component';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridComponent />} />
        <Route path="/aws" element={<AwaySurgery />} />
        <Route path="/sec" element={<Section14 />} />
        <Route path="/temp" element={<Slider />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;