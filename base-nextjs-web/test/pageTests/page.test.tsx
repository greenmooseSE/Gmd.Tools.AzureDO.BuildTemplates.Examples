import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from "@/app/page";

jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        environment: 'dev',
        // add other env variables if any
    },
}));
describe('<Home />', () => {

    test('renders profile picture', () => {
        render(<Home/>)
        const imageAlt: HTMLElement = screen.getByAltText('Rounded avatar');
        expect(imageAlt).toBeInTheDocument();
    })

    test('renders links', () => {
        render(<Home/>)

        const link: HTMLElement = screen.getByText(/Vercel/i);
        expect(link).toBeInTheDocument();
    })

    test('clicking on image expands it', async () => {
        var res = await render(<Home/>);
        const imageAlt: HTMLElement = screen.getByAltText('Rounded avatar');
        const parentDiv = imageAlt.parentElement;
        expect(parentDiv.className).toContain("min-h-20");
        expect(parentDiv.className).not.toContain("h-screen");
        await userEvent.click(imageAlt as Element);

        var imageAlt2 = await screen.findByAltText('Rounded avatar');
        var parentDiv2 = imageAlt2.parentElement;
        expect(parentDiv2.className).toContain("h-screen");
        // expect(imageAlt.className).toContain("h-screen");
    });
})
