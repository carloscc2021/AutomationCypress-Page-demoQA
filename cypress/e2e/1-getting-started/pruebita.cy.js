describe('Aca se escribe el titulo de la User History', () =>
{
    before('Precondicion: aca se describe la precondicion', () =>
    {
        cy.visit('https://test.claropay.com.ar/landing')
    })
    it('Click en Entrar ahora', () =>
    {   
        cy.get('div[class=navbar__btn]').click();
        //cy.get('#username').type('automationcpay@gmail.com');
    })
    it('Completar campo email', () =>
    {   
        cy.get('input[id="username"]').type('carlitos2022@email.com')
        //cy.get('#username').type('automationcpay@gmail.com');
    })
})