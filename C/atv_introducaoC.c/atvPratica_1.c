#include <stdio.h>



int main() 
{
  char nome[50];
  int idade;
  char cidade[50];
  
  printf("Escreva seu nome completo:");
  scanf("%[^\n]",&nome);
  printf("Escreva sua idade:");
  scanf("%d",&idade);
  printf("Escreva o nome da sua cidade:");
  scanf("%s",&cidade);
  
  printf("Olá! Meu nome é %s, tenho %d anos de idade sou de %s",nome,idade,cidade);
   return 0;

}
