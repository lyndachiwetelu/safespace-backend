import { Table, Column, ForeignKey, Model} from 'sequelize-typescript'
import User from './User'

@Table({
    modelName: '"User_Ailment"',
    timestamps: false,
})
export default class UserAilment extends Model {
    @ForeignKey(() => User)
    @Column
    userId!: number

    @Column
    ailmentKey!: string

    public toJSON() {
        return this.get({plain:true})
    }
}