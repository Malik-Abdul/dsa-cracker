// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

const timeConversion = (s) => {
  // let [hourss, minutes, seconds] = s.slice(0, 8).split(":").map(Number);
  // console.log(hourss, minutes, seconds);
  const amOrPm = s.slice(8);
  const timeArr = s.split(":");
  let hours;
  hours = Number(timeArr[0]);

  let ss = timeArr[2].slice(0, 2);
  if (amOrPm == "PM" && hours != 12) {
    hours = hours + 12;
  } else if (amOrPm == "AM" && hours == 12) {
    hours = hours - 12;
  }
  hours = hours < 10 ? "0" + hours.toString() : hours.toString();
  return `${hours}:${timeArr[1]}:${ss}`;
};

console.log(timeConversion("02:34:50PM")); // 14:34:50
console.log(timeConversion("12:05:39AM")); // 00:05:39
console.log(timeConversion("12:40:22AM")); // 00:40:22
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("04:59:59AM")); // 04:59:59
console.log(timeConversion("12:45:54PM")); // 12:45:54
console.log(timeConversion("06:40:03AM")); // 06:40:03
