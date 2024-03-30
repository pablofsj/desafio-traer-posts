const btnPost = document.querySelector("#btn-post")
const postData = document.querySelector("#post-data")


const showPosts = (posts) => {
    posts.forEach((post) => {
        const listItem = document.createElement("li");
        const titlePost = document.createElement("p");
        const strongTitlePost = document.createElement("strong");
        strongTitlePost.textContent = post.title;
        titlePost.appendChild(strongTitlePost);
        const bodyPost = document.createElement("p");
        bodyPost.textContent = post.body;
        listItem.appendChild(titlePost);
        listItem.appendChild(bodyPost);
        postData.appendChild(listItem);
        postData.appendChild(document.createElement("br"));

    });
};

const getPosts = async (event, url) => {
    console.log(event)
    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.log(`la api falló, código de error: ${response.status}`)
            return
        }

        const data = await response.json()
        showPosts(data)

    } catch (error) {
        console.log('error', error)
    }

}

btnPost.addEventListener("click", (event) => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    getPosts(event, API_URL)
})

