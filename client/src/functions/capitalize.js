const capitalize = (text) => {
    return text?.toLowerCase().charAt(0).toUpperCase() + text?.toLowerCase().slice(1)
}

export default capitalize
