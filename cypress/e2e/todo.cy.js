describe("Todo list", () => {
  beforeEach(() => {
    // On simule l'API pour ne pas dépendre de restapi.fr ni modifier ses données
    cy.intercept("GET", "https://restapi.fr/api/todo", []).as("getTodos");
    cy.visit("/");
    cy.wait("@getTodos");
  });

  it("affiche un message quand il n'y a aucune tâche", () => {
    cy.findByText("Aucune tâche à afficher").should("be.visible");
  });

  it("ajoute une tâche avec le bouton Ajouter", () => {
    cy.intercept("POST", "https://restapi.fr/api/todo", {
      _id: "1",
      content: "Apprendre Cypress",
      edit: false,
      done: false,
    }).as("addTodo");

    cy.findByPlaceholderText("Ajouter une tâche").type("Apprendre Cypress");
    cy.findByRole("button", { name: "Ajouter" }).click();

    // On vérifie ce que l'application a envoyé à l'API
    cy.wait("@addTodo")
      .its("request.body")
      .should("deep.equal", {
        content: "Apprendre Cypress",
        edit: false,
        done: false,
      });

    cy.findByText(/Apprendre Cypress/).should("be.visible");
    cy.findByPlaceholderText("Ajouter une tâche").should("have.value", "");
  });
});
