// Notifications.tsx
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
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

// TODO: This is just an example, this needs to be replaced when we fetch the notifications
const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'Anna',
    message: 'Message: You wanna come with me?',
    time: '2024-06-15T14:30:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '2',
    title: 'Twitter',
    message:
      'It is important that everyones finish all the training by this friday.',
    time: '2024-06-15T14:15:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '3',
    title: 'Newsletter',
    message:
      'Email: "We have an incredible discount on the new adidas Falcon sneakers..."',
    time: '2024-06-15T14:10:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '4',
    title: 'Anna',
    message: 'Message: You wanna come with me?',
    time: '2024-06-15T14:30:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '5',
    title: 'Twitter',
    message: 'Notification: @fpl_ & @silv6 indicated that they like your Tweet',
    time: '2024-06-15T14:15:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '6',
    title: 'Newsletter',
    message:
      'Email: "We have an incredible discount on the new adidas Falcon sneakers..."',
    time: '2024-06-15T14:10:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '7',
    title: 'Anna',
    message: 'Message: You wanna come with me?',
    time: '2024-06-15T14:30:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '8',
    title: 'Twitter',
    message: 'Notification: @fpl_ & @silv6 indicated that they like your Tweet',
    time: '2024-06-15T14:15:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '9',
    title: 'Newsletter',
    message:
      'Email: "We have an incredible discount on the new adidas Falcon sneakers..."',
    time: '2024-06-15T14:10:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '10',
    title: 'Anna',
    message: 'Message: You wanna come with me?',
    time: '2024-06-15T14:30:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '11',
    title: 'Twitter',
    message: 'Notification: @fpl_ & @silv6 indicated that they like your Tweet',
    time: '2024-06-15T14:15:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '12',
    title: 'Newsletter',
    message:
      'Email: "We have an incredible discount on the new adidas Falcon sneakers..."',
    time: '2024-06-15T14:10:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '13',
    title: 'Anna',
    message: 'Message: You wanna come with me?',
    time: '2024-06-15T14:30:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '14',
    title: 'Twitter',
    message: 'Notification: @fpl_ & @silv6 indicated that they like your Tweet',
    time: '2024-06-15T14:15:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
  {
    id: '15',
    title: 'Newsletter',
    message:
      'Email: "We have an incredible discount on the new adidas Falcon sneakers..."',
    time: '2024-06-15T14:10:00Z', // ISO 8601 format
    icon: 'https://placekitten.com/40/40',
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDelete = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

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
      onDelete={handleDelete}
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
      <SwipeListView
        data={notifications}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        disableRightSwipe
      />
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

export default Notifications;
