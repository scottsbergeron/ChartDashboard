import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { PieChart } from './components/charts/PieChart';
import { TimeSeriesChart } from './components/charts/TimeSeriesChart';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chart Dashboard</h1>
      </header>
      <main>
        <Dashboard
          charts={[
            new PieChart({ 
              id: "pie-1", 
              width: 4, 
              height: 3, 
              posX: 1,
              title: "Sample Pie Chart",
              dataRequest: {
                dimensions: ["category"],
                metrics: ["value"],
                filters: []
              },
              attributes: {
                showLegend: true,
                donut: false
              }
            }),
            new TimeSeriesChart({
              id: "time-1",
              width: 8,
              height: 3,
              posX: 5,
              title: "Sample Time Series",
              dataRequest: {
                dimensions: ["date"],
                metrics: ["value"],
                filters: []
              },
              attributes: {
                showGrid: true,
                lineColor: "#1E88E5"
              }
            }),
            new PieChart({ 
              id: "pie-2", 
              width: 6, 
              height: 4, 
              posX: 1,
              title: "Another Pie Chart",
              dataRequest: {
                dimensions: ["region"],
                metrics: ["sales"],
                filters: []
              },
              attributes: {
                showLegend: true,
                donut: true
              }
            }),
          ]}
        />
      </main>
    </div>
  );
};

export default App; 