'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../server');

var expect = chai.expect;

describe ('json read and write tests', function () {
  var testUser = 'Jake';
  it('should create an user data in json format', function (done) {
    chai.request('localhost:3000')
    .post('/' + testUser)
    .send({
      name: 'Jake',
      age: '22'
    })
    .end(function (err, res) {
      expect(err).to.eql(null);
      expect(res.body.name).to.be.eql('Jake');
      expect(res.body.age).to.be.eql('22');
      done();
    });
  });

  it('should recieve a speicified user data in json format', function (done){
    chai.request('localhost:3000')
    .get('/' + testUser)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.age).to.eql('22');
      done();
    });
  });
});
