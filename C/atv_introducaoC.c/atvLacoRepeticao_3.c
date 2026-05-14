#include <stdio.h>


int main() 
{
 int num1 [20];
int numero1;
 
 for(int num1 = 0; num1 <= 20; num1++){
     if(num1 % 2 == 0){
         
     printf("Numeros pares: %d\n",num1);
     }
 }
 printf("Digite um numero:");
 scanf("%d",&numero1);
 
 for(int numero = 0; numero <= 10; numero ++){
     printf("%d x %d = %d\n",numero1,numero,numero1*numero);
     
 }
 
 
return 0;
}
