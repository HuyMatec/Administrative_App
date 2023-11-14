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
    time: '12:00',
    title: 'Yêu cầu đã hoàn thành',
    description: '10:00 am',
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
];
