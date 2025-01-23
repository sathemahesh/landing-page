import React from 'react';
import '../styling/Counter.css';
function Counter() {
  return (
    <div className="container mt-5 border mb-5">
      <div className="row text-center">
        {/* Counter 1 */}
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="counter-containt">
            <h2 className="mb-0 font_style1">0</h2>
            <span className="m-0 font_style">Daily Visitor</span>
          </div>
        </div>

        {/* Counter 2 */}
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="counter-containt">
            <h2 className="mb-0 font_style1">0</h2>
            <span className="m-0 font_style">Delivery Monthly</span>
          </div>
        </div>

        {/* Counter 3 */}
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="counter-containt">
            <h2 className="mb-0 font_style1">0</h2>
            <span className="m-0 font_style">Positive Feedback</span>
          </div>
        </div>

        {/* Counter 4 */}
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="counter-containt">
            <h2 className="mb-0 font_style1">0</h2>
            <span className="m-0 font_style">Total Employee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
