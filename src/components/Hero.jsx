import React from 'react'

const Hero = () => {
    return (
        <div style={{
            paddingTop: '7rem'
        }}>
            <div className="grid text-center d-flex justify-content-center align-items-center" style={{
                    height: "100%"
                }}>
                <div className="g-col-6 text-white" style={{
                    height: "100%"
                }}>
                    <h1 style={{maxWidth: "500px", textAlign: "left", fontSize: '70PX'}} className='fw-bold'>World Biggest 2023 Conference</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="g-col-6">
                    <img style={{
                        maxHeight: "500px"
                    }} src="https://htmldesigntemplates.com/html/eventiz/images/man4.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero