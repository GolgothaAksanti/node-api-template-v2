// import request from 'supertest';

// import App from '@src/app/App';
// import routes from '@src/app/routes';
// import db from '@src/database/definitions/models';
// import {
//   userData,
//   incompleteUserData,
//   route,
//   verifyNumber,
//   verifyWithWrongNumber,
//   loginData,
//   withNoPasswordData,
//   wrongLoginData,
//   wrongPasswordData,
// } from '@src/__mocks__/user.mock';
// import { prefix } from '@src/__mocks__/variables.mock';

// const app = new App(routes).getApp();

// const database: any = db;
// let user_id: number;

// describe('auth', () => {
//   it('should not create a user with incomplete data', async () => {
//     const res = await request(app)
//       .post(`${prefix}${route}/signup`)
//       .send(incompleteUserData);
//     expect(res.body.status).toBe(400);
//   });

//   it('should create a user', async () => {
//     const res = await request(app)
//       .post(`${prefix}${route}/signup`)
//       .send(userData);
//     user_id = res.body.data.user_id;
//     expect(res.body.status).toBe(201);
//   });

//   it('should signin a user', async () => {
//     const res = await request(app)
//       .post(`${prefix}${route}/signin`)
//       .send(loginData);
//     console.warn(res);
//     expect(res.body.status).toBe(200);
//   });

//   it('should fails to create a user with the same number', async () => {
//     const res = await request(app)
//       .post(`${prefix}${route}/signup`)
//       .send(userData);
//     expect(res.body.status).toBe(400);
//   });

//   it('should not signin a user with a wrong with no password', async () => {
//     const res = await request(app)
//       .post(`${prefix}${route}/signin`)
//       .send(withNoPasswordData);
//     expect(res.body.status).toBe(400);
//   });

//   it('should not login a user with a wron login data', async () => {
//     const res = await request(app)
//       .post(`${prefix}${route}/signin`)
//       .send(wrongLoginData);
//     expect(res.body.status).toBe(400);
//   });

//   it('should not login a user with a wrong password', async () => {
//     const res = await request(app)
//       .post(`${prefix}${route}/signin`)
//       .send(wrongPasswordData);
//     expect(res.body.status).toBe(400);
//   });
// });

// // afterAll(async () => {
// //   await database.UserProfile.destroy({
// //     where: { user_id: 1 },
// //   });

// //   await database.User.destroy({
// //     where: { user_id: 1 },
// //   });
// // });
