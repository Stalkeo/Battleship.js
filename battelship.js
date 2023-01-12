var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc + 1;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var array = [];

while (isSunk == false)
{
    guess = prompt("Это игра Морской бой. Правила просты: корабль имеет 3 палубы, размещен случайным образом на горизонтальном поле из 7 ячеек. Вводите номер клетки в которую желаете выстрелить. Не пытайтесь мухлевать. Удачи!");
    if (!isNaN(guess))
    {
    if (guess < 1 || guess > 7 || array.includes(guess))
    {
        alert("Не вводите повтояющиеся");
        array.push(guess);
        console.log(array);
        console.log(guess);
        console.log(location1);
    }
        else 
    {
        guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3)
        {
            alert("Попал!");
            hits = hits + 1;
            array.push(guess);
            console.log(array);
            console.log(guess);
            console.log(location1);
            if (hits == 3)
            {
                isSunk = true;
                alert("Вы потопили корабль. Поздравляю!");
            }
        }   
    else
        {
            array.push(guess);
            console.log(array);
            console.log(guess);
            console.log(location1);
            alert("Мимо!");
        }
    }
} 
    else
    {
        alert("Вводить можно только цифры");
    }     
}
var stats = "Вы выстрелили " + guesses + " раза, чтоб потопить корабль, " + "это значит, что Ваша меткость была равна: " + (3/guesses);
alert(stats);