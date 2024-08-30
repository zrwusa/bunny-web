import CounterCypress from "./CounterCypress";
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress Component Test
describe("<CounterCypress />", () => {
    it("should render and display expected content in a Client Component", () => {
        // Mount the React component for the About page
        cy.mount(<CounterCypress/>);

        // The new page should contain a h1 with "About page"
        cy.get("a").contains("Go Back");

        // Validate that a link with the expected URL is present
        // *Following* the link is better suited to an E2E test
        cy.get('a[href="/"]').should("be.visible");

        const $btnPlus = cy.get('button:contains("+")').should('be.visible')

        for (let i = 0; i < 3; i++) $btnPlus.click()

        cy.get('h2').invoke('text').should('eq', '3')
    });
});

// Prevent TypeScript from reading file as legacy script
export {};
