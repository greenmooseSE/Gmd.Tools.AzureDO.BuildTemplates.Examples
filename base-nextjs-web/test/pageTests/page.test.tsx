import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from "@/app/page";
import Ensure from "../../submodules/Gmd.TsCommon.Utils/src/ensure";

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
        const res = await render(<Home/>);
        const imageAlt: HTMLElement = screen.getByAltText('Rounded avatar');
        const parentDiv: HTMLElement = Ensure.notNull(imageAlt.parentElement);
        expect(parentDiv).not.toBeNull();
        expect(parentDiv.className).toContain("min-h-20");
        expect(parentDiv.className).not.toContain("h-screen");
        await userEvent.click(imageAlt as Element);

        const imageAlt2 = await screen.findByAltText('Rounded avatar');
        const parentDiv2 = Ensure.notNull(imageAlt2.parentElement);
        expect(parentDiv2.className).toContain("h-screen");
        // expect(imageAlt.className).toContain("h-screen");
    });
})
