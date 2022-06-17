import DataTable from '@pages/DataTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;