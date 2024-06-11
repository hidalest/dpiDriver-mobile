import * as React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

/**
 * Props for the RadialProgress component.
 */
interface RadialProgressProps {
  /** Percentage of the progress to be displayed (0-100). */
  percentage: number;
  /** Size of the progress circle (default: 100). */
  size?: number;
  /** Width of the stroke (default: 10). */
  strokeWidth?: number;
  /** Color of the progress stroke (default: 'blue'). */
  color?: string;
  /** Color of the background stroke (default: '#e6e6e6'). */
  backgroundColor?: string;
  /** Additional styles for the container. */
  style?: ViewStyle;
}

/**
 * RadialProgress component displays a circular progress indicator.
 *
 * @component
 * @example
 * return (
 *   <RadialProgress
 *     percentage={75}
 *     size={120}
 *     strokeWidth={15}
 *     color="green"
 *     backgroundColor="#ccc"
 *     style={{ margin: 20 }}
 *   />
 * )
 *
 * @param {RadialProgressProps} props - The props for the RadialProgress component.
 * @param {number} props.percentage - Percentage of the progress to be displayed (0-100).
 * @param {number} [props.size=100] - Size of the progress circle.
 * @param {number} [props.strokeWidth=10] - Width of the stroke.
 * @param {string} [props.color='blue'] - Color of the progress stroke.
 * @param {string} [props.backgroundColor='#e6e6e6'] - Color of the background stroke.
 * @param {ViewStyle} [props.style] - Additional styles for the container.
 */
const RadialProgress = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  color = 'blue',
  backgroundColor = '#e6e6e6',
  style,
}: RadialProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Svg height={size} width={size}>
        <Circle
          stroke={backgroundColor}
          fill='none'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill='none'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap='round'
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${percentage}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RadialProgress;
