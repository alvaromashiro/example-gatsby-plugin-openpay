describe("My First Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true)
  })
})
describe("My First Test", function() {
  beforeEach(function() {
    cy.request("POST", "/test/seed/post", {
      title: "First Post",
      authorId: 1,
      body: "...",
    })

    // seed a user in the DB that we can control from our tests
    cy.request("POST", "/test/seed/user", { name: "Jane" })
      .its("body")
      .as("currentUser")
  })

  it("Visits the Kitchen Sink and visit page 2", function() {
    cy.visit("/")
    cy.contains("page 2").click()
    cy.url().should("include", "/page-2")
    cy.get(".action-email")
      .type("alvaromashiro@gmail.com")
      .should("have.value", "alvaromashiro@gmail.com")
  })
})
