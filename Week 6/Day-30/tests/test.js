const request = require("supertest"); // import supertest
const app = require("../index"); // import server
const { user, transaksi } = require('../models/'); // import transaksi models

let authenticationToken; // variable to save the token

// beforeAll(async () => {
//     await Promise.all()
// })



const deleteAllData = async () => {
    await user.deleteMany();
};

deleteAllData();

describe('User Test', () => {
    // await user.deleteMany();
 
   describe("/auth/signup POST", () => {
     it("It should make user and get the token", async () => {
       const res = await request(app)
          .post('/auth/signup')
          .send({
           email: 'kamal@gmail.com',
           password: 'kamalishaM&1',
           confirmPassword: 'kamalishaM&1',
           name: 'Kamal Isham'
         });
 
       expect(res.statusCode).toEqual(200);
       expect(res.body).toBeInstanceOf(Object);
       expect(res.body.message).toEqual('Success');
       expect(res.body).toHaveProperty('token');
     });
   });

   describe('/auth/signin POST', () => {
    it("It should make user signin and get token", async () => {
      const res = await request(app)
        .post('/auth/signin')
        .send({
          email: 'kamal@gmail.com',
          password: 'kamalishaM&1',
       });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual('Success');
      expect(res.body).toHaveProperty('token');

      authenticationToken = res.body.token;
      console.log(authenticationToken);

    });
  });

});

describe("Transaksi Test", () => {
    // describe('Transaksi', async() => {
    //     await transaksi.deleteMany();
      
        /*
         * Test the /GET route
         */
        describe('/GET transaksi', () => {
          it('it should GET all the transaksi', async() => {
            const res = await request(app)
            .get('/transaksi')
            .set({
              Authorization: `Bearer ${authenticationToken}`
            })
      
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeInstanceOf(Object);
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toBeInstanceOf(Array);
          });
        });
      // })
      

    
})