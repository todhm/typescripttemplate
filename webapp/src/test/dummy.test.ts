import request from 'supertest';
import app from '../index';
import { getRepository } from 'typeorm';
import { Dummy } from '../models/entities/dummy';

it('dummy crreation success', async()=>{
    const response = await request(app)
    .post('/dummy')
    .send({data: "hello"})
    .expect(200);
    const dummyRepository  = getRepository(Dummy);
    const data = await dummyRepository.findAndCount({data :"hello"});
    expect(data[1]).toEqual(1);
})
