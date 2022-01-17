function theEFilter(sentences) {
  return sentences.filter((sentence) => sentence.includes("e")|| sentence.includes("E") ) ;
}

// Do not remove the following line, it is for tests
module.exports = theEFilter;
