import Users from '@pages/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/addUser" element={<AddUser />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;