import bossKeyImage from './bosskey.png';
import mugOneImage from './mugone.png';
import appleImage from './apple.png';
import pencilImage from './pencil.png';
import cocacocaImage from './cocacoca.png';
import toiletPaperImage from './toiletpaper.png';
import bellImage from './bell.png';
import coinImage from './coin.png';

const imageMap = {
    1: bossKeyImage,
    2: mugOneImage,
    3: appleImage,
    4: pencilImage,
    5: cocacocaImage,
    6: toiletPaperImage,
    7: bellImage,
    8: coinImage
};

export function getImage(itemId) {
    return imageMap[itemId] || '/src/textures/default.png'
};