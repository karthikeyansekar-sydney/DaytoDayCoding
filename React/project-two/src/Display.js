import React from 'react';

export const Display = ({ifTruthy=true, children}) =>
(ifTruthy) ?
React.Children.only(children)
: null
