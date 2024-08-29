import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from "@/app/page";
import Ensure from "../../submodules/Gmd.TsCommon.Utils/src/ensure";

describe('<Home />',  () => {

    test('renders profile picture', async () => {
        render(<Home/>)
        const imageAlt: HTMLElement = screen.getByAltText('Rounded avatar');
        //We have async call in environmentStamp (voids error Cannot log after tests are done. Did you forget to wait for something async in your test?)
        await waitFor(() => expect(imageAlt).toBeInTheDocument());
    })

    test('renders links', async () => {
        render(<Home/>)

        const link: HTMLElement = screen.getByText(/Vercel/i);
        //We have async call in environmentStamp
        await waitFor(() => expect(link).toBeInTheDocument());
    })

    test('clicking on image expands it', async () => {
        const res =  render(<Home/>);
        const imageAlt: HTMLElement = screen.getByAltText('Rounded avatar');
        const parentDiv: HTMLElement = Ensure.notNull(imageAlt.parentElement);
        expect(parentDiv).not.toBeNull();
        expect(parentDiv.className).toContain("min-h-20");
        expect(parentDiv.className).not.toContain("h-screen");

        await userEvent.click(imageAlt as Element);

        //We have async call in environmentStamp
        await waitFor(() => {
            const imageAlt2 = screen.getByAltText('Rounded avatar');
            const parentDiv2 = Ensure.notNull(imageAlt2.parentElement);
            expect(parentDiv2.className).toContain("h-screen");
            // expect(imageAlt.className).toContain("h-screen");
        });
    });
})
