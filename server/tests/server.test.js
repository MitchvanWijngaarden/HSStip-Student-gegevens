const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('../models/bedrijf');

const todos = [{
        _id: new ObjectID(),
        text: 'first test todo',

    }, {
        _id: new ObjectID(),
        text: 'second test todo',
        completed: true,
        completedAt: 333
    }];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('GET /todos/:id', () => {
    it('should get a todo', (done) =>{
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return 404 if todo not found', (done) =>{
        request(app)
            .get(`/todos/${new ObjectID().toHexString()}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-object ids', (done) =>{
        request(app)
            .get('/todos/123')
            .expect(404)
            .end(done);
    })
});