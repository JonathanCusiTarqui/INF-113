/* Determinar si un número es primo o no. El numero tecleado deberá estar entre 0
 y 1000. Si es primo lo mostrará en una ventana alert.*/

function primo() {
    var n = parseInt(prompt());
    var c = 0;
         if (n>=0&&n<=1000) {
            for (var i = 1 ; i <= n ; i++) {
                if (n % i == 0){
                    c = c + 1;
                }  
         }
         if (c==2){ alert(n+'es primo');}
            else{
                alert(n+'no es primo');
            }}
            else{alert('error')}
    }

/* Diseñar un script que pida un número mayor que cero y devuelva la suma 
de todos los números pares desde cero al número introducido. 
Mostrará la suma y volverá a pedir otro número hasta que el usuario teclee un 0.*/
function fun(){
    var n = parseInt(prompt());
    var sum = 0;
    while (n !== 0) {
        for (var i = 1 ; i <= n ; i++) {
                if (i % 2 == 0){
                    sum = sum + i;
                }  
         }
         alert("La suma de los números pares desde 0 hasta "+n+" es"+sum);
         alert("El número ingresado no es válido. Intente nuevamente.");
         n = parseInt(prompt("Ingrese otro número mayor que cero (0 para salir):"));
    } 
   }
 
   

/* Factorial de un número.*/
function fac(){
    var n, m, fac;
    n = parseInt(prompt('intro'));
    m = 1
    fac = 1
    while(m<=n)
    {
        fac = fac*m;
        m = m+1;
    }
    alert('el factorial de '+n+' es'+fac);
}



/* Imprimir los números del 10 al 1 en orden descendente con for.*/
function numero(){
    for(var i=1; i <=10 ; i++){
       document.write(i+'<br>');
    }
}



/* Sumar los dígitos de un número e imprimir en la consola.*/

function sum(){
    var n, m, s, num;
    n=parseInt(prompt('ngresa')); 
    s = 0;
    do{
        while(n>10){
            num = n
            m = num%10
            n = Math.floor(n/10)
            s = s + m
        }
    }
    while(n>10)
    s=s+n;
    alert(s);
}