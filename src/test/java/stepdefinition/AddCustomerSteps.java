package stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import pageobjects.AddCustomerPage;

public class AddCustomerSteps {

	@When("The user fill in the details")
	public void the_user_fill_in_the_details(DataTable dataTable) {
		AddCustomerPage cust = new AddCustomerPage();
		List<Map<String, String>> customerDetailsMaps = dataTable.asMaps(String.class, String.class);
		cust.getRdo_done().click();
		cust.getTxt_fname().sendKeys(customerDetailsMaps.get(2).get("fname"));
		cust.getTxt_lname().sendKeys(customerDetailsMaps.get(1).get("lname"));

		cust.getTxt_email().sendKeys(customerDetailsMaps.get(0).get("email"));
		cust.getTxt_adress().sendKeys(customerDetailsMaps.get(1).get("adress"));

		cust.getTxt_phnum().sendKeys(customerDetailsMaps.get(2).get("phnum"));

	}

	@When("The user clicks the submit button")
	public void the_user_clicks_the_submit_button() {
		AddCustomerPage cust = new AddCustomerPage();
		cust.getBtn_submit().click();
	}

}
