import React from 'react'
import '../breadcrumb.css'

function Breadcrumb() {
  return (
    <div>
        <div className="pa-breadcrumb">
            <div className="container-fluid">
                <div className="pa-breadcrumb-box">
                {/* <img src={"/images/breadcrum.jpg"}/> */}
                    <h1>About us</h1>
                    <ul>
                        <li>
                            <a href="/">
                                Home</a></li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Breadcrumb