we have to create test case inside 
    integration (folder)
    and create an test case after that run cypress
    using npx cypress open.

    cy (object) used to move anywhere and which kind of website
    

    fixtures refer particular location to read the test data fixtures
    integration folder is the entry point of cypress running files
    support folder reusable code write inside support 

# DemoTest

To run:
 - npm install
 - npm run test

To run on multiple machines at same time:
 -  export BUILD_TAG=$(date +"%Y_%m_%d"); npm run record3x

Run a single set of tests:
 - npx node scripts/cypress.js --browser chrome --spec cypress/integration/*.feature