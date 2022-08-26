let valorHoraNormal = 265;
let valorHoraExtraordinaria =350;
let horarioNormal=40 * valorHoraNormal;
let horasTrabajadas =53;
let salario1= horarioNormal;
let salario2= valorHoraExtraordinaria * (horasTrabajadas-40);

if (horasTrabajadas =horarioNormal){

    console.log (salario1);

    
}else if (horasTrabajadas>40){

    console.log (salario2);
   

}    
console.log ("El total a pagar por horas laborables normal (40hrs) es de :  "+ salario1);
console.log ("El total a pagar por horas extras es de :  "+ salario2);
    