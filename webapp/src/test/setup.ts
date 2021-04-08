import {testSettings} from '../appsettings';
import {dbCreateConnection} from '../db/createConnection';
import { Connection, getRepository, getConnection } from 'typeorm';
import request  from 'supertest';
import * as core from 'express-serve-static-core';

let connection: Connection;

declare global{
    namespace NodeJS{
        interface Global {
            connection;
        }
    }
}

const getEntities = async(connection: Connection)=>{
    const entities = [];
    (await (connection).entityMetadatas).forEach(
      x => entities.push({name: x.name, tableName: x.tableName})
    );
    return entities;
}
const cleanAll = async(connection: Connection)=>{
    const entities = await getEntities(connection);
    try {
        for (const entity of entities.sort((a, b) => b.order - a.order)) {
          const repository = await connection.getRepository(entity.name);
          await repository.query(`DELETE FROM ${entity.tableName};`);
          // Reset IDs
        }
      } catch (error) {
        throw new Error(`ERROR: Cleaning test db: ${error}`);
      }
}

let db: any;
beforeAll(async()=>{
    await dbCreateConnection(testSettings.dbConfig);
    const mainConnection = getConnection();
    await mainConnection.runMigrations();
});

beforeEach(async()=>{
    
});

afterEach(async()=>{
    const mainConnection = getConnection();
    await cleanAll(mainConnection);
})

afterAll(async () => {
    const mainConnection = getConnection();
    await mainConnection.close();
  });
