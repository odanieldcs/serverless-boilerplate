import { statusHealth } from '@app/routers';

describe('Healths Router', () => {
  it('should return status 200', async () => {
    const response = await statusHealth({}, {});

    expect(response.statusCode).toBe(200);
  });
});
