describe("Completar formulario", function() {
    it("ingresar a la pagina", function() {
        cy.visit("https://demoqa.com/")
    })
    it("ingresar a form", function() {
        cy.get("svg[baseProfile='tiny']")
            .click()
    })
    it("ingresar a Practice Form", function() {
        cy.get("div[class='element-list collapse show']")
            .click()
    })
    it("completar campos del formulario", function() {
        cy.get("input[id='firstName']")
            .type("Carlos Alberto")
        cy.get("input[id='lastName']")
            .type("Ccanto Torres") 
        cy.get("input[id='userEmail']")
            .type("carloscctorres@gmail.com")   
        /*cy.get("input[value='Male']")
            .click()*/

    })
})