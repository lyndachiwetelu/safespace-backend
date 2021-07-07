import { Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import User from './User'
import UserAvailability from './UserAvailability'

@Table({
    modelName: '"User_Session"'
})
export default class UserSession extends Model {
    @ForeignKey(() => User)
    @Column
    requestedBy!: number

    @ForeignKey(() => User)
    @Column
    therapist!: number

    @ForeignKey(() => UserAvailability)
    @Column
    availabilityId!: number

    @Column
    day!: Date

    @Column
    from!: string

    @Column
    to!: string

    @Column
    status!: 'created' | 'confirmed' | 'past' | 'active' | 'cancelled'

    @BelongsTo(() => User, 'requestedBy')
    user!: User

    @BelongsTo(() => User, 'therapist')
    therapistInfo!: User

    public toJSON() {
        return this.get({plain:true})
    }

}