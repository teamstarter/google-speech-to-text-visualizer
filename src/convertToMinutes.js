/**
 * String format : "1046.800"
 */
export default function convertToMinutes(timeInString) {
  const sec = parseInt(timeInString, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (parseInt(hours) === 0) {
    return minutes + ":" + seconds; // Return is HH : MM : SS
  }
  return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
}
