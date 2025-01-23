import BookListPage from '../pages/bookListPage'
import BookDetailsPage from '../pages/bookDetailsPage'

describe('general functionality list of books', () => {
	/*

		I selected the following failing scenarios to cover with UI Automation:
		 - As a user, I want to be able to sort the list of books by rating, so that I can see the highest rated books first.
		 - As a user, I want to be able to search for books by author, so that I can find books by my favorite authors.

		 I believe that these scenarios are the most important to cover, as user can be overwhelmed by the amount of books.
		 So most likely they will want to sort by rating or search by author/title.
	
	*/

	it('user is able to sort by rating', () => {
		const listPage = new BookListPage()
		const detailsPage = new BookDetailsPage()

		listPage.visitBookListPage()
		listPage.selectOrderByValue('getOrderBy', 'rating')

		// Bug #2 sort the records in descending order
		listPage.clickOnBookByPosition(0)
		detailsPage.checkRatingValue(detailsPage.theHighestRatedBook)
	})

	it('user can search by existing author', () => {
		const listPage = new BookListPage()
		const existingAuthorName = 'Christopher'

		listPage.visitBookListPage()

		listPage.searchByText('getBooksByAuthor', existingAuthorName)
		listPage.checkBookListed()
	})

	/*

		I selected the following passing test cases to cover with UI Automation:
		 - As a user, I want to see the book cover image, so that I can identify books visually.
		 - As a user, I want to navigate within results easily, so that I can find books on other pages.

		 I believe that these two scenarios cover crucial functionality of the application.
	
	*/

	it('list of books are loaded with cover images', () => {
		const page = new BookListPage()
		page.visitBookListPage()

		page.checkBookImageLoaded(page.maxBookAmount)
		page.checkPageNumber(1)
	})

	it('user can navigate between pages', () => {
		const page = new BookListPage()
		page.visitBookListPage()

		page.goToNextPageCheckApiCallSuccess(2, 24)
		// Bug/Improvement - Not all books have cover image
		//page.checkBookImageLoaded(page.maxBookAmount)
		page.goToNextPageCheckApiCallSuccess(2, 36)
		page.checkBookImageLoaded(page.maxBookAmount)
		page.goToNextPageCheckApiCallSuccess(2, 48)
		page.checkBookImageLoaded(page.maxBookAmount)
	})

	it('user can navigate to book details page', () => {
		const listPage = new BookListPage()
		const detailsPage = new BookDetailsPage()

		listPage.visitBookListPage()
		listPage.clickSelectedRandomBook('getBookDetails')
		detailsPage.checkDetailsBookPageLoaded('getBookDetails')
	})
})
