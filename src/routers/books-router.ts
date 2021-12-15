import { booksController } from '@app/controllers';

export const getAllBooks = async (event: any, content: any) => {
	return {
		statusCode: 200,
		body: JSON.stringify(await booksController.getAll()),
	};
};
