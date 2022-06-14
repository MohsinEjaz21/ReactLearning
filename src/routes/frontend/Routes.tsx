import { ClassClick } from '@pages/ClassClick';
import { Counter } from '@pages/Counter';
import { EventBind } from '@pages/EventBind';
import { Form } from '@pages/Form';
import { FunctionClick } from '@pages/FunctionClick';
import { Greet } from '@pages/Greet';
import { Home } from '@pages/Home';
import { InlineCss } from '@pages/InlineCss';
import { NamesList } from '@pages/NamesList';
import { Parent } from '@pages/Parent';
import { Stylesheet } from '@pages/Stylesheet';
import UserGreeting from '@pages/UserGreeting';
import { Welcome } from '@pages/Welcome';
import { LifecycleA } from '@src/components/LifecycleA';
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
        <Route path="/namesList" element={<NamesList />} />
        <Route path="/styleSheet" element={<Stylesheet className='primary' />} />
        <Route path="/inlineCss" element={<InlineCss />} />
        <Route path="/form" element={<Form />} />
        <Route path="/mounting" element={<LifecycleA />} />


      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;