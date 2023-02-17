// Es del mes actual

// Verificacion de horario laboral
function checkBusinessHour(date){
    let hour = date.getHours()+7;
    let businessHour = false;
    if(hour>=9 && hour<=17){
        businessHour = true;
    }
    return businessHour;
}

// Verificacion de dia laboral
function checkBusinessDay(date){
    let day = date.getDay();
    let businessDay = true;
    if(day==0||day==6){
        businessDay = false;
    }
    return businessDay;
}

function checkDayAndHour(hour, day){

// Obtener mes y año actual
    const todayYear = new Date().getFullYear();
    const todayMonth = new Date().getMonth();

// Crear una fecha con el dia y la hora introducidas por el usuario en el mes actual
    const date = new Date(todayYear, todayMonth+1, day, hour-7);

// Llamar funciones y desplegar mensajes
    if(checkBusinessHour(date)&&checkBusinessDay(date)){
        console.log(`El dia ${day}, a las ${hour} horas, si es horario laboral.`)
    }
    else{
        console.log(`El dia ${day}, a las ${hour} horas, no es horario laboral, a descansar.`)
    }
}

// Hora, y fecha
checkDayAndHour(18, 17);