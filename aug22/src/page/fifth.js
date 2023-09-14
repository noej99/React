import React from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

const Fifth = () => {
    const [menu, setMenu] = useSearchParams();

    if (Math.random() > 0.5) {
        return <Navigate to="/sixth.go" replace={true} />
    }

  return (
    <>
        <h1>Fifth</h1>
        <h2>{menu.get("name")}</h2>
        <h2>{menu.get("price")}</h2>
    </>
  )
}

export default Fifth