package stepdefinition;

import org.junit.Assert;

import cucumber.api.java.en.Then;
import pageobjects.AccessPage;

public class AccessSteps {

	@Then("The user should see the customer id generated")
	public void the_user_should_see_the_customer_id_generated() {
		AccessPage access = new AccessPage();
		Assert.assertEquals("Please Note Down Your CustomerID", access.getLbl_sucessMessage().getText());

	}
}
