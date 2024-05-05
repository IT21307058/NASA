import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('renders footer with correct content', () => {
    const { getByText, getByAltText } = render(<Footer />);

    // Check if NASA logo is rendered
    const nasaLogo = getByAltText('Description of the image');
    expect(nasaLogo).toBeInTheDocument();

    // Check if NASA mission statement is rendered
    const missionStatement = getByText(/NASA explores the unknown in air and space/i);
    expect(missionStatement).toBeInTheDocument();

    // Check if footer links are rendered
    const homeLink = getByText(/home/i);
    expect(homeLink).toBeInTheDocument();

    
  });

  test('renders footer with correct content 2', () => {
    const { getByText, getByAltText } = render(<Footer />);

    const newsLink = getByText(/news & events/i);
    expect(newsLink).toBeInTheDocument();

    const multimediaLink = getByText(/multimedia/i);
    expect(multimediaLink).toBeInTheDocument();

    const missionsLink = getByText(/missions/i);
    expect(missionsLink).toBeInTheDocument();
  });

  test('renders footer with correct content 2', () => {
    const { getByText, getByAltText } = render(<Footer />);

    const universeLink = getByText(/the universe/i);
    expect(universeLink).toBeInTheDocument();

    const aeronauticsLink = getByText(/aeronautics/i);
    expect(aeronauticsLink).toBeInTheDocument();

    const technologyLink = getByText(/technology/i);
    expect(technologyLink).toBeInTheDocument();

    const aboutNasaLink = getByText(/about nasa/i);
    expect(aboutNasaLink).toBeInTheDocument();

    // Check if footer legal links are rendered
    const termsLink = getByText(/terms & conditions/i);
    expect(termsLink).toBeInTheDocument();

    const privacyPolicyLink = getByText(/privacy policy/i);
    expect(privacyPolicyLink).toBeInTheDocument();
  });

  
});