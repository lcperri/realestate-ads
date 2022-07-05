const capitalize = (text) => {
    if (!text) return;
    const words = text.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase().charAt(0).toUpperCase() + words[i].toLowerCase().slice(1);
    }
    return words.join(' ');
}

export default capitalize
