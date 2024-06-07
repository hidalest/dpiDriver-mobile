import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

interface RadialProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
}

const RadialProgress = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  color = 'blue',
  backgroundColor = '#e6e6e6',
}: RadialProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
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
