Feature: Login

Scenario: LoginSuccess
When Login on DemoBlaze



Scenario: InvalidLogin(wrong password)
When Login on DemoBlaze with invalid password

Scenario: InvalidLogin(wrong username)
When Login on DemoBlaze with invalid username