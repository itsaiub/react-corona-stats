export const formatNumber = (num) => {
  return new Intl.NumberFormat("en-IN").format(num);
};

export const formatDateAndTime = (date, format) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const getPaddedComp = (comp) => {
    return parseInt(comp) < 10 ? "0" + comp : comp;
  };

  let formattedDate = format,
    o = {
      "y+": date.getFullYear(), // year
      "M+": months[date.getMonth()], //month
      "d+": getPaddedComp(date.getDate()), //day
      "h+": getPaddedComp(
        date.getHours() > 12 ? date.getHours() % 12 : date.getHours()
      ), //hour
      "m+": getPaddedComp(date.getMinutes()), //minute
      "s+": getPaddedComp(date.getSeconds()), //second
      "S+": getPaddedComp(date.getMilliseconds()), //millisecond,
      "t+": date.getHours() >= 12 ? "PM" : "AM"
    };

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      formattedDate = formattedDate.replace(RegExp.$1, o[k]);
    }
  }
  return formattedDate;
};
