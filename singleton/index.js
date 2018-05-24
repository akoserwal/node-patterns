var Logger = require('./Logger');

var logger1 = Logger;
logger1.log("hello3");


var logger2 = Logger;
logger2.log("hello1");


 if(logger1 === logger2) 
     logger1.log("yes");
 else
    logger1.log("no");