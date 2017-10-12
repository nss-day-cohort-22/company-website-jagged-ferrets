let blogDatabaseController = JSON.parse(blogDatabaseString)

console.log(blogDatabaseController)

let blogPreviewPopulated = document.getElementById("blogPreviews")

for (let index = 0; index < blogDatabaseController.length; index++) {
    
    let object = blogDatabaseController[index]

    let imgPosition = "right"

    if (index % 2 === 0) {imgPosition = "left"}
    

    
    blogPreviewPopulated.innerHTML += `
    <div class="card">
        <img class="${imgPosition}" src="${object.image}">
        <div class="blog_title">
            <p class="title ${imgPosition}">${object.title}</p>
            <p class="author">By ${object.author}</p>
        </div>

    </div>
    `
        
    }
    
