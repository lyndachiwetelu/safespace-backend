import { ErrorHandler } from '../error'
import InviteCodeModel from '../models/InviteCode'
import { getInviteData } from '../transformers/InviteCode'

export default class InviteCodeService 
{
    protected inviteModel: typeof InviteCodeModel

    public constructor()
    {
        this.inviteModel = InviteCodeModel
    }

    public async createCode(code: string): Promise<any> {
        try {
            const createdCode = await this.inviteModel.create({code})
            const dataToReturn = getInviteData(createdCode.toJSON())
            return dataToReturn
        } catch (err) {
            throw new ErrorHandler(500, 'Internal server error while creating invite code')
        }
    }

    public async codeExists(code: string): Promise<boolean | any> {

        try {
            const  codeExists = await this.inviteModel.findOne({ where : {code} })
            if (codeExists) {
                return codeExists
            }

            return false
        } catch(err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
         
    }

}