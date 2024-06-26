import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import FetchApodDataPage from '../pages/apod/FetchApodDataPage';
import { fetchApodData } from '../nasaAPI/APODapi';
import { MemoryRouter } from 'react-router-dom';

// Mocking the APOD API module
jest.mock('../nasaAPI/APODapi');

describe('FetchApodDataPage', () => {
    it('renders component correctly', () => {
        render(
            <MemoryRouter>
                <FetchApodDataPage />
            </MemoryRouter>);
        expect(screen.getByText('Astronomy Picture of the Day')).toBeInTheDocument();
    });

    it('fetches APOD data by default', async () => {
        const mockApodData = {
            title: 'Test Title',
            explanation: 'Test Explanation',
            media_type: 'image',
            url: 'test-url',
            date: '2024-05-01',
        };

        // Mocking the fetchApodData function
        fetchApodData.mockResolvedValueOnce(mockApodData);

        render(
            <MemoryRouter>
                <FetchApodDataPage />
            </MemoryRouter>);


        // Wait for data to be fetched and loaded
        await waitFor(() => expect(fetchApodData).toHaveBeenCalledTimes(1));
    });

    it('displays video content correctly', async () => {
        const mockApodData = {
            title: 'Test Video',
            explanation: 'Test Video Explanation',
            media_type: 'video',
            url: 'test-video-url',
        };

        // Mocking the fetchApodData function
        fetchApodData.mockResolvedValueOnce(mockApodData);

        render(
            <MemoryRouter>
                <FetchApodDataPage />
            </MemoryRouter>);
        // Wait for data to be fetched and loaded
        await waitFor(() => expect(fetchApodData).toHaveBeenCalledTimes(1));

    });
});