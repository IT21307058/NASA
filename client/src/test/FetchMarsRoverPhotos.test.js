import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import FetchMarsRoverPhotos from '../pages/marsrovers/FetchMarsRoverPhotos';
import { MemoryRouter } from 'react-router-dom';

// Mocking the fetchRoverPhotosBySol function
jest.mock('../nasaAPI/MARSRoverapi', () => ({
    fetchRoverPhotosBySol: jest.fn(),
}));

describe('FetchMarsRoverPhotos component', () => {
    beforeEach(() => {
        // Clear all mock calls before each test
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<MemoryRouter><FetchMarsRoverPhotos /></MemoryRouter>);
    });

    it('renders component properly', () => {
        const { getByText, getByLabelText } = render(
            <MemoryRouter>
                <FetchMarsRoverPhotos />
            </MemoryRouter>
        );
        expect(getByText('Fetch Mars Sol')).toBeInTheDocument();
        expect(getByLabelText('Sol:')).toBeInTheDocument();
        // expect(getByLabelText('Camera:')).toBeInTheDocument();
        expect(getByLabelText('Pages:')).toBeInTheDocument();
        expect(getByText('Fetch Photos')).toBeInTheDocument();
    });

    
});