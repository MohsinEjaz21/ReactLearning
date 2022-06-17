import { Slices } from '@redux/store';
import React, { useEffect } from 'react';

export const ReduxTest = () => {
  const { name } = Slices.DataGrid.state()
  const { setName } = Slices.DataGrid.actions()

  useEffect(() => {
    setName("Oeee behnc ki dum")
    return () => { }
  }, [])

  return (
    <div>{`ReduxTest dataGrid ${name}`} </div>
  )
}
