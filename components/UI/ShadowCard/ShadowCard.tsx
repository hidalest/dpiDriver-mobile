import { Card } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface ShadowCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

function ShadowCard(props: ShadowCardProps) {
  const { children, style } = props;
  return <Card style={[styles.container, style]}>{children}</Card>;
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 0,
    borderRadius: 10,
  },
});

export default ShadowCard;
