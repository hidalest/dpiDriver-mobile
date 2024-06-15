// NewsCarousel.tsx
import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import ShadowCard from '@/components/UI/ShadowCard/ShadowCard';

interface NewsItem {
  id: string;
  title: string;
  description: string;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING = 10;

interface NewsCarouselProps {
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  newsData: NewsItem[];
}

const NewsCarousel = (props: NewsCarouselProps) => {
  const { backgroundColor, titleColor, descriptionColor, newsData } = props;
  const renderItem = ({ item }: { item: NewsItem }) => (
    <ShadowCard
      // @ts-ignore
      style={[
        styles.card,
        { backgroundColor: backgroundColor ? backgroundColor : 'white' },
      ]}
    >
      <Text category='h5' style={[styles.cardTitle, { color: titleColor }]}>
        {item.title}
      </Text>
      <Text category='s1' style={{ color: descriptionColor }}>
        {item.description}
      </Text>
    </ShadowCard>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        snapToAlignment='center'
        decelerationRate='fast'
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    marginVertical: 10,
    backgroundColor: 'red',
  },
  cardTitle: {
    marginBottom: 10,
  },
});

export default NewsCarousel;
