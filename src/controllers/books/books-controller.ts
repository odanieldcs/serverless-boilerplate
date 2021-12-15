class BooksController {
	async getAll() {
		return [
			{
				title: 'Book Loren Ipsum',
				isbn: '123456789',
				author: 'Loren Ipsum',
			}
		];
	}
}

export const booksController = new BooksController();
