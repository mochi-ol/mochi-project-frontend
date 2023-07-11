export async function getAllPosts() {
    const response = await fetch("http://localhost:3000/cats", {
        method: "GET",
    });
    const data = await response.json();
    return data;
}

export async function getPostByName(name: string) {
    const response = await fetch(`http://localhost:3000/cats/${name}`, {
        method: "GET",
    });
    const data = await response.json();
    return data;
}