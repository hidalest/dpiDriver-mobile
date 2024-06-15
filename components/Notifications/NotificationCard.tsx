// NotificationCard.tsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

interface NotificationCardProps {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: string;
  onDelete: (id: string) => void;
  onMarkAsRead: (id: string) => void;
}

const NotificationCard = ({
  id,
  title,
  message,
  time,
  icon,
  onDelete,
  onMarkAsRead,
}: NotificationCardProps) => {
  return (
    <View style={styles.rowFront}>
      <TouchableOpacity onPress={() => onMarkAsRead(id)} style={styles.card}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  message: {
    color: '#555',
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
});

export default NotificationCard;
