var fs = require("fs");

console.log("Process One");

fs.readFile("list.txt", "utf8", function(err, data) {
    console.log(data);
});

console.log("Process Two");
