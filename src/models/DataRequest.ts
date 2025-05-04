export interface Filter {
  field: string;
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan' | 'between';
  value: string | number | [number, number];
}

export interface DataRequest {
  dimensions: string[];
  metrics: string[];
  filters: Filter[];
} 