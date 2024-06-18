import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@ui-kitten/components';
import { formatState } from '@/utils/utils';

const FILTERS = {
    ALL: "all",
    IN_PROGRESS: "in progress",
    COMPLETED: "completed",
    PENDING: "pending",
} as const;
  
type FilterKey = keyof typeof FILTERS;

interface FiltersMenuProps {
    filter: string;
    setFilter: (value: string) => void;
}

const FiltersMenu = (props: FiltersMenuProps & { isSticky: boolean }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={[styles.menu, props.isSticky && { borderTopLeftRadius: 0, borderTopRightRadius: 0, shadowColor: "#000", elevation: 8 }]}
    contentContainerStyle={styles.menuContent}
  >
   {Object.keys(FILTERS).map((key) => {
    const filterKey = key as FilterKey; 
    
    return (
      <TouchableOpacity
        key={key}
        style={[
          styles.menuItem,
          props.filter === filterKey.toLowerCase() && styles.activeMenuItem
        ]}
        onPress={() => props.setFilter(filterKey.toLowerCase())}
      >
        <Text style={[props.filter === filterKey.toLowerCase() && styles.activeMenuItemText, { textTransform: 'capitalize' }]}>
          {formatState(FILTERS[filterKey])}
        </Text>
      </TouchableOpacity>
    );
  })}
  </ScrollView>
);

const styles = StyleSheet.create({
    menu: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 50,
        paddingHorizontal: 6,
        paddingVertical: 12,
    },
    menuContent: {
        alignItems: 'center',
        gap: 26,
        marginBottom: 6
    },
    menuItem: {
        paddingVertical: 12,
        paddingHorizontal: 22,
    },
    activeMenuItem: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
    },
    activeMenuItemText: {
        fontWeight: 'bold',    
    },
    inactiveMenuItemText: {
        color: 'gray',
    },
});

export default FiltersMenu;
