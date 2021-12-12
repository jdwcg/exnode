process.on('exit', function(){
   console.log('exit이벤트발생함.');
});

setTimeout(function(){
   console.log('2초후 실행됨');
   process.exit();
}, 2000);

console.log('2초후에 실행될것임.');
