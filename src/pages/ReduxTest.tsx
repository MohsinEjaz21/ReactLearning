import { Redux } from '@redux/store';
import React, { useEffect } from 'react';

export const ReduxTest = () => {
  const { name } = Redux.DataGridSlice.state()
  const { setName } = Redux.DataGridSlice.actions

  useEffect(() => {
    // console.log(name)
    setName("Oeee behnc ki dum")
    return () => { }
  }, [])

  return (
    <div>{`ReduxTest dataGrid ${name}`} </div>
  )
}
