## TEST REPORT ##

`BUG #1 User is not able to search by Author or Tile`

Steps to reproduce: 
1. Type an existing book title e.g: "The Outsiders" in the searchbox.

Actual: The results are empty, even though the book title exists.
Expected: The list of books matching the entered title should be displayed.

SUGGESTION: 
- Display a clear message if no results are found.
- Enhance the search functionality by adding a delay (e.g. 1–2 seconds) before making API calls to allow users to finish typing. This will reduce the number of unnecessary API calls and improve performance.

`BUG #2 User is not able to sort by rating`

Steps to reproduce: 
1. Select a rating value from the dropdown menu

Actual: The list of books is not ordered either in ascending or descending order.
Expected: The list of books should be ordered in descending order.

SUGGESTION: Clearly indicate the current sorting order to the user (Highest to Lowest)

`BUG #3 Missing cover image`

Steps to reproduce: 
1. Navigate to the second page of the book list
2. Scroll down to /book/34 and /book/35 (the last raw)

Actual: There is a white blank space where the book cover image should be displayed.
Expected: The book cover image should be displayed for all listed books.

SUGGESTION: If the book cover image is missing or cannot be loaded, display a placeholder image, title and author to maintain visual consistency.

`BUG #4 Pagination component allows zero and negative values`

Steps to reproduce: 
1. Navigate to the first page of the book list.
2. Scroll to the bottom of the page.
3. Click on the previous button in the pagination control repeatedly.

Actual: The user can navigate to Page 0 and continue clicking, resulting negative page numbers.
Expected: The previous button should be disabled when the user is on the first page to prevent navigation to invalid pages.

`BUG #5 Application crashed in Safari after typing unsupported character`

Pre-condition: use Safari browser
Steps to reproduce:
1. Navigate to the first page.
2. Type character ( in the search box.

Actual: The application crashes, displaying the error in console: app crashed - waiting for file changes before starting... 
Expected: The application should not crash. It should either ignore unsupported characters or provide a user-friendly error message.

SUGGESTED: improve searchbox typing validation

`BUG/IMPROVEMENT #6 Preserve search/filter after returning from Details page`

Steps to reproduce:
1. Select a value in the sorting dropdown.
2. Click on any listed book to navigate to its Details page.
3. Click the browser's back button to return to the book list.

Actual: The user is returned to the book list, but the previously applied sorting/filter is reset.
Expected: The user should return to the book list with the previously applied sorting/filter intact.

SUGGESTED: Add a "Return to List" button on the Details page to provide a clearer and more intuitive way for users to return while maintaining their search/filter state.
