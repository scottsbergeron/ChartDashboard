import React, { useState, useEffect } from 'react';
import { Chart, PositionedChart } from '../../models/Chart';
import './Dashboard.css';

interface DashboardProps {
  charts: Chart[];
}

const Dashboard: React.FC<DashboardProps> = ({ charts }) => {
  const [positionedCharts, setPositionedCharts] = useState<PositionedChart[]>([]);

  // Calculate chart positions
  useEffect(() => {
    const calculatePositions = () => {
      // Clone charts to avoid modifying originals
      const chartsToPosition = [...charts];
      const positioned: PositionedChart[] = [];

      // For each chart, find the lowest possible Y position
      chartsToPosition.forEach(chart => {
        let posY = 0;
        let valid = false;

        while (!valid) {
          valid = true;

          // Check if current position overlaps with any already positioned chart
          for (const positionedChart of positioned) {
            const horizontalOverlap = 
              chart.posX < (positionedChart.posX + positionedChart.width) && 
              positionedChart.posX < (chart.posX + chart.width);

            const verticalOverlap = 
              posY < (positionedChart.posY + positionedChart.height) && 
              positionedChart.posY < (posY + chart.height);

            if (horizontalOverlap && verticalOverlap) {
              valid = false;
              posY = positionedChart.posY + positionedChart.height;
              break;
            }
          }
        }

        // Add positioned chart to the list
        positioned.push({
          ...chart,
          posY,
          render: chart.render.bind(chart)
        });
      });

      setPositionedCharts(positioned);
    };

    calculatePositions();
  }, [charts]);

  return (
    <div className="dashboard">
      {positionedCharts.map(chart => (
        <div 
          key={chart.id}
          className="dashboard-chart"
          style={{
            gridColumn: `${chart.posX} / span ${chart.width}`,
            gridRow: `${chart.posY + 1} / span ${chart.height}`,
          }}
        >
          {chart.render()}
        </div>
      ))}
    </div>
  );
};

export default Dashboard; 