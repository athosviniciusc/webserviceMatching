import * as path from "path";
import * as Hapi from '@hapi/hapi';
import {IServerSettings} from "../../../setting";
import {Sequelize} from "sequelize";
import {MatchingData} from "../data/MatchingData";
import {TabulacaoData} from "../../tabulacao/data/TabulacaoData";
import {GravacaoData} from "../../gravacao/data/GravacaoData";
import {Gravacao} from "../../gravacao/model/Gravacao";
import {Matching} from "../model/Matching";
import {TabulacaoController} from "../../tabulacao/controller/tabulacaoController";

const timer = require('cron');
const CronJob = timer.CronJob;

export class MatchingService {
    private appDir: string = path.dirname(require.main.filename);
    matchingData: MatchingData;
    tabulacaoData: TabulacaoData;
    gravacaoData: GravacaoData;
    private tabulacaoController: TabulacaoController;
    private readonly cron: string;
    private sync: boolean;
    private hierarchy: any;
    private job: any;


    constructor(protected server: Hapi.server, protected  configs: IServerSettings, protected database: Sequelize) {
        this.matchingData = MatchingData.getInstance(server, configs, database);
        this.tabulacaoData = TabulacaoData.getInstance(server, configs, database);
        this.gravacaoData = GravacaoData.getInstance(server, configs, database);
        this.tabulacaoController = TabulacaoController.getInstance(server, configs, database);
        this.sync = false;
        this.hierarchy = null;
        /*        this.cron = '0 0 *!/6 * * *';*/ //em 6 em 6 horas
        this.cron = '*/1 * * * * *'; // 1 min em 1 min
        this.job = new CronJob(this.cron, () => {
            this.processJob();
        });
        this.job.start();
    }

    private async processGravacao(gravacao: Gravacao) {
        try {
            const gravacoMatching: Matching = await this.matchingData.findByIdMatchigGravacao(gravacao.id);
            if (gravacoMatching === null || gravacoMatching === undefined) {
                let tabulacoes = await this.tabulacaoData.findAllByTelefoneGravacao(gravacao.telefone);
                for (const tabulacao of tabulacoes ){
                    const tabulacaoMatching: Matching = await this.matchingData.findByIdMatchigTabulacao(tabulacao.id);
                    if (tabulacaoMatching === null || tabulacaoMatching === undefined) {
                        await this.matchingData.create({'gravacaoId': gravacao.id, 'tabulacaoId': tabulacao.id});
                        return;
                    }
                }
            } else {
                return;
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    private async processJob() {
        console.log('processJOB Started!');
        let gravacoes = await this.gravacaoData.findAllGravacoes();
        for (const gravacao of gravacoes) {
            await this.processGravacao(gravacao);
        }
    }
}

export interface IMatchingService {
}
