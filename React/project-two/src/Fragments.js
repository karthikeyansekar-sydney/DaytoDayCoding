import React from 'react';
import {Nav,A} from './styled'

const NavItems = () =>
<React.Fragment>
<A href="/">Home</A>
<A href="/">About</A>
<A href="/">contact</A>
<A href="/">Services</A>
</React.Fragment>

export const App = () =>
<header>
<Nav>
<NavItems />
</Nav>
</header>
