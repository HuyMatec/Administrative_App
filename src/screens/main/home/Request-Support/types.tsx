import {Icon} from '@rneui/themed';

export const data = [
  {
    time: '09:00',
    title: 'Yêu cầu xử lý',
    description: '09:25 am',
    icon: (
      <Icon
        name="checkmark"
        type="ionicon"
        color="#FFFF"
        size={39}
        style={{backgroundColor: '#2D5381', borderRadius: 100}}
      />
    ),
  },
  {
    time: '10:45',
    title: 'Yêu cầu đã được tiếp nhận',
    description: '__:__ am',
    icon: (
      <Icon
        name="refresh"
        type="ionicon"
        color="#2D5381"
        size={39}
        style={{
          backgroundColor: '#FFFF',
          borderWidth: 1,
          borderColor: '#e6e6e6e6',
          borderRadius: 100,
          transform: [{rotateY: '180deg'}],
        }}
      />
    ),
  },
  {
    time: '12:00',
    title: 'Yêu cầu đã hoàn thành',
    description: '__:__ am',
    icon: (
      <Icon
        name="refresh"
        type="ionicon"
        color="#2D5381"
        size={39}
        style={{
          backgroundColor: '#FFFF',
          borderWidth: 1,
          borderColor: '#e6e6e6e6',
          borderRadius: 100,
          transform: [{rotateY: '180deg'}],
        }}
      />
    ),
  },
];
