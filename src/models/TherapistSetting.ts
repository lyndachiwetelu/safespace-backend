import { Table, Column, ForeignKey, Model, BelongsTo } from 'sequelize-typescript'
import User from './User'

@Table({
    modelName: '"Therapist_Setting"',
    timestamps: false,
})
export default class TherapySetting extends Model {
    @ForeignKey(() => User)
    @Column
    userId!: number

    @Column
    ageFrom!: number

    @Column
    ageTo!: number

    @Column
    qualifications!: string

    @Column
    timePerSession!: '30' | '60'

    @Column
    pricePerSession!: number

    @Column
    religiousTherapy!: 'none' | 'muslim' |'christian' |'hindu' | 'buddhist'

    @Column
    couplesTherapy!: boolean


    @Column
    summary!: string

    @Column
    imageUrl!: string

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}