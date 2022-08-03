import Users from '@pages/grid-component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/addUser" element={<AddUser />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;