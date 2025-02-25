import { View, Text, StyleSheet, ScrollView, Pressable, Picker, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

const PracticeRoomReservation = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>연습실 예약하기</Text>
      <Text style={styles.subTitle}>제1예술관</Text>

      {/* Reservation Guidelines & Announcements */}
      <View style={styles.menuContainer}>
        <Pressable style={styles.menuButton}><Text style={styles.menuText}>연습실 예약 주의사항</Text></Pressable>
        <Pressable style={styles.menuButton}><Text style={styles.menuText}>예약하기</Text></Pressable>
        <Pressable style={styles.menuButton}><Text style={styles.menuText}>공지사항</Text></Pressable>
      </View>

      <Text style={styles.dateText}>2025년 1월 21일</Text>

      {/* Dropdown for Available Reservations */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>연습실</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="연습실1 (예약 가능 : 5타임 남음)" value="room1" />
          <Picker.Item label="연습실2 (예약 가능 : 2타임 남음)" value="room2" />
          <Picker.Item label="연습실3 (예약 가능 : 3타임 남음)" value="room3" />
          <Picker.Item label="연습실4 (예약 가능 : 1타임 남음)" value="room4" />
          <Picker.Item label="연습실5 (예약불가)" value="room5" />
        </Picker>
      </View>

      {/* Available Time Slots */}
      <Text style={styles.sectionTitle}>예약 가능 시간:</Text>
      <View style={styles.timeSlotContainer}>
        <Pressable style={styles.timeSlot}><Text style={styles.timeSlotText}>15:20 ~ 16:10</Text></Pressable>
        <Pressable style={styles.timeSlot}><Text style={styles.timeSlotText}>16:20 ~ 17:10</Text></Pressable>
      </View>

      {/* Reservation Status */}
      <Text style={styles.sectionTitle}>예약 완료:</Text>
      <Text style={styles.reservationText}>제1예술관, 연습실 5</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F5F5F5', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subTitle: { fontSize: 18, textAlign: 'center', color: '#777' },
  menuContainer: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginVertical: 20, gap: 8 },
  menuButton: { 
    backgroundColor: '#FFFFFF', 
    padding: 6, 
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'violet',
    minWidth: width * 0.22,
    alignItems: 'center',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2
  },
  menuText: { fontSize: 13, color: '#444' },
  dateText: { fontSize: 16, textAlign: 'center', marginBottom: 10, color: 'gray' },
  dropdownContainer: { marginVertical: 10, paddingHorizontal: 20, width: width * 0.85 },
  dropdownLabel: { fontSize: 16, fontWeight: 'bold', color: 'red', marginBottom: 5 },
  picker: { height: 40, backgroundColor: '#FFF', borderRadius: 5, borderWidth: 1, borderColor: '#CCC', width: '100%' },
  roomList: { padding: 10, backgroundColor: '#FFF', borderRadius: 5 },
  roomItem: { fontSize: 16, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#DDD' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  timeSlotContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8 },
  timeSlot: { backgroundColor: '#DFF0D8', padding: 8, borderRadius: 5, minWidth: width * 0.3, alignItems: 'center' },
  timeSlotText: { fontSize: 13, color: '#333' },
  reservationText: { fontSize: 16, color: '#444', textAlign: 'center' }
});

export default PracticeRoomReservation;
