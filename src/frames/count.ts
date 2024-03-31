import { getFramer, setFramer } from '../data/framer.js';
import { getCount, incrementCount } from '../data/count.js';
import { FrameActionDataParsed } from 'frames.js';
const html = String.raw;

export default {
    name: 'count',
    logic: async (frameMessage: FrameActionDataParsed) => {
        switch (frameMessage.buttonIndex) {
            case 1: // Readme (Frame) button
                // Logic to navigate to another frame
                return `another-frame`; // Placeholder for the name of the desired frame
            case 2: // Readme (Browser) button
                // Logic to open browser to specified NFTBook asset URL
                window.open('https://twitter.com/thomasdylandan2/photo', '_blank');
                return 'count';
            case 3: // Subscribe button
                // Logic to collect user's email address and add to subscribers database
                // Placeholder logic for now
                console.log('Subscribe button clicked');
                return 'count';
            case 4: // Mint button
                // Logic to initiate minting process for an NFTBook
                // Placeholder logic for now
                console.log('Mint button clicked');
                return 'count';
            default: 
                // Increment count for other cases
                await incrementCount();
                await setFramer(frameMessage.requesterFid, frameMessage.inputText);
                return `count`;
        }
    },
    content: async () => {
        // Fetch your Twitter profile picture or use a placeholder image URL
        const imageUrl = 'https://twitter.com/thomasdylandan2/photo';

        const count = await getCount();
        const { username, taunt } = await getFramer() || {};
        return html`
        <frame-image layout="main" src="${imageUrl}">
        <!-- Placeholder content for the frame -->
    </frame-image>
    <frame-input text="text" />
    <frame-button>
        🫵  Readme!
    </frame-button>
    <frame-button>
        🎬 View credits
    </frame-button>
    <frame-button>
        Subscribe
    </frame-button>
    <frame-button>
        Mint
    </frame-button>
        `;
    },
}