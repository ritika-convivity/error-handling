export const getError = async () => {
    const data = await fetch('http://localhost:3002/api/home', {
        cache: 'no-store',
    });
    console?.log(data)
    if (data?.status !== 200) {
        return data?.statusText;

    } else {
        return data.json();
    }
};
