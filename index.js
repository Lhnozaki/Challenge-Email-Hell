const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here

  return emailFile.emails.reduce(function(emailCount, user) {
    if (emailCount.hasOwnProperty(user.email)) {
      emailCount[user.email]++;
    } else {
      emailCount[user.email] = 1;
    }
    return emailCount;
  }, {});
}

console.log(countUniqueEmails(emailLog));
