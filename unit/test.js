
//var SilkScroll = require('../bin/silk-scroll.min.js');
var SilkScroll = require('../src/silk-scroll.js');
var test = require('tape');

test('This should not throw any errors', function(t){

  try{
    console.log(SilkScroll);
    var res = SilkScroll.active();
    t.equal(res, -1, "SilkScroll should return -1 within a node env");
  }catch(e){
    t.fail("Something went wrong with silk-scroll.\n" + e.message);
  }
  
  t.end();
});