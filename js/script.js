 let getUserBtn = document.getElementById('get-user-btn');
 let kwadrat = document.getElementById('dane-programisty');

 const getUser =()=> {
   fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', {mode: 'cors', method: 'GET'})
 .then(res=> res.json())
 .then(resJSON => {
   console.log(resJSON);
   kwadrat.innerHTML = `<p>
 ${resJSON.imie}<br>
 ${resJSON.nazwisko}<br>
 ${resJSON.zawod}<br>
 ${resJSON.firma}<br>
 </p>`
  
 })
   .catch((error) => {
   console.error('Error:' + error);
   })
 }

getUserBtn.addEventListener('click', getUser);