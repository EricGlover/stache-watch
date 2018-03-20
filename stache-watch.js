//Eric's fabulous commandline based file watcher
//recompiles your Handlebars templates whenever a file is changed in the current directory

console.log("Hold on to your mustaches....here we go");
const child = require("child_process");

child.exec(`handlebars -f template.js .`, (err, stdout, stderr) => {
  if (err) {
    console.error(`error in running running the command ${err}`);
  }
  if (stderr) {
    console.error(`compilation error\n${stderr}`);
  }
  console.log("Successfully recompiled handlebars templates");
});
