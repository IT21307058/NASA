import { fetchRoverPhotosBySol, fetchRoverPhotosByEarthDate, fetchMissionManifest } from '../nasaAPI/MARSRoverapi'; // Import your module containing API functions
import fetchMock from 'jest-fetch-mock'; // Import jest-fetch-mock

// Enable fetch mock
fetchMock.enableMocks();
jest.setTimeout(10000);

describe('Integration Tests: NASA Rover Photos API Functions', () => {
    afterEach(() => {
        fetchMock.resetMocks(); // Reset fetch mock after each test
    });

    it('fetchRoverPhotosBySol handles fetch error gracefully', async () => {
        // Arrange
        const rover = 'perseverance';
        const sol = 100;
        const camera = 'FHAZ';
        const page = 1;
        fetchMock.mockRejectOnce(new Error('Failed to fetch data'));

        // Act & Assert
        await expect(fetchRoverPhotosBySol(rover, sol, camera, page)).rejects.toThrow('Failed to fetch data');
    });

    it('fetchRoverPhotosByEarthDate handles fetch error gracefully', async () => {
        // Arrange
        const rover = 'curiosity';
        const earthDate = '2024-05-01';
        const camera = 'NAVCAM';
        const page = 1;
        fetchMock.mockRejectOnce(new Error('Failed to fetch data'));

        // Act & Assert
        await expect(fetchRoverPhotosByEarthDate(rover, earthDate, camera, page)).rejects.toThrow('Failed to fetch data');
    });

    it('fetchMissionManifest handles fetch error gracefully', async () => {
        // Arrange
        const rover = 'pcuriosity';
        fetchMock.mockRejectOnce(new Error('Failed to fetch data'));

        // Act & Assert
        await expect(fetchMissionManifest(rover)).rejects.toThrow('Failed to fetch data');
    });
});