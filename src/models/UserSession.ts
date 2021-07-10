import { Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import User from './User'
import UserAvailability from './UserAvailability'
import { DataTypes } from 'sequelize'

@Table({
    modelName: '"User_Session"'
})
export default class UserSession extends Model {
    @ForeignKey(() => User)
    @Column(DataTypes.NUMBER)
    requestedBy!: number

    @ForeignKey(() => User)
    @Column(DataTypes.NUMBER)
    therapist!: number

    @ForeignKey(() => UserAvailability)
    @Column(DataTypes.NUMBER)
    availabilityId!: number

    @Column(DataTypes.DATEONLY)
    day!: Date

    @Column(DataTypes.STRING)
    from!: string

    @Column(DataTypes.STRING)
    to!: string

    @Column(DataTypes.STRING)
    status!: 'created' | 'confirmed' | 'past' | 'active' | 'cancelled'

    @BelongsTo(() => User, 'requestedBy')
    user!: User

    @BelongsTo(() => User, 'therapist')
    therapistInfo!: User

    public toJSON() {
        return this.get({plain:true})
    }

}