/**
 * Interface representing a threshold for performance metrics.
 */
export interface Threshold {
  condition: string; // The condition to evaluate the metric against.
  title: string; // The title corresponding to the threshold.
  message: string; // The message corresponding to the threshold.
  color?: string; // Optional color associated with the threshold.
}

/**
 * Interface representing a performance metric.
 */
export interface PerformanceMetric {
  name: string; // The name of the performance metric.
  abbreviation: string; // The abbreviation of the performance metric.
  thresholds: Threshold[]; // Array of thresholds for the metric.
}

/**
 * Evaluates the performance metric value against its defined thresholds.
 *
 * @param {PerformanceMetric} metric - The performance metric to evaluate.
 * @param {number} value - The value of the metric to evaluate.
 * @returns {Object} An object containing the title, message, and optional color of the matched threshold.
 */
export function evaluateMetric(metric: PerformanceMetric, value: number) {
  for (const threshold of metric.thresholds) {
    if (eval(`${value} ${threshold.condition}`)) {
      return {
        title: threshold.title,
        message: threshold.message,
        color: threshold.color,
      };
    }
  }
  return {
    title: 'Unknown Score',
    message: 'No matching threshold found.',
  };
}
