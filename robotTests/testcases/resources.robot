*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.

Library     SeleniumLibrary
Library     Collections
Library     String
Library     XvfbRobot
Library     OperatingSystem

*** Keywords ***
Open Browser To Main Page
    ${list} =     Create List    --no-sandbox    --disable-dev-shm-usage
    ${args} =     Create Dictionary    args=${list}
    ${desired caps} =     Create Dictionary    chromeOptions=${args}
    Start Virtual Display    1920    1080
    Open Browser    ${SERVER}    ${BROWSER}     desired_capabilities=${desired caps}
    Set Window Size    1920    1080
    Set Selenium Speed    ${DELAY}