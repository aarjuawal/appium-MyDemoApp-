Feature: User login and navigation

  Scenario: User opens the app and navigates to the Webview
    Given the user is on the catalog screen
    When the user opens the menu and selects Webview
    Then the Webview page should be displayed
