import { telaDeEntrada, visitar } from "../Funcoes/funcoes"

describe('Testes Automatizados - Projeto Nikel', () => 
{
    beforeEach(() => 
    {
        visitar()
        telaDeEntrada()   
    });

    it('04.1 - Validar Acesso a Tela de Entradas e Saídas', () => 
    {
       cy.get(".container-lg") 
        .should("be.visible")    
    })

    it('04.2 - Validar visualização do modal', () => 
    {
        cy.get(".bi.bi-plus")
            .click()
        cy.get("#exampleModalLabel")
            .should("be.visible")
    });  
    
    context('05 - Validar Cadastro de Saídas', () => {
        it(' - ', () => 
        {
            
        }) 
    });
})