import React from 'react'

function TimeBaner() {
    return (

        <div className="container body ">

            <style>
                {`
              .counter-box
              {
                 color:"blue";
              }
             
              .body
              {
                    font-size: 16px;
                     line-height: 1.5;
                     font-family: "Poppins", sans-serif;
                     overflow-x: hidden;
                     font-weight: 400;
                     color: yellow;
                     margin-left:0;
                    

              }
            `}
            </style>
            <div className="row">
                <div className="col-lg-7 col-lg-offset-5  bg-black">
                    <div className="coming-counter d-md-flex align-items-center justify-content-between p-4 py-5 text-md-start text-center">
                        <div className="conter-box">
                            <span className="days"> 00</span>
                            <div>Days</div>
                        </div>
                        <div>
                            <span className="days"> 00</span>
                            <div>Hours</div>
                        </div>
                        <div>
                            <span className="days"> 00</span>
                            <div>Minutes</div>
                        </div>
                        <div>
                            <span className="days"> 00</span>
                            <div>Seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeBaner