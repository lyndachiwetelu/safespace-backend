import { ErrorHandler } from '../error';
import SessionMessageModel from '../models/SessionMessage'
import { getSessionMessage } from '../transformers/Session';
export default class SessionMessageService 
{
    protected sessionMessageModel: typeof SessionMessageModel;

    public constructor() {
        this.sessionMessageModel = SessionMessageModel;
    }

    public async getSessionMessages(id: number) {
        try {
            const messages = await this.sessionMessageModel.findAll({where: {sessionId: id}});
            return messages.map(message => getSessionMessage(message.toJSON()));
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
    }

    public async saveSessionMessage(body: any, id: number) {
        try {
            const message = await this.sessionMessageModel.create({sessionId: id, message: body.message, userId: body.userId});
            return getSessionMessage(message.toJSON());
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
    }

}