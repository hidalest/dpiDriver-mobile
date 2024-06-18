import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface HeaderProps {
  headerText: string;
  toggleInput: boolean;
  handleToggleInput: () => void;
}

const Header = (props: HeaderProps) => (
  <View style={styles.header}>
    <Text category='h4'>{props.headerText}</Text>
    <Ionicons
      name={props.toggleInput ? 'search-circle-sharp' : 'search-circle-outline'}
      size={34}
      color={Colors.dark.icon}
      onPress={props.handleToggleInput}
    />
  </View>
);

const styles = StyleSheet.create({
    header: {
      marginVertical: 26,
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
});

export default Header;
