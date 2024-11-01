import { render, screen } from '@testing-library/react';
import Sample from '../../components/Sample';

test('renders learn react link', () => {
    render(<Sample />);
    const linkElement = screen.getByText(/Sample Component/i);
    expect(linkElement).toBeInTheDocument();
});