export const getPosts = async()=>{
    let response = await fetch(`https://newsapi.org/v2/everything?q=general&pageSize=21&language=en&apiKey=9986ad6200fb4fb480a44a23e98b2e45`);
    let result = await response.json();
    return result;
}