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
        <frame-image src="https://twitter.com/thomasdylandan2/photo" />
        <frame-button>
            🔳 Readme
        </frame-button>
        <frame-button action="link" target="https://twitter.com/thomasdylandan2/photo">
            {😺} View on Github
        </frame-button>
    `
};
