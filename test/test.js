const { expect } = require("chai");
const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let url = 'http://localhost:3000/api/cat';
let cat = {
    _id: 'test',
    title: 'testCat',
    subtitle: 'testsubtitle',
    path: 'testPath',
    desription: 'testdDescription'
};

describe('test GET api', function () {
    it('returns statusCode of 200', function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done();
        });
    });
});


describe('test POST api', function () {
    it('post cat to DB', function (done) {
        request.post({ url: url, form: cat }, async function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


describe('test DELETE api', function () {
    it('delete a cat from DB', function (done) {
        request.delete({ url: url, form: cat }, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('Test Index Page', function () {
    before(function () {
        return JSDOM.fromFile('./public/index.html')
        .then((dom) => {
            global.window = dom.window;
            global.document = window.document;
        });
    });
    it('checks the heading exists in the index page', function (done) {
        expect(document.getElementById('indexHeading').innerHTML).to.equal('Welcome to SIT 725 Week 5');
        done();
    });
});

describe('Test History Page', function () {
    before(function () {
        return JSDOM.fromFile('./public/history.html')
        .then((dom) => {
            global.window = dom.window;
            global.document = window.document;
        });

    });
    it('checks the heading exists in the history page', function (done) {
        expect(document.getElementById('historyHeading').innerHTML).to.equal('Card History Table');
        done();
    });
});

