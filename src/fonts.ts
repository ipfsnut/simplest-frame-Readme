import { Font, FontStyle, FontWeight } from 'satori';
import { loadFont } from '../modules/utils.js';

// Define a function to load fonts asynchronously
const loadFonts = async () => {
    // Load the 'Redaction-Regular.otf' font with fallbacks to 'Arial' and 'sans-serif'
    const redactionFontData = await loadFont('Redaction-Regular.otf, Arial, sans-serif');
    // Load the 'Redaction100-Regular.otf' font with fallbacks to 'Arial' and 'sans-serif'
    const redaction100FontData = await loadFont('Redaction100-Regular.otf, Arial, sans-serif');

    // Define an array of font objects
    const fonts: Font[] = [
        {
            name: 'Redaction',
            data: redactionFontData,
            weight: 400 as FontWeight, // Explicitly casting as Weight type
            style: 'normal' as FontStyle, // Explicitly casting as FontStyle type
        },
        {
            name: 'Redaction-100',
            data: redaction100FontData,
            weight: 400 as FontWeight, // Explicitly casting as Weight type
            style: 'normal' as FontStyle, // Explicitly casting as FontStyle type
        }
    ];

    return fonts;
};

export default loadFonts();
