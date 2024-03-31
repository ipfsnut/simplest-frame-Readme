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
        <frame-image src="https://ipfs.nftbookbazaar.com/ipfs/bafybeihjwfufzam6mne3gy5iob22xxbhgp7as5v3auafgqon747mimd454" />
        <frame-button>
            🔳 Readme
        </frame-button>
        <frame-button action="link" target="https://ipfs.nftbookbazaar.com/ipfs/QmTK9Jz832SVC3JbSNztGmMtmg88ntDdv3otAjgidoNxGY">
            {😺} View on Github
        </frame-button>
    `
};
