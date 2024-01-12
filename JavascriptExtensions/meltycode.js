
function deltaV () {
  var clt = timespantoseconds($prop('CurrentLapTime')); // current lap time to seconds 
  var ld = $prop('PersistantTrackerPlugin.SessionBestLiveDeltaSeconds'); // current live delta to seconds
  var ms = $prop('SpeedKmh') / 3.6; // convert current speed to m/s 
  var dis = ms * clt + ld; // calculate distance | distance = speed * time 
  var vel = dis / clt + ld // calculate velocity | velocity = distance / time 
  var spd = vel * 3.6; // convert velocity (m/s) to kmh 
  var diff = spd - $prop('SpeedKmh');
  return diff.toFixed(2);
}
