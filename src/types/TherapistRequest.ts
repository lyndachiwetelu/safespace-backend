export interface CreateTherapistSetting {
    name: string,
    userId: number,
    ageFrom: number,
    ageTo: number,
    qualifications: string,
    timePerSession: '30' | '60',
    pricePerSession: number,
    religiousTherapy: 'none' | 'muslim' |'christian' |'hindu' | 'buddhist',
    couplesTherapy: boolean,
    media: Array<string>,
    ailments: Array<string>,
    summary: string,
    imageUrl: string,
}