// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { DataRequest } from './DataRequest';

export interface ChartProps {
  id: string;
  title: string;
  width: number;
  height: number;
  posX: number;
  dataRequest: DataRequest;
  attributes: Record<string, any>;
}

// Changed to make PositionedChart a type that combines Chart properties with a required posY
export type PositionedChart = Chart & {
  posY: number;
}

export abstract class Chart {
  id: string;
  title: string;
  width: number;
  height: number;
  posX: number;
  posY?: number;
  dataRequest: DataRequest;
  attributes: Record<string, any>;

  constructor(props: ChartProps) {
    this.id = props.id;
    this.title = props.title;
    this.width = props.width;
    this.height = props.height;
    this.posX = props.posX;
    this.dataRequest = props.dataRequest;
    this.attributes = props.attributes;

    // Validate chart width and position
    if (this.posX < 1 || this.posX > 12) {
      throw new Error('Chart posX must be between 1 and 12');
    }

    if (this.width < 1 || this.posX + this.width - 1 > 12) {
      throw new Error('Chart width must be at least 1 and must not exceed grid boundaries');
    }

    if (this.height < 1) {
      throw new Error('Chart height must be at least 1');
    }
  }

  abstract render(): JSX.Element;
} 