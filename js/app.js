const calendarButton = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');
const months = 12;

calendarButton.addEventListener('click', (event) =>  {  /* () => это анонимная функция */
    console.log('test');

    for(let i = 0; i < months; i++){
        console.log(i);

        const calendarDoor = document.createElement('div'); // генерируем новый div
        calendarDoor.classList.add('image'); //даем див мия класса
        calendarDoor.style.gridArea = "door"+(i+1);

        const calendarDoorText = document.createElement('div'); // генерируем новый div
        calendarDoorText.classList.add('text'); //даем див мия класса
        calendarDoorText.innerHTML = i+1;

        calendarDoor.appendChild(calendarDoorText);
        calendarContainer.appendChild(calendarDoor);

        let picNumber = i+1;
        let picPath = `./img/pic${picNumber}.jpg`;

        calendarDoorText.addEventListener('click', (e) =>{
            e.target.parentNode.style.backgroundImage = `url("${picPath}")`;
            e.target.style.backgroundColor = "#333";
            e.target.style.opacity = "0";
        });

    }

    event.preventDefault();
}); 