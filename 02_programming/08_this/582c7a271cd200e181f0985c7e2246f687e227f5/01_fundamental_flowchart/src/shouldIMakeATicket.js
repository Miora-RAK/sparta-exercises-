function shouldIMakeATicket(isStuck, timeBeingStuck, hourOfTheDay) {
  if (
    isStuck === true &&
    timeBeingStuck >= 20 &&
    ((9 <= hourOfTheDay && hourOfTheDay < 13) || (14 <= hourOfTheDay && hourOfTheDay < 18))
  ) {
    return true;
  } else {
    return false;
  }
}
shouldIMakeATicket();

// Don't touch this for tests to execute properly
module.exports = shouldIMakeATicket;
