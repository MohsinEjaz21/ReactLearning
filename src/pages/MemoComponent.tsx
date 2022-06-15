import React, { useEffect } from 'react'

const MemoChild = ({ name }) => {
  console.log("Rendering Child MemoComponent")
  return (
    <div>{name}</div>
  )
}

const MemoChildWrapper = React.memo(MemoChild)

// it is similar to ( PureComponent in class component )
// avoid rerenders if props / state are not changed
export const MemoComponent = () => {
  const [name, setName] = React.useState("Mohsin")

  useEffect(() => {
    let interval = setInterval(() => {
      setName("Mohsin")
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  });

  console.log("Rendering Parent MemoComponent")

  return (
    <div><MemoChild name={name} /></div>
  )
}