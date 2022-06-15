import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalDemo() {
  const portalNode: any = document.getElementById('portal-root')
  return ReactDOM.createPortal(
    <h1>PortalDemo</h1>,
    portalNode
  )
}
