import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  return (

  <>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
              <p className="text-center text-white bg-dark ">&copy; {year}. All Rights Reserved </p>
        </div>
      </div>
    </div>
  </>
    )
}
