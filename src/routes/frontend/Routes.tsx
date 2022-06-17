import { ClassClick } from '@pages/ClassClick';
import { ClickCounter } from '@pages/ClickCounter';
import { ClickCounter2 } from '@pages/ClickCounter2';
import { Counter } from '@pages/Counter';
import { Counter2 } from '@pages/Counter2';
import { EventBind } from '@pages/EventBind';
import { Form } from '@pages/Form';
import { ForwardRef } from '@pages/ForwardRef';
import { FocusInput } from '@pages/FousInput';
import { FunctionClick } from '@pages/FunctionClick';
import { Greet } from '@pages/Greet';
import { HeroImpl } from '@pages/Hero';
import { Home } from '@pages/Home';
import { HoverCounter } from '@pages/HoverCounter';
import { HoverCounter2 } from '@pages/HoverCounter2';
import { InlineCss } from '@pages/InlineCss';
import { MemoComponent } from '@pages/MemoComponent';
import { NamesList } from '@pages/NamesList';
import { Parent } from '@pages/Parent';
import { ParentComp } from '@pages/ParentComp';
import { PortalDemo } from '@pages/PortalDemo';
import { ReduxTest } from '@pages/ReduxTest';
import { RefsDemo } from '@pages/RefsDemo';
import { Stylesheet } from '@pages/Stylesheet';
import { User } from '@pages/User';
import { UseRef } from '@pages/UseRefImpl';
import { UserGreeting } from '@pages/UserGreeting';
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
        <Route path="/hero" element={<HeroImpl />} />
        <Route path="/clickCounter" element={<ClickCounter name="Mohsin" />} />
        <Route path="/hoverCounter" element={<HoverCounter />} />
        <Route path="/hoverCounter2" element={<HoverCounter2 />} />
        <Route path="/clickCounter2" element={<ClickCounter2 />} />
        {/* The term "render prop"refers to a technique for sharing code
           between React components using a prop whose value is a function. */}
        <Route path="/user" element={<User render={(isLoggedIn) => isLoggedIn ? "Mohsin" : 'Guest'} />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/redux" element={<ReduxTest />} />


      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;