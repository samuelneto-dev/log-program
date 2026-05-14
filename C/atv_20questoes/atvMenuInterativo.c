#include <stdio.h>

int main() 
{
int opcao;
int numero;

while(opcao != 3){
    printf("\n=======MENU======\n1. Dobrar o valor.\n2. Quadruplicar o valor.\n3. Sair.\nOpção:");
    scanf("%d",&opcao);
    
    if(opcao == 1){
        printf("Digite o valor:");
         scanf("%d",&numero);
        printf("Valor dobrado:%d",numero * 2);
       
        
    }else if(opcao == 2){
        printf("Digite o valor:");
         scanf("%d",&numero);
        printf("Valor quadruplicado:%d",numero * numero);
       
    }else{
        printf("Saindo...");
    }
}
return 0;
}
