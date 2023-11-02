export interface DataProps {
    id: number
    image: string
    name: string
    position: string
    phoneNumber: string
}
export interface Contact {
    content: string
    contentData: DataProps[]
}
export const contacts: Contact[] = [
    {
        content: 'Phòng kỹ thuật',
        contentData: [
            {
                id: 1,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiu',
                position: 'Trưởng phòng IT',
                phoneNumber: '0797151033'
            },
            {
                id: 2,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT',
                phoneNumber: '0797151033'
            },
            {
                id: 3,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT',
                phoneNumber: '0797151033'
            },
        ],
    },
    {
        content: 'Phòng hành chính',
        contentData: [
            {
                id: 1,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT',
                phoneNumber: '0797151033'
            },
            {
                id: 2,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT',
                phoneNumber: '0797151033'
            },
            {
                id: 3,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT',
                phoneNumber: '0797151033'
            },
        ],
    }
]
