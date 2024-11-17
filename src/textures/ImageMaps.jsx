const imageMap = {
    1: '/src/textures/bosskey.png',
    2: '/src/textures/mugone.png',
    3: '/src/textures/apple.png',
    4: '/src/textures/pencil.png',
    5: '/src/textures/cocacolla.png',
    6: '/src/textures/toiletpaper.png'
};

export function getImage(itemId) {
    return imageMap[itemId] || '/src/textures/default.png'
};