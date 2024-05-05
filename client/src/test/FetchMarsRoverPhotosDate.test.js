import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import FetchMarsRoverPhotos from '../pages/marsrovers/FetchMarsRoverPhotos';
import { MemoryRouter } from 'react-router-dom';


// Mocking the fetchRoverPhotosBySol function
jest.mock("../nasaAPI/MARSRoverapi" , () => ({
    fetchRoverPhotosBySol: jest.fn().mockResolvedValue({ photos: [{ id: 1, img_src: 'photo1.jpg' }] }),
}));

describe('FetchMarsRoverPhotos component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<MemoryRouter><FetchMarsRoverPhotos /></MemoryRouter>);
    });

    it('enables button when earthDate is truthy and loading is false', () => {
        const { getByText } = render(<MemoryRouter>
            <FetchMarsRoverPhotos earthDate="2024-05-01" loading={false} />
            </MemoryRouter>);
        const fetchPhotosButton = getByText('Fetch Photos');

        expect(fetchPhotosButton).not.toBeDisabled();
    });

    
});