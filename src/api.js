export const fetchData = async () => {
    try {
        // const response = await fetch("http://localhost:8090/api/v1/card");
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
    }
};