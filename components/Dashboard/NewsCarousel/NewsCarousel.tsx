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

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'News 1',
    description:
      'Mollit consequat cillum cillum in nulla deserunt aute. In est id esse aliqua excepteur exercitation laborum ea deserunt.',
  },
  { id: '2', title: 'News 2', description: 'Description for news 2' },
  { id: '3', title: 'News 3', description: 'Description for news 3' },
  // Add more news items here
];

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING = 10;

interface NewsCarouselProps {
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

const NewsCarousel = (props: NewsCarouselProps) => {
  const { backgroundColor, titleColor, descriptionColor } = props;
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
