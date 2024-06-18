import { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView, LayoutChangeEvent } from 'react-native'
import { Layout, Input,  } from '@ui-kitten/components'
import { TrainingPageProps } from './Interface';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RadialProgressCard from './components/RadialProgressBar';
import FiltersMenu from './components/FiltersMenu';
import TrainingsList from './components/TrainingsList';

const Trainings = (props: TrainingPageProps) => {
  const { trainings, 
          headerText, 
          searchTermPlaceholder, 
          emoji, 
          noTrainingsText } = props

  const [toggleInput, setToggleInput] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all')
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [filteredTrainings, setFilteredTrainings] = useState(trainings);

  const searchInputRef = useRef<Input | null>(null); 
  const filtersMenuPosition = useRef<number>(0);

  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setIsSticky(yOffset > filtersMenuPosition.current);
  };

  const handleToggleInput = (): void => {
    setToggleInput(prev => {
      if (!prev) {
        setTimeout(() => {
          if (searchInputRef.current) {
            searchInputRef.current.focus();
          }
        }, 100); 
      }
      return !prev;
    });
  }

  const handleLayout = (event: LayoutChangeEvent) => {
    filtersMenuPosition.current = event.nativeEvent.layout.y;
  };

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTrainings(trainings);
    } else {
      setFilteredTrainings(trainings.filter((training) => training.state === filter));
    }
  }, [filter]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredTrainings(trainings);
    } else {
      setFilteredTrainings(trainings.filter((training) =>
        training.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
  }, [searchTerm]);

  return (
    <Layout style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        onScroll={handleScroll}
        scrollEventThrottle={18}
        stickyHeaderIndices={[3]} // When the third child component reaches the top of the screen, make it 'sticky'
      >
        <Header toggleInput={toggleInput} handleToggleInput={handleToggleInput} headerText={headerText}/>
        <SearchBar 
          toggleInput={toggleInput} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          searchInputRef={searchInputRef} 
          setToggleInput={setToggleInput} 
          searchTermPlaceholder={searchTermPlaceholder} />
        <RadialProgressCard toggleInput={toggleInput}/>     
        <View onLayout={handleLayout}>
          <FiltersMenu filter={filter} setFilter={setFilter} isSticky={isSticky}/>
        </View>
        <TrainingsList trainings={filteredTrainings} noTrainingsText={noTrainingsText} emoji={emoji} />
      </ScrollView>
    </Layout>
  )
}

export const styles = StyleSheet.create({
    container: {      
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
      backgroundColor: 'trasparent'
    },
    horizontalPadding: {
      paddingHorizontal: 20
    },
});

export default Trainings