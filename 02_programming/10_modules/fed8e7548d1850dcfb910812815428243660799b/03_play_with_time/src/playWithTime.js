import moment from "moment";

function formatDate(date) {
  return `${moment(date).format("dddd Do MMMM YYYY")}`;
}
//Wednesday 31st May 2000

function yearsSinceDate(date) {
  console.log(yearsSinceDate);
  return new moment().diff(moment(date), "years");
}
// 20
function daysSinceDate(date) {
  return Math.round(new moment().diff(moment(date), "days", true));
}
// 7394
function getDayFromDate(date) {
  return `${moment(date).format("dddd")}`;
}
// Wednesday

export { formatDate, yearsSinceDate, daysSinceDate, getDayFromDate };
