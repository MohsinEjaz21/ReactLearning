import { ClassClick } from '@pages/ClassClick';
import { Counter } from '@pages/Counter';
import { EventBind } from '@pages/EventBind';
import { Form } from '@pages/Form';
import { ForwardRef } from '@pages/ForwardRef';
import { FocusInput } from '@pages/FousInput';
import { FunctionClick } from '@pages/FunctionClick';
import { Greet } from '@pages/Greet';
import { Home } from '@pages/Home';
import { InlineCss } from '@pages/InlineCss';
import { MemoComponent } from '@pages/MemoComponent';
import { NamesList } from '@pages/NamesList';
import { Parent } from '@pages/Parent';
import { ParentComp } from '@pages/ParentComp';
import PortalDemo from '@pages/PortalDemo';
import { RefsDemo } from '@pages/RefsDemo';
import { Stylesheet } from '@pages/Stylesheet';
import { UseRef } from '@pages/UseRefImpl';
import UserGreeting from '@pages/UserGreeting';
import { Welcome } from '@pages/Welcome';
import { LifecycleA } from '@src/components/LifecycleA';
import { PureComponent } from 'react';
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
        <Route path="/pureComponent" element={<PureComponent />} />
        <Route path="/parentComp" element={<ParentComp />} />
        <Route path="/memo" element={<MemoComponent />} />
        <Route path="/refs" element={<RefsDemo />} />
        <Route path="/focusInput" element={<FocusInput />} />
        <Route path="/forwardRef" element={<ForwardRef />} />
        <Route path="/UseRef" element={<UseRef />} />
        <Route path="/portals" element={<PortalDemo />} />

      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;