// Select elements
const uploadInput = document.getElementById('upload-input');
const uploadedImage = document.getElementById('uploaded-image');
const downloadButton = document.getElementById('download-button');

// Handle image upload
uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImage.src = e.target.result; // Load the uploaded image
    };
    reader.readAsDataURL(file);
  }
});

// Handle download
downloadButton.addEventListener('click', () => {
  const frame = document.querySelector('.frame'); // Select the frame to capture

  // Wait for the uploaded image to fully load
  uploadedImage.onload = () => {
    html2canvas(frame, {
      useCORS: true, // Allow cross-origin images
      scale: 2, // Increase resolution
      backgroundColor: null // Ensure transparency is handled correctly
    }).then((canvas) => {
      // Create a download link
      const link = document.createElement('a');
      link.download = 'Happy_New_Year_2025_CoffeeBite_Frame.png'; // Set download filename
      link.href = canvas.toDataURL('image/png'); // Convert canvas to a data URL
      link.click(); // Trigger the download
    });
  };
});
