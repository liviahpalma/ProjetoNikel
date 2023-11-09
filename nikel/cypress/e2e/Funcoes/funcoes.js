export function visitar()
{
    cy.visit('http://127.0.0.1:5500/nikel/public/home.html')
    cy.get(".text-center.mb-3")
      .should("be.visible") 
      .and("have.css","color","rgb(33, 37, 41)")

    cy.get(".text-login > p")
        .eq(0)
        .should("be.visible") 
        .and("have.text","Organize suas finanças de uma forma fácil.")
}

export function telaDeEntrada()
{
    cy.get(".link-default")
        .click()
    cy.waitUntil(() =>
        cy.get(".modal-content"))
    cy.get("#email-create-input") 
        .type("lp@gmail.com")
    cy.get("#password-create-input")
        .type("123")
    cy.get(".btn.button-default")
        .click()
    
    cy.clearCookies()
    cy.reload()
    

    cy.get("#email-input")
        .type("lp@gmail.com")
    cy.get("#password-input")
        .type("123")
    cy.get(".btn.button-login")
        .click()
    cy.waitUntil(() => 
        cy.get(".container-lg") 
            .should("be.visible")
    )
}
