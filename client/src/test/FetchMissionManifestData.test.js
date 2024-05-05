import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import FetchMissionManifestData from '../pages/marsrovers/FetchMissionManifestData';
import { MemoryRouter } from 'react-router-dom';
import { fetchMissionManifest } from "../nasaAPI/MARSRoverapi";

// Mocking the fetchMissionManifest function
jest.mock("../nasaAPI/MARSRoverapi", () => ({
    fetchMissionManifest: jest.fn().mockResolvedValue({
        photo_manifest: {
            name: 'Curiosity',
            landing_date: '2012-08-06',
            launch_date: '2011-11-26',
            status: 'active',
            max_sol: 1000,
            max_date: '2024-04-30',
            total_photos: 100000,
            photos: [
                { sol: 1, total_photos: 10, cameras: ['camera1', 'camera2'] },
                { sol: 2, total_photos: 20, cameras: ['camera3'] },
            ]
        }
    })
}));

describe('FetchMissionManifestData component', () => {
    beforeEach(() => {
        // Clear all mock calls before each test
        jest.clearAllMocks();
    });

    // it('displays manifest data correctly after fetching', async () => {
    //     const { getByText, getByLabelText } = render(<MemoryRouter>
    //         <FetchMissionManifestData />
    //     </MemoryRouter>);

    //     fireEvent.change(getByLabelText('Select a rover:'), { target: { value: 'curiosity' } });
    //     fireEvent.click(getByText('Fetch Manifest'));

    //     await waitFor(() => {
    //         expect(getByText('Name of the Rover Curiosity')).toBeInTheDocument();
    //         expect(getByText('The Rover\'s landing date on Mars : 2012-08-06')).toBeInTheDocument();
    //         expect(getByText('The Rover\'s launch date from Earth : 2011-11-26')).toBeInTheDocument();
    //         expect(getByText('The Rover\'s mission status : active')).toBeInTheDocument();
    //         expect(getByText('The most recent Martian sol from which photos exist : 1000')).toBeInTheDocument();
    //         expect(getByText('The most recent Earth date from which photos exist : 2024-04-30')).toBeInTheDocument();
    //         expect(getByText('Number of photos taken by that Rover : 100000')).toBeInTheDocument();
    //         expect(getByText('Photos by Sol:')).toBeInTheDocument();
    //         expect(getByText('Sol 1: 10 photos - Cameras: camera1, camera2')).toBeInTheDocument();
    //         expect(getByText('Sol 2: 20 photos - Cameras: camera3')).toBeInTheDocument();
    //     });
    // });

    // it('displays error message if fetch fails', async () => {
    //     fetchMissionManifest.mockRejectedValueOnce(new Error('Failed to fetch manifest'));

    //     const { getByText, getByLabelText } = render(<MemoryRouter>
    //         <FetchMissionManifestData />
    //     </MemoryRouter>);

    //     fireEvent.change(getByLabelText('Select a rover:'), { target: { value: 'curiosity' } });
    //     fireEvent.click(getByText('Fetch Manifest'));

    //     await waitFor(() => {
    //         expect(getByText('Failed to fetch manifest. Please make sure the rover name is correct and try again.')).toBeInTheDocument();
    //     });
    // });

        it('renders without crashing', () => {
            render(<MemoryRouter><FetchMissionManifestData /></MemoryRouter>);
        });
    
        // it('displays error message if rover is not selected', () => {
        //     const { getByText } = render(<MemoryRouter><FetchMissionManifestData /></MemoryRouter>);
        //     fireEvent.click(getByText('Fetch Manifest'));
        //     expect(getByText('Select Rover')).toBeInTheDocument();
        // });
    
        // it('displays manifest data when rover is selected and form is submitted', () => {
        //     const { getByText, getByLabelText } = render(<MemoryRouter><FetchMissionManifestData /></MemoryRouter>);
        //     fireEvent.change(getByLabelText('Select a rover:'), { target: { value: 'curiosity' } });
        //     fireEvent.click(getByText('Fetch Manifest'));
        //     expect(getByText('Name of the Rover')).toBeInTheDocument();
        //     expect(getByText('The Rover\'s landing date on Mars')).toBeInTheDocument();
        //     expect(getByText('The Rover\'s launch date from Earth')).toBeInTheDocument();
        //     expect(getByText('The Rover\'s mission status')).toBeInTheDocument();
        //     expect(getByText('The most recent Martian sol from which photos exist')).toBeInTheDocument();
        //     expect(getByText('The most recent Earth date from which photos exist')).toBeInTheDocument();
        //     expect(getByText('Number of photos taken by that Rover')).toBeInTheDocument();
        //     expect(getByText('Photos by Sol:')).toBeInTheDocument();
        // });
});