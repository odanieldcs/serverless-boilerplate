import { healthsController } from '@app/controllers';

export const statusHealth = async (event: any, content: any) => {
	return {
		statusCode: 200,
		body: JSON.stringify(await healthsController.status()),
	};
};
