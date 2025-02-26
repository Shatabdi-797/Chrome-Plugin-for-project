document.getElementById('upload-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (!file) {
        document.getElementById('status').textContent = 'Please select an image.';
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    // Send the image to the backend API
    fetch('https://your-backend-api.com/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').textContent = 'Image uploaded successfully!';
        console.log(data);  // Assuming the API returns the extracted data in JSON format
    })
    .catch(error => {
        document.getElementById('status').textContent = 'Error uploading image.';
        console.error(error);
    });
});
