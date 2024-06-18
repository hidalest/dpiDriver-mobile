import { RefObject } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from '@ui-kitten/components';

interface SearchBarProps {
    toggleInput: boolean;
    searchTerm: string;
    searchTermPlaceholder: string;
    setSearchTerm: (term: string) => void;
    searchInputRef: RefObject<Input>;
    setToggleInput: (value: boolean) => void;
}

const SearchBar = (props: SearchBarProps) => (
    props.toggleInput && (
    <View style={{ paddingHorizontal: 20 }}>
      <Input
        value={props.searchTerm}
        onChangeText={props.setSearchTerm}
        placeholder={props.searchTermPlaceholder}
        style={styles.input}
        ref={props.searchInputRef}
        onBlur={() => props.setToggleInput(false)}
      />
    </View>
  )
);

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
    },
});

export default SearchBar;
