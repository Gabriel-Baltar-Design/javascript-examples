const response = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(responseData => {

        if (responseData.ok) {
            return responseData.json();
        }

        throw new Error("A requisição falhou!");

    })
    .then(jsonData => {
        const postsCard = document.querySelector(".posts");
        postsCard.innerHTML = "";

        jsonData.forEach(post => {
            const postDiv = document.createElement("div");

            postDiv.innerHTML = `<h3> ${post.title}</h3>
                <p> ${post.body}</p>`;

            postsCard.appendChild(postDiv);
        })

        

    })

    .catch(error => {
        console.log(`Deu erro ${error}`);
    });



