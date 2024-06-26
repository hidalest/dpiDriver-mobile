import { ViewStyle } from 'react-native';

interface Threshold {
  condition: string;
  title: string;
  message: string;
  color?: string;
}

interface PerformanceMetric {
  name: string;
  abbreviation: string;
  thresholds: Threshold[];
}

export interface PerformanceScoreProps {
  mainTitle: string;
  progressScore: number;
  style?: ViewStyle;
  performanceGrading: PerformanceMetric[];
}
