import { Table, Column, ForeignKey, Model, BelongsTo } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import User from './User'

@Table({
    modelName: '"Therapist_Setting"',
    timestamps: false,
})
export default class TherapistSetting extends Model {
    @ForeignKey(() => User)
    @Column(DataTypes.NUMBER)
    userId!: number

    @Column(DataTypes.NUMBER)
    ageFrom!: number

    @Column(DataTypes.NUMBER)
    ageTo!: number

    @Column(DataTypes.STRING)
    qualifications!: string

    @Column(DataTypes.STRING)
    timePerSession!: '30' | '60'

    @Column(DataTypes.NUMBER)
    pricePerSession!: number

    @Column(DataTypes.STRING)
    religiousTherapy!: 'none' | 'muslim' |'christian' |'hindu' | 'buddhist'

    @Column(DataTypes.BOOLEAN)
    couplesTherapy!: boolean


    @Column(DataTypes.STRING)
    summary!: string

    @Column(DataTypes.STRING)
    imageUrl!: string

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}