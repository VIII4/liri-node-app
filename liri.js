var queryInstruction = require("./base");
//var inquirer = require("inquirer");

//Secondary
function getInstruction(_processArgv) {
  var instruction = {
    cmd: "",
    search: ""
  };
  instruction.cmd = process.argv[2];
  instruction.search = process.argv.splice(3).join(" ");
  return instruction;
}

//Run Liri bot
queryInstruction(getInstruction(process.argv));
