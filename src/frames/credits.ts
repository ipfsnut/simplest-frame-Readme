import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
    name: 'credits',
    logic: (message: FrameActionDataParsed) => {
        if (message.buttonIndex == 1) {
            return `count`
        }
    },
    content: () => html`
        <frame-image src="https://ipfs.io/ipfs/QmXisbuZZjJdRLHukwrQQ2h1E53zL4bNeHjcwHZyq4woia" />
        <frame-button>
            ⬅️ Back
        </frame-button>
        <frame-button action="link" target="https://github.com/depatchedmode/simplest-frame">
            {😺} View on Github
        </frame-button>
    `
};
