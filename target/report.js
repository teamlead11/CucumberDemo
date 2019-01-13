$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/module1/AddCustomer.feature");
formatter.feature({
  "name": "To test add customer functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@abcd"
    }
  ]
});
formatter.scenario({
  "name": "to test submit button 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@abcd"
    },
    {
      "name": "@abcd1"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in gurutelecom cust home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_gurutelecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "balaji",
        "kumar",
        "kumar1@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "balaji1",
        "test",
        "kumar2@gmail.com",
        "chennai",
        "123456781"
      ]
    },
    {
      "cells": [
        "test",
        "kumar",
        "kumar3@gmail.com",
        "chennai",
        "123456782"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the customer id generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessSteps.the_user_should_see_the_customer_id_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "to test submit button 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@abcd"
    },
    {
      "name": "@abcd2"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in gurutelecom cust home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_gurutelecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "balaji",
        "kumar",
        "kumar1@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "balaji1",
        "test",
        "kumar2@gmail.com",
        "chennai",
        "123456781"
      ]
    },
    {
      "cells": [
        "test",
        "kumar",
        "kumar3@gmail.com",
        "chennai",
        "123456782"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the customer id generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessSteps.the_user_should_see_the_customer_id_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "to test submit button 3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@abcd"
    },
    {
      "name": "@abcd3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in gurutelecom cust home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_gurutelecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "balaji",
        "kumar",
        "kumar1@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "balaji1",
        "test",
        "kumar2@gmail.com",
        "chennai",
        "123456781"
      ]
    },
    {
      "cells": [
        "test",
        "kumar",
        "kumar3@gmail.com",
        "chennai",
        "123456782"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the customer id generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessSteps.the_user_should_see_the_customer_id_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});