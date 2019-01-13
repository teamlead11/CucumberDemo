package stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddtariffPlanSteps {
	static WebDriver driver;

	@Given("The user is in gurutelecom home page")
	public void the_user_is_in_gurutelecom_home_page() {
		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("The user navigates to add tariff plan page")
	public void the_user_navigates_to_add_tariff_plan_page() {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@When("The user fill in the plan details {string}, {string},{string},{string}, {string},{string},{string}")
	public void the_user_fill_in_the_plan_details(String Monthrent, String freeLoc, String freeInt, String freeSMS,
			String LocCharges, String intCharges, String smsCharges) {
		driver.findElement(By.id("rental1")).sendKeys(Monthrent);
		driver.findElement(By.id("local_minutes")).sendKeys(freeLoc);
		driver.findElement(By.id("inter_minutes")).sendKeys(freeInt);
		driver.findElement(By.id("sms_pack")).sendKeys(freeSMS);
		driver.findElement(By.id("minutes_charges")).sendKeys(LocCharges);
		driver.findElement(By.id("inter_charges")).sendKeys(intCharges);
		driver.findElement(By.id("sms_charges")).sendKeys(smsCharges);

	}

	@When("Clicks the submit button")
	public void clicks_the_submit_button() {

		driver.findElement(By.name("submit")).click();
	}

	@Then("The user should see the success message")
	public void the_user_should_see_the_success_message() {

		Assert.assertEquals("Congratulation you add Tariff Plane",
				driver.findElement(By.xpath("//section[@id='main']//h2")).getText());
	}
}
