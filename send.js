function sendInfo() {

      var x = new Date();
      var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
      var moscowTime = -3;
      var elem = document.getElementByTagName('p');

      if (currentTimeZoneOffsetInHours !== moscowTime) {
        var diffTime = moscowTime + currentTimeZoneOffsetInHours; 
        alert(diffTime);
      }else {
        alert("Пользователь находится в той же часовой зоне");
      }

    }