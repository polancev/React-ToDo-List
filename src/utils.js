export const sortFunction = (a, b) => {
    if (a.timestomp > b.timestomp) {
        return -1;
    }
    if (a.timestomp < b.timestomp) {
        return 1;
    }
    return 0;
};
