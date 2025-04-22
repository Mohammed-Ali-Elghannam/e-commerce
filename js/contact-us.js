const scriptUrl ="https://script.google.com/macros/s/AKfycbxEEZNfwnVN-uAU9VYTdwUTkBguyvpX4TDwCQgGtAk9FJHM62FYQk11scDlLOqrqPTf/exec"

let form = document.getElementById('form-contact-us')
form.addEventListener("submit" , (e) => {
    e.preventDefault()
    fetch(scriptUrl , {
        method: "POST",
        body: new FormData(form),
    }).then((response) =>{
            window.location.reload()

    }).catch((error) => console.error("error ! " , error.message))

})