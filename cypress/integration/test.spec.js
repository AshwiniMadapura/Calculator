
describe("The main page loads",()=>{
    it("loads successfully",()=>{
        cy.visit("http://127.0.0.1:5502/index.html")
    })
})

describe("Works for single digit",()=>{
    it("Calculates single digit operations",()=>{
        cy.visit("http://127.0.0.1:5502/index.html")

        cy.get("#9").click();
        cy.get("#plus").click();
        cy.get("#5").click();
        cy.get(".eqOperator").click();

        cy.get(".display").should("have.value",14)
    })
})

describe("Works for multiple digits",()=>{
    it("Calculates multiple digit operations",()=>{
        cy.visit("http://127.0.0.1:5502/index.html")

        cy.get("#9").click();
        cy.get("#9").click();
        cy.get("#plus").click();
        cy.get("#5").click();
        cy.get("#5").click();
        cy.get(".eqOperator").click();

        cy.get(".display").should("have.value",154)
    })
})

describe("Works for chained operations",()=>{
    it("Calculates chained operations",()=>{
        cy.visit("http://127.0.0.1:5502/index.html")

        cy.get("#3").click();
        cy.get("#multiply").click();
        cy.get("#2").click();
        cy.get("#plus").click();
        cy.get("#5").click();
        cy.get("#divide").click();
        cy.get("#2").click();
        cy.get(".eqOperator").click();

        cy.get(".display").should("have.value",5.5)
    })
})

describe("Works for decimal operations",()=>{
    it("Calculates decimal value operations",()=>{
        cy.visit("http://127.0.0.1:5502/index.html")

        cy.get("#1").click();
        cy.get("#dot").click();
        cy.get("#2").click();
        cy.get("#plus").click();
        cy.get("#1").click();
        cy.get("#dot").click();
        cy.get("#2").click();
        cy.get("#percentage").click();
        cy.get(".eqOperator").click();

        cy.get(".display").should("have.value",0.024)
    })
})
