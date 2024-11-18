const imageMap = {
    1: '/src/textures/bosskey.png',
    2: '/src/textures/mugone.png',
    3: '/src/textures/apple.png',
    4: '/src/textures/pencil.png',
    5: '/src/textures/cocacoca.png',
    6: '/src/textures/toiletpaper.png',
    7: '/src/textures/bell.png',
    8: '/src/textures/coin.png'
};

export function getImage(itemId) {
    return imageMap[itemId] || '/src/textures/default.png'
};