import { Sequelize, Op } from "sequelize";


export class QueryUtil {
    private static LIKE: string = 'like';
    private static NOT_LIKE: string = 'notLike';
    private static IN: string = 'in';
    private static NOT_IN: string = 'notIn';
    private static GT: string = 'gt';
    private static GTE: string = 'gte';
    private static LT: string = 'lt';
    private static LTE: string = 'lte';
    private static EQ: string = 'eq';
    private static NE: string = 'ne';
    private static IS: string = 'is';
    private static NOT: string = 'not';
    private static OR: string = 'or';
    private static BETWEEN: string = 'between';
    private static BETWEEN_DATE: string = 'between';
    private static NOT_BETWEEN: string = 'notBetween';
    private static STARTS_WITH: string = 'startsWith';
    private static ENDS_WITH: string = 'endsWith';
    private static ANY: string = 'any';


    public static async whereBuilder(filters: IFilter[]) {
        let filtersWHERE = {};

        if (filters === null || filters === undefined) {
            return filtersWHERE;
        }

        for (const item of filters) {
            if ( item.fieldValue !== undefined && item.fieldValue !== null && item.fieldValue.length > 0) {
                switch (item.matchMode) {
                    case QueryUtil.LIKE:
                        if (item.fieldValue[0] !== '') {
                            filtersWHERE[item.fieldName] = {[Op.like]: '%' + item.fieldValue[0] + '%'};
                        }
                        break;
                    case QueryUtil.NOT_LIKE:
                        if (item.fieldValue[0] !== '') {
                            filtersWHERE[item.fieldName] = {[Op.notLike]: '%' + item.fieldValue[0] + '%'};
                        }
                        break;
                    case QueryUtil.EQ:
                        filtersWHERE[item.fieldName] = {[Op.eq]: item.fieldValue};
                        break;
                    case QueryUtil.GT:
                        filtersWHERE[item.fieldName] = {[Op.gt]: item.fieldValue};
                        break;
                    case QueryUtil.GTE:
                        filtersWHERE[item.fieldName] = {[Op.gte]: item.fieldValue};
                        break;
                    case QueryUtil.LT:
                        filtersWHERE[item.fieldName] = {[Op.lt]: item.fieldValue};
                        break;
                    case QueryUtil.LTE:
                        filtersWHERE[item.fieldName] = {[Op.lte]: item.fieldValue};
                        break;
                    case QueryUtil.NE:
                        filtersWHERE[item.fieldName] = {[Op.ne]: item.fieldValue};
                        break;
                    case QueryUtil.IS:
                        filtersWHERE[item.fieldName] = {[Op.is]: item.fieldValue};
                        break;
                    case QueryUtil.IN:
                        filtersWHERE[item.fieldName] = {[Op.in]: item.fieldValue};
                        break;
                    case QueryUtil.NOT_IN:
                        filtersWHERE[item.fieldName] = {[Op.notIn]: item.fieldValue};
                        break;
                    case QueryUtil.BETWEEN:
                        filtersWHERE[item.fieldName] = {[Op.between]: item.fieldValue};
                        break;
                    case QueryUtil.NOT_BETWEEN:
                        filtersWHERE[item.fieldName] = {[Op.notBetween]: item.fieldValue};
                        break;
                }
            }
        }
        return filtersWHERE;
    }


    public static async includeBuilder(includes: IInclude[], database: Sequelize) {
        let includesWHERE = [];

        for (const item of includes) {
            let node = {};
            node['attributes'] = item.attributes;
            node['model'] = database.models[item.model];
            node['as'] = item.as;
            if (item.through) {
                node['through'] = {
                    attributes: []
                };
            }
            if (item.include !== undefined && item.filters !== null && item.include.length > 0) {
                node['where'] = await QueryUtil.whereBuilder(item.filters);
            }
            if (item.include !== undefined && item.include !== null && item.include.length > 0) {
                node['include'] = await this.includeBuilder(item.include, database);
            }
            includesWHERE.push(node);
        }
        return includesWHERE;
    }

    public static async ordersBuilder(orders: IOrder[]) {
        if (orders.length <= 0) { return []; }

        let ordersWHERE = [];
        console.log('orders mount: ', orders);

        for (const item of orders) {
            console.log(item.field, item.value.includes('DESC') ? 'DESC' : 'ASC');
            let node = [];
            node.push(item.field);
            node.push(item.value.includes('DESC') ? 'DESC' : 'ASC');
            ordersWHERE.push(node);
        }
        console.log(ordersWHERE);
        return ordersWHERE;
    }
}

export interface IFilter {
    fieldName: string;
    fieldValue: any[];
    matchMode: string;
}

export interface IOrder {
    field: string;
    value: string;
}

export interface ISearch {
    field: string;
    value: string;
}

export interface IInclude {
    attributes: string[];
    model: string;
    as: string;
    through: boolean;
    throughField: string;
    throughRequired: boolean;
    required: boolean;
    include: IInclude[];
    filters: IFilter[];
}
