const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here

  let newObj = emailFile.emails.reduce(function(p, c) {
    if (p.hasOwnProperty(c.email)) {
      p[c.email]++;
    } else {
      p[c.email] = 1;
    }
    return p;
  }, {});

  return newObj;
}

console.log(countUniqueEmails(emailLog));
