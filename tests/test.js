
var SilkScroll = require('../src/silk-scroll.js');
var test = require('tape');

test('This should not throw any errors', function(t){

  try{
    var res = SilkScroll.active();
    console.log(res);
  }catch(e){
    t.fail("Something went wrong with silk-scroll.\n" + e.message);
  }
  
  t.end();
});