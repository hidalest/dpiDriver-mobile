// NotificationList.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RowMap, SwipeListView } from 'react-native-swipe-list-view';
import NotificationCard from './NotificationCard';
import { timeSince } from '@/utils/timeUntil';
import {
  GestureHandlerRootView,
  RectButton,
} from 'react-native-gesture-handler';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: string;
}

interface NotificationListProps {
  notifications: Notification[];
  handleDelete: (id: string) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  handleDelete,
}) => {
  const handleMarkAsRead = (id: string) => {
    console.log(`Notification ${id} marked as read`);
  };

  const renderItem = ({ item }: { item: Notification }) => (
    <NotificationCard
      id={item.id}
      title={item.title}
      message={item.message}
      time={timeSince(new Date(item.time))}
      icon={item.icon}
      onDelete={() => handleDelete(item.id)}
      onMarkAsRead={handleMarkAsRead}
    />
  );

  const renderHiddenItem = (
    { item }: { item: Notification },
    rowMap: RowMap<Notification>
  ) => (
    <View style={styles.rowBack}>
      <RectButton
        style={styles.backRightBtn}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={styles.backTextWhite}>Erase</Text>
      </RectButton>
    </View>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      {notifications.length !== 0 && (
        <SwipeListView
          data={notifications}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          disableRightSwipe
        />
      )}
      {notifications.length === 0 && <Text>No new Notifications...</Text>}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DD2C00',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    height: '100%',
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    right: 0,
    borderRadius: 10,
  },
  backTextWhite: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default NotificationList;
