import React from 'react';

export const Greetings = ({data}) =>
{
  return data.map(item => {
    return (
      <li key={item.id}> {item.greeting}</li>
    )
  })
}
