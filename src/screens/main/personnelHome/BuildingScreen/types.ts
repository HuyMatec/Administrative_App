
export interface buildingProps {
    id: string;
    name: string;
    rooms: string;
}
export interface floorProps {
    id: string;
    room: string;
}
export const data: buildingProps[] = [
    {
        id: '1',
        name: 'Tầng 1',
        rooms: '5 phòng',
    },
    {
        id: '2',
        name: 'Tầng 2',
        rooms: '5 phòng',
    },
    {
        id: '3',
        name: 'Tầng 3',
        rooms: '5 phòng',
    },
    {
        id: '4',
        name: 'Tầng 4',
        rooms: '5 phòng',
    }
]
export const dataFloor: floorProps[] = [
    {
        id: '1',
        room: 'F001',
    },
    {
        id: '2',
        room: 'F002',
    },
    {
        id: '3',
        room: 'F003',
    },
    {
        id: '4',
        room: 'F004',
    },
    {
        id: '5',
        room: 'F005',
    },
    {
        id: '6',
        room: 'F006',
    },
    {
        id: '7',
        room: 'F007',
    },
    {
        id: '8',
        room: 'F008',
    },
    {
        id: '9',
        room: 'F009',
    },
    {
        id: '10',
        room: 'F010',
    },
]