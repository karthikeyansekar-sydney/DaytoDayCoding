import React from 'react';

export const Apps = ({dictionary}) => {
return(
<dl>
{dictionary.map(term => (
<React.Fragment key={term.id}>
<dt>{term.name}</dt>
<dd>{term.definition}</dd>
</React.Fragment>
))}
</dl>
)
}
