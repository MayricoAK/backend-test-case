const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');

const req = request(app);

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Members can borrow books with conditions', () => {
    it('Member borrowed 2 books', async () => {
        req
        .post('/books/borrow')
        .send({
            code: 'M001', 
            bookCode: 'JK-45', 
            borrowedDate: '2024-08-01'
        });
      expect(200);

        req
        .post('/books/borrow')
        .send({
            code: 'M001', 
            bookCode: 'SHR-1', 
            borrowedDate: '2024-08-02'
        });
      expect(200);
      });
    it('Members may not borrow more than 2 books', async () => {
        req
        .post('/books/borrow')
        .send({
            code: 'M001', 
            bookCode: 'TW-11', 
            borrowedDate: '2024-08-03'
        });
      expect(400);
    });
});

describe('Member returns the book with conditions', () => {
    it('Member is return previously borrowed books', async () => {
        req
        .post('/books/return')
        .send({
            code: 'M001', 
            bookCode: 'JK-45', 
            returnedDate: '2024-08-02'
        });
      expect(200);
    });

    it('Members is late to return the book, and got penalized', async () => {
        req
        .post('/books/return')
        .send({
            code: 'M001', 
            bookCode: 'SHR-1', 
            returnedDate: '2024-08-12'
        });
      expect(200);
    });

    it('Member cannot borrow the book while in penalty status', async () => {
        req
        .post('/books/return')
        .send({
            code: 'M001', 
            bookCode: 'SHR-1', 
            returnedDate: '2024-08-12'
        });
      expect(200);
    });
});

describe('Check the book', () => {
    it('get all books', function(done) {
        req
        .get('/books')
        .expect(200, done);
    });

    it('get unborrowed / all available books', function(done) {
        req
        .get('/books/available')
        .expect(200, done);
    });
});

describe('Member check', () => {
    it('get all members with their number of books', function(done) {
        req
        .get('/members')
        .expect(200, done);
    });
});