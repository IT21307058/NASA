import { fetchApodData, fetchRandomApodData, fetchApodDataRange } from '../nasaAPI/APODapi'; // Import your module containing API functions
import fetchMock from 'jest-fetch-mock'; // Import jest-fetch-mock

// Enable fetch mock
fetchMock.enableMocks();
jest.setTimeout(10000);

describe('Integration Tests: NASA APOD API Functions', () => {
    afterEach(() => {
        fetchMock.resetMocks(); // Reset fetch mock after each test
    });


    it('handles fetch error gracefully for fetchApodData', async () => {
        const date = '2024-05-01';

        fetchMock.mockRejectOnce(new Error('Failed to fetch data'));

        await expect(fetchApodData(date)).rejects.toThrow('Failed to fetch data');
    });

    it('handles fetch error gracefully for fetchRandomApodData', async () => {
        const count = 5;

        fetchMock.mockRejectOnce(new Error('Failed to fetch data'));

        await expect(fetchRandomApodData(count)).rejects.toThrow('Failed to fetch data');
    });

    it('handles fetch error gracefully for fetchApodDataRange', async () => {
        const start_date = '2024-4-12';

        fetchMock.mockRejectOnce(new Error('Failed to fetch data'));

        await expect(fetchApodDataRange(start_date)).rejects.toThrow('Failed to fetch data');
    });

    it('handles fetch error gracefully for fetchApodDataRange', async () => {
        const end_date = '2024-4-12';

        fetchMock.mockRejectOnce(new Error('Failed to fetch data'));

        await expect(fetchApodDataRange(end_date)).rejects.toThrow('Failed to fetch data');
    });

});