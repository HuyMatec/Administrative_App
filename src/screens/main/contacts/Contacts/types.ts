export interface DataProps {
    id: number
    image: string
    name: string
    position: string
}
export interface Contact {
    content: string
    contentdata: DataProps[]
}
export const contacts: Contact[] = [
    {
        content: 'Phòng kỹ thuật',
        contentdata: [
            {
                id: 1,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT'
            },
            {
                id: 2,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT'
            },
            {
                id: 3,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT'
            },
        ],
    },
    {
        content: 'Phòng hành chính',
        contentdata: [
            {
                id: 1,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT'
            },
            {
                id: 2,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT'
            },
            {
                id: 3,
                image: 'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
                name: 'Nguyễn Trung Hiếu',
                position: 'Trưởng phòng IT'
            },
        ],
    }
]