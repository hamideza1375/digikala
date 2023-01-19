const seconder =(date,second)=>{
  var x = setInterval(function () {
    var countDownDate = new Date(date).getTime()
  var now = new Date().getTime();
  var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   second({days, hours, minutes, seconds})
   if (distance <= 0) clearInterval(x)
  }, 1000);
}
export default seconder



// setTimeout(() => {
//   seconder("2023-03-13 22:3:0",({days, hours, minutes, seconds})=>(
//     setdt(days + ':' + hours + ':' + minutes + ':' + seconds)
//     ))
// }, 1000);