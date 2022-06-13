import React from 'react'

export const Greet = () => {
  // return (
  //   <div>
  //     <h1>Greet</h1>
  //   </div>
  // )
  // behind the scenes, this is what is rendered:
  return (
    React.createElement('div', {
      id: 'greet', className: 'greet', children: [
        React.createElement('h1', { children: 'Greet' })
      ]
    })
  )
}
