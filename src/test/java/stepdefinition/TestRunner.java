package stepdefinition;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", tags = { "@abcd" }, glue = { "stepdefinition" }, plugin = {
		"html:target", "rerun:src/test/resources/failed.txt" })

public class TestRunner {

}