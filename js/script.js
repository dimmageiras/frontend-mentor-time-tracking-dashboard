let [currentDay, previousDay, currentWeek, previousWeek, currentMonth, previousMonth] = [[], [], [], [], [], [], [], []];

$(document).ready(function() {
  $.getJSON("./data/data.json",
    function(data) {
      $.each(data, function(key, value) {
        const timeFrames = value.timeframes;
        currentDay.push(hours(timeFrames.daily.current));
        previousDay.push(hours(timeFrames.daily.previous));
        currentWeek.push(hours(timeFrames.weekly.current));
        previousWeek.push(hours(timeFrames.weekly.previous));
        currentMonth.push(hours(timeFrames.monthly.current));
        previousMonth.push(hours(timeFrames.monthly.previous));
      })
      timeFrame(1);
      for (let i = 0; i <= 2; i++) {
        $(".menu-link:eq(" + i + ")").click(timeFrame.bind(timeFrame, i));
      }
    });
});

function hours(number) {
  if (number === 1) {
    return number + "hr";
  } else {
    return number + "hrs";
  }
}

function timeFrame(i) {
  $(".menu-link.active").removeClass("active");
  for (let x = 0; x <= 5; x++) {
    if (i === 0) {
      $(".current").eq(x).text(currentDay[x]);
      $(".previous").eq(x).text("Yesterday - " + previousDay[x]);
    } else if (i === 1) {
      $(".current").eq(x).text(currentWeek[x]);
      $(".previous").eq(x).text("Last Week - " + previousWeek[x]);
    } else {
      $(".current").eq(x).text(currentMonth[x]);
      $(".previous").eq(x).text("Last Month - " + previousMonth[x]);
    }
    $(".menu-link:eq(" + i + ")").addClass("active");
  }
}
