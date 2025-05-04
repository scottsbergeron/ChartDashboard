import React from 'react';
import { Chart, ChartProps } from '../../models/Chart';
import './Chart.css';

interface TimeSeriesChartAttributes {
  showGrid: boolean;
  lineColor: string;
}

export class TimeSeriesChart extends Chart {
  attributes: TimeSeriesChartAttributes;

  constructor(props: ChartProps) {
    super(props);
    this.attributes = props.attributes as TimeSeriesChartAttributes;
  }

  render(): JSX.Element {
    return (
      <div className="chart time-series-chart">
        <div className="chart-header">
          <h3>{this.title}</h3>
        </div>
        <div className="chart-content">
          <div className="chart-placeholder">
            <p>Time Series Chart</p>
            <p>Show Grid: {this.attributes.showGrid ? 'Yes' : 'No'}</p>
            <p>Line Color: <span style={{ color: this.attributes.lineColor }}>{this.attributes.lineColor}</span></p>
            <p>Dimensions: {this.dataRequest.dimensions.join(', ')}</p>
            <p>Metrics: {this.dataRequest.metrics.join(', ')}</p>
          </div>
        </div>
      </div>
    );
  }
} 