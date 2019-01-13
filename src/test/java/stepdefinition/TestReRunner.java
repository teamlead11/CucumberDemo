package stepdefinition;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src/test/resources/failed.txt", glue = { "stepdefinition" }, plugin = { "html:target/failed" })

public class TestReRunner {

	
}
