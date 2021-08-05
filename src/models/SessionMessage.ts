import { Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import Session from './UserSession'
import { DataTypes } from 'sequelize'
import User from './User'

@Table({
    modelName: 'Session_Message'
})
export default class SessionMessage extends Model {
    @ForeignKey(() => Session)
    @Column(DataTypes.NUMBER)
    sessionId!: number

    @ForeignKey(() => User)
    @Column(DataTypes.NUMBER)
    userId!: number

    @Column(DataTypes.TEXT)
    message!: string

    @BelongsTo(() => Session)
    session!: Session

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}