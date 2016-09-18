'use strict';

const alfy = require('alfy');
const codes = require('./codes');

const results = alfy.matches(alfy.input, codes, 'code');
alfy.output(results.map(function (item) {
  return {
    title: item.code + ' - ' + item.message,
    subtitle: item.description,
    arg: item.link
  };
}));