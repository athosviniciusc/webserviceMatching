/**
 * Created by wilton on 18/03/2019.
 */
import { Sequelize } from 'sequelize-typescript';
import * as path from 'path';
import * as settings from "../setting";
import * as fs from "fs";

var appDir = path.dirname(require.main.filename);



var Paths = new Array();
fs.readdirSync(path.resolve(`${appDir}/app`)).forEach( folder => {
    Paths.push(path.resolve(`${appDir}/app/${folder}/model/`));
});

const databaseInfo = settings.getDatabase(process.env.NODE_ENV);

// @ts-ignore
export const sequelize =  new Sequelize({
    database: databaseInfo.database,
    dialect: databaseInfo.dialect,
    username: databaseInfo.username,
    password: databaseInfo.password,
    host: databaseInfo.host,
    operatorsAliases: 0,
    logging: true,
    pool: {
        handleDisconnects: true,
        max: 13,
        min: 1,
        idle: 10000,
        acquire: 20000 // i also tried 50000
    },
    modelPaths: Paths
});
