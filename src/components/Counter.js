import React from 'react';
import '../styling/Counter.css';

const counterData = [
  { count: 0, label: 'Daily Visitor' },
  { count: 0, label: 'Delivery Monthly' },
  { count: 0, label: 'Positive Feedback' },
  { count: 0, label: 'Total Employee' }
];

function Counter() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        {counterData.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="counter-containt">
              <h2 className="mb-0 " style={{ fontSize: "56px" }}>{item.count}</h2>
              <span className="m-0 d-flex" style={{ fontSize: "16px" }}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;