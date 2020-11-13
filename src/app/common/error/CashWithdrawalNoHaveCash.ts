/**
 *  * Created by Wilton O. Ferreira on 28/07/2020
 */

import {IBaseError} from "./BaseError";

export class CashWithdrawalNoHaveCash extends Error implements IBaseError {
    constructor (public message: string, public description?: string) {
        super(message);
        Object.setPrototypeOf(this, CashWithdrawalNoHaveCash.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 200,
            description: this.description || 'Não há saldo para saque!'
        };
    }
}
