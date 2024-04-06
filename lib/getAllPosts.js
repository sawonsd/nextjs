export default async function getAllPosts(){
    const results = await fetch("https://dummyjson.com/products");

    return results.json();
}