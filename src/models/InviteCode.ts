import { Table, Column, Model } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'

@Table({
    modelName: 'Invite_Code',
})
export default class InviteCode extends Model {
    @Column(DataTypes.STRING)
    code!: string

    public toJSON() {
        return this.get({plain:true})
    }

}