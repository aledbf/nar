// Generated by LiveScript 1.2.0
var path, colors, nar, program, echo, cmdMap, help, map;
path = require('path');
colors = require('colors');
nar = require('./nar');
program = require('commander');
echo = require('./utils').echo;
cmdMap = {
  e: 'extract',
  c: 'create',
  x: 'run',
  l: 'list',
  i: 'install',
  g: 'get',
  start: 'run'
};
module.exports.parse = function(it){
  return program.parse(
  map(
  it));
};
program.version(nar.VERSION);
program.command('help').action(function(){
  return help(
  echo());
}).description('\n  Output usage information');
program.on('--help', help = function(){
  return echo('  Usage examples:\n\n    $ nar create\n    $ nar run app.nar\n    $ nar extract app.nar -o some/dir\n    $ nar list app.nar\n    $ nar install app.nar --save\n    $ nar get http://server.net/app.nar\n\n  Command specific help:\n\n    $ nar <command> --help\n\t');
});
['create', 'extract', 'run', 'list', 'install', 'get'].forEach(function(it){
  return require(
  "./commands/" + it);
});
map = function(args){
  var cmd, alias, ref$, value, own$ = {}.hasOwnProperty;
  cmd = args[2];
  for (alias in ref$ = cmdMap) if (own$.call(ref$, alias)) {
    value = ref$[alias];
    if (alias === cmd) {
      args[2] = value;
    }
  }
  return args;
};
