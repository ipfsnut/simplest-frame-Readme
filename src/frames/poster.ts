import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
    name: 'poster',
    logic: (message: FrameActionDataParsed) => {
        if (message.buttonIndex == 1) {
            return `count`
        }
    },
    content: () => html`
        <frame-image src="https://ipfs.io/ipfs/QmXisbuZZjJdRLHukwrQQ2h1E53zL4bNeHjcwHZyq4woia" />
        <frame-button>
            🔳 Readme
        </frame-button>
        <frame-button action="link" target="https://ipfs.io/ipfs/QmXisbuZZjJdRLHukwrQQ2h1E53zL4bNeHjcwHZyq4woia">
            {😺} View on Github
        </frame-button>
    `
};
