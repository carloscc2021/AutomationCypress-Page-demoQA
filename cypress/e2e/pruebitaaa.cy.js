describe('click en el primer resultado de google', () => {
    it('Ingresar a esta pagina', () => {
        cy.visit('https://www.google.com/')
    })
    it('Buscar "Mercado libre"', () => {
        cy.get('[name="q"]')
            .type('Mercado libre')
            .type('{enter}')
    })
    it('Click en el primer resultado de google', () => {
        cy.get('a[href="https://www.mercadolibre.com.ar/"]')
            .click()
    })
    it('Buscar ventiladores', () => {
        cy.get('input[name="as_word"]')
    })
})
