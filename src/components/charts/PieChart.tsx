import React from 'react';
import { Chart, ChartProps } from '../../models/Chart';
import './Chart.css';

interface PieChartAttributes {
  showLegend: boolean;
  donut: boolean;
}

export class PieChart extends Chart {
  attributes: PieChartAttributes;

  constructor(props: ChartProps) {
    super(props);
    this.attributes = props.attributes as PieChartAttributes;
  }

  render(): JSX.Element {
    return (
      <div className="chart pie-chart">
        <div className="chart-header">
          <h3>{this.title}</h3>
        </div>
        <div className="chart-content">
          <div className="chart-placeholder">
            <p>Pie Chart</p>
            <p>Show Legend: {this.attributes.showLegend ? 'Yes' : 'No'}</p>
            <p>Donut: {this.attributes.donut ? 'Yes' : 'No'}</p>
            <p>Dimensions: {this.dataRequest.dimensions.join(', ')}</p>
            <p>Metrics: {this.dataRequest.metrics.join(', ')}</p>
          </div>
        </div>
      </div>
    );
  }
} 