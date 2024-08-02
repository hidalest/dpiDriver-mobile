import * as React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

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
  value: number;
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
  value,
}: RadialProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Svg height={size} width={size}>
        <Defs>
          <LinearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <Stop offset='0%' stopColor={color} stopOpacity='1' />
            <Stop offset='100%' stopColor={color} stopOpacity='0.6' />
          </LinearGradient>
        </Defs>
        <Circle
          stroke={backgroundColor}
          fill='none'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke='url(#grad)'
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
        <Text style={styles.text}>{`${value}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default RadialProgress;
