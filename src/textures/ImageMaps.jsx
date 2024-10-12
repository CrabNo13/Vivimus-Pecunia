const imageMap = {
    3: '/src/textures/apple.png'
};

export function getImage(itemId) {
    return imageMap[itemId] || '/src/textures/default.png'
};