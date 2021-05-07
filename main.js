function start_upload(event) {
    const file =document.getElementById('dbi-file-upload').files;
    console.log(file);
    // event.preventDefault();
    // console.log(event);
}

document.getElementById('submit-form').addEventListener('submit', start_upload);
// document.getElementById('db')