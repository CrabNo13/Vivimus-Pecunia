const imageMap = {
    apple: '/src/textures/apple.png'
};

export function getImage(itemId) {
    return imageMap[itemId] || '/src/textures/default.png'
};