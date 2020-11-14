import {Column, DataType, Table} from "sequelize-typescript";
import {AbstractModel, IAbstractModel} from '../../../common/model/AbstractModel';

@Table({tableName:'tabulacoes', modelName: 'Tabulacao'})
export class Tabulacao extends AbstractModel<Tabulacao> implements  ITabulacao {

    @Column({allowNull: false, field: 'nome_cliente', type: DataType.TEXT})
    nomeCliente: string;

    @Column({allowNull: false, field: 'protocolo'})
    protocolo: string;

    @Column({allowNull: false, field: 'data_atendimento'})
    dataAtendimento: Date;

    @Column({allowNull: false, field: 'numero_binado'})
    numeroBinado: string;

    @Column({allowNull: false, field: 'numero_acesso'})
    numeroAcesso: string;

}

export interface ITabulacao extends  IAbstractModel {
    nomeCliente: string;
    protocolo: string;
    dataAtendimento: Date;
    numeroBinado: string;
    numeroAcesso: string;
}
