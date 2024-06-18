import { PropsWithChildren, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import type { ViewStyle } from 'react-native';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle, duration?: number}>;
type SpringInViewProps = PropsWithChildren<{ style: ViewStyle }>;
type ScaleInViewProps = PropsWithChildren<{ style: ViewStyle, delay?: number}>;


const FadeInView: React.FC<FadeInViewProps> = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const { duration } = props;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration || 1000, // 1 ms default
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
};

const SpringInView: React.FC<SpringInViewProps> = (props) => {
  const springAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(springAnim, {
      toValue: 1,
      tension: 140,
      friction: 1,
      useNativeDriver: true,
    }).start();
  }, [springAnim]);

  return (
    <Animated.View
      style={{ ...props.style, opacity: springAnim }}
    >
      {props.children}
    </Animated.View>
  );
};


const ScaleInView: React.FC<ScaleInViewProps> = (props) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const { delay } = props;
  
  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 130,
      friction: 8,
      delay: delay || 0,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <Animated.View
      style={{ ...props.style, transform: [{ scale: scaleAnim }] }}
    >
      {props.children}
    </Animated.View>
  );
};

export { FadeInView, SpringInView, ScaleInView }