$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/module2/AddtariffPlan.feature");
formatter.feature({
  "name": "Add Tariff plan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To Add tariff plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@us123"
    }
  ]
});
formatter.step({
  "name": "The user is in gurutelecom home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user navigates to add tariff plan page",
  "keyword": "And "
});
formatter.step({
  "name": "The user fill in the plan details \"\u003cMonthRent\u003e\", \"\u003cFreeLoc\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreesms\u003e\", \"\u003cLocCharge\u003e\",\"\u003cintCharge\u003e\",\"\u003cSMSCharge\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRent",
        "FreeLoc",
        "FreeInt",
        "Freesms",
        "LocCharge",
        "intCharge",
        "SMSCharge"
      ]
    },
    {
      "cells": [
        "500",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Add tariff plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@test"
    },
    {
      "name": "@us123"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in gurutelecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddtariffPlanSteps.the_user_is_in_gurutelecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddtariffPlanSteps.the_user_navigates_to_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the plan details \"500\", \"100\",\"200\",\"300\", \"400\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddtariffPlanSteps.the_user_fill_in_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddtariffPlanSteps.clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddtariffPlanSteps.the_user_should_see_the_success_message()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c... you add Tariff Plan[e]\u003e but was:\u003c... you add Tariff Plan[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepdefinition.AddtariffPlanSteps.the_user_should_see_the_success_message(AddtariffPlanSteps.java:50)\r\n\tat ✽.The user should see the success message(src/test/resources/module2/AddtariffPlan.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});