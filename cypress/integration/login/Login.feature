Feature: Login

# Scenario: LoginSuccess
# When Login on DemoBlaze
# Then I should see homepage
# Then logout


# Scenario: InvalidLogin(wrong password)
# When Login on DemoBlaze with invalid password
# Then I should see error message

# Scenario: InvalidLogin(wrong username)
# When Login on DemoBlaze with invalid username
# Then I should see error message


Scenario: visit another website
When visit w3schools page
Then search anything
Then search result is found