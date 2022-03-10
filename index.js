import { connect } from 'mqtt'
let client = connect('mqtt://localhost')

client.on('connect', function () {
  client.subscribe('test')
})

client.on('message', function (topic, message) {
  // message is Buffer
  let now = new Date()
  let obj = JSON.parse(message.toString())
  console.log("TS: " + now)
  console.log("ID: " + obj.deviceID)
  console.log("Temperature: " + obj.sensor.temp + "F")
  console.log("Humidity: " + obj.sensor.humidity + "%")
  console.log("Battery Level: " + obj.battery.percent + "%")
  console.log("------------------")
})