*** Settings ***
Documentation    Suite description

Resource          ./resources.robot
Test Teardown     Close Browser

*** Test Cases ***

Test Home Page Is Open
    Open Browser To Main Page
    Title Should Be    Code Academy Jns 2020

Test Correct Login and Logout
    Open Browser To Main Page
    Wait Until Page Contains Element    id:modal-login-main
    Input Text  email   admin@example.com
    Input Text  password    1234
    Click Element   //button[.//text() = 'Login']
    Element Should Be Visible   class:button-logout-main
    Element Should Not Be Visible   id:modal-login-main
    Click Element   class:button-logout-main
    Element Should Not Be Visible   class:button-logout-main
    Element Should Be Visible   id:modal-login-main

Test Incorrect Login
    Open Browser To Main Page
    Wait Until Page Contains Element    id:modal-login-main
    Input Text  email   admin@example.com
    Input Text  password    4321
    Click Element   //button[.//text() = 'Login']
    Element Should Not Be Visible   class:button-logout-main
    Element Should Be Visible   id:modal-login-main
