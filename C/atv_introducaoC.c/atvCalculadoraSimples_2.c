#include <stdio.h>


int main() 
{
    float numero1;
    float numero2;
    int opcao;
    float resultado;
 printf("Digite o primeiro numero:");
 scanf("%f",&numero1);
 printf("Digite o segundo numero:");
 scanf("%f",&numero2);
 
 printf("1-Soma\n2-Substração\n3-Multiplicar\n4-Divisão\nOpção:");
 scanf("%d",&opcao);
 
 if(opcao == 1){
     resultado = numero1 + numero2;
 }else if(opcao == 2){
     resultado = numero1 - numero2;
 }else if(opcao == 3){
     if(numero2 == 0){
         printf("Erro!!!!!!!!!!!!!!!!\n");
     }
     resultado = numero1 * numero2;
 }else{
     resultado = numero1 / numero2;
 }
 
 printf("Resultado: %f",resultado);
   return 0;

}
