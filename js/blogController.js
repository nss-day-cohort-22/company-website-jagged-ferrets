let blogDatabaseController = JSON.parse(blogDatabaseString)

let blogPreviewPopulated = document.getElementById("blogPreviews")

let span = document.getElementsByClassName("close")[0]
let modalJS = document.getElementById('modal')
modalFunction = function(blogIndex) {
    
    modalJS.style.display = "block"

    let selectedBlog = blogDatabaseController[blogIndex]
    let blogTitle = document.getElementById("modalTitle")
    let blogContent = document.getElementById("modalContent")
    let blogAuthor = document.getElementById("modalAuthor")

    blogTitle.innerHTML =`
    <p>${selectedBlog.title}</p>
    `
    blogContent.innerHTML =`
    <p>${selectedBlog.content}</p>
    `
    blogAuthor.innerHTML =`
    <p>By ${selectedBlog.author}<br>${selectedBlog.date}</p>
    `
}

span.onclick = function() {
    modal.style.display = "none";
}


for (let index = 0; index < blogDatabaseController.length; index++) {
    
    let object = blogDatabaseController[index]

    let imgPosition = "right"

    if (index % 2 === 0) {imgPosition = "left"}
    

    
    blogPreviewPopulated.innerHTML += `
    <div class="card" onclick='modalFunction(${index})'">
        <img class="${imgPosition}" src="${object.image}">
        <div class="blog_title blog_title${imgPosition}">
            <p class="title title${imgPosition}"><em>${object.title}</em></p>
            <p class="author author${imgPosition}">By ${object.author} - <span class="smallText">Click to read more</span></p>
        </div>

    </div>
    `
        
    }
    