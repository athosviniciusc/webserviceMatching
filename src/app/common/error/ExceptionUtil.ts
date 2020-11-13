/**
 *  * Created by Wilton O. Ferreira on 19/05/2020
 */

import * as Hapi from "@hapi/hapi";
import {ListError} from "./ListError";
import {UnauthorizedAccountError} from "./UnauthorizedAccountError";
import {InternalError} from "./InternalError";
import {MessageUtil} from "../util/MessageUtil";
import {ApplicationValidationError} from "./ApplicationValidationError";
import {CashWithdrawalNoHaveCash} from "./CashWithdrawalNoHaveCash";
import {CPFExistError} from "./CPFExistError";
import {CreateError} from "./CreateError";
import {CreateTransactionError} from "./CreateTransactionError";
import {DeleteError} from "./DeleteError";
import {DeleteTransactionError} from "./DeleteTransactionError";
import {ExistError} from "./ExistError";
import {FindError} from "./FindError";
import {InstantTreatmentError} from "./InstantTreatmentError";
import {PasswordNotMatchError} from "./PasswordNotMatchError";
import {UnauthorizedError} from "./UnauthorizedError";
import {UnauthorizedTwoFactorError} from "./UnauthorizedTwoFactorError";
import {UpdateError} from "./UpdateError";
import {UpdateTransactionError} from "./UpdateTransactionError";
import {UsernameExistError} from "./UsernameExistError";
import {NotFoundError} from "./NotFoundError";
import {NotFoundDoctorError} from "./NotFoundDoctorError";


export class ExceptionUtil {
    public static exception(e: any, reply: Hapi.ReplyNoContinue) {
        if (e instanceof ListError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof NotFoundDoctorError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof UnauthorizedAccountError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof ApplicationValidationError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof CashWithdrawalNoHaveCash) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof CPFExistError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof CreateError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof CreateTransactionError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof DeleteError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof DeleteTransactionError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof ExistError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof FindError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof InstantTreatmentError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof ListError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof PasswordNotMatchError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof UnauthorizedError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof UnauthorizedTwoFactorError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof UpdateError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof UpdateTransactionError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof UsernameExistError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else if (e instanceof NotFoundError) {
            return reply.response(e.getError()).code(e.getError().code);
        } else {
            let error = new InternalError(MessageUtil.INTERNAL_SERVER_ERROR);
            return reply.response(error.getError()).code(error.getError().code);
        }
    }
}
