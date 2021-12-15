class HealthsController {
	async status() {
		return {
			status: 'ok',
			message: 'Health check is ok',
			timestamp: new Date().toISOString(),
		};
	}
}

export const healthsController = new HealthsController();
