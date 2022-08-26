let prueba = [360,380,400.420,440,460,480,500,520,540,560,580,600, 620, 660]




for (let index1= 0; index1 < prueba.length; index1++) {
    for (let index2 = 0; index2 < prueba.length; index2++) {
        
if (prueba[index1]> prueba[index2]) {
    let auxiliar= prueba[index1];


    prueba[index1]=prueba[index2];
    prueba[index2]=auxiliar;


    
        }

        
    }
    
} console.log(prueba);
