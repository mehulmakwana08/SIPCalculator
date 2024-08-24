import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, PieController);

const PieChart = ({ sipAmount, investedAmount, estimatedReturns }) => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    myChartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Invested Amount', 'Estimated Returns'],
        datasets: [{
          data: [investedAmount, estimatedReturns],
          backgroundColor: ['#AD98EA', '#DDD1FF'],
        }]
      },
      options: {
        responsive: true,
      }
    });

    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, [sipAmount, investedAmount, estimatedReturns]);

  return (
    <div className="col-lg-4 chart_side row mx-0 px-0 order-lg-3 order-3 mb-lg-0 mb-4 gap-4">
      <div className="chart_img col-12 mb3 d-flex align-items-center justify-content-center">
        <div className="col-lg-4 chart_side d-flex align-items-center justify-content-center order-lg-3 order-3 mb-lg-0 mb-4">
          <div className="px5">
            <div className="chart" style={{ display: 'block' }}>
              <canvas ref={chartRef} id="myChart" style={{ display: 'block', boxSizing: 'border-box', height: '300px', width: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <div className="radio_input row mx-0 align-items-center px-3 justify-content-center ng-star-inserted">
          <div className="col-auto form-check mb-sm-0 mb-2 d-flex align-items-center">
            <span className="dot" style={{ backgroundColor: '#AD98EA' }} />
            <label htmlFor="exampleFormControlInput11" className="text-center ms-2 form-check-label pt-1">
              Invested Amount: ₹{investedAmount}
            </label>
          </div>
          <div className="col-auto form-check mb-sm-0 mb-2 d-flex align-items-center">
            <span className="dot" style={{ backgroundColor: '#DDD1FF' }} />
            <label htmlFor="exampleFormControlInput14" className="text-center ms-2 form-check-label pt-1">
              Est. Returns: ₹{estimatedReturns}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
