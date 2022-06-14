import { ClassClick } from '@pages/ClassClick';
import { Counter } from '@pages/Counter';
import { EventBind } from '@pages/EventBind';
import { FunctionClick } from '@pages/FunctionClick';
import { Greet } from '@pages/Greet';
import { Home } from '@pages/Home';
import { Parent } from '@pages/Parent';
import UserGreeting from '@pages/UserGreeting';
import { Welcome } from '@pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greet" element={<Greet />} />
        <Route path="/wellcome" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/functionClick" element={<FunctionClick />} />
        <Route path="/classClick" element={<ClassClick />} />
        <Route path="/eventBind" element={<EventBind />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/userGreeting" element={<UserGreeting />} />

      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;