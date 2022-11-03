function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log("HELLO")
    return string.toUpperCase();
  }
function logWhisper(string) {
    console.log("hello")
    return string.toLowerCase();
}
function sayHiToHeadphonedRoommate(string) {
  console.log("hi drew",string)
  if (string === "Let's have dinner together!"){
    return "I would love to!"
  } else if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else if (string === string.toUpperCase()){
  return "YES INDEED!"
  }
}

   
// function sayHiToHeadphonedRoommate(string) {
//   if (string === string.toLowerCase()){
//     return "I can't hear you!"
//   } else {
//     if (string === string.toUpperCase())
//     return "YES INDEED!"
//   }
// }