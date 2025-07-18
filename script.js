// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\\\\[]/, '\\\\[').replace(/[\\\\]]/, '\\\\]');
    var regex = new RegExp('[\\\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search); // This correctly checks query parameters
    return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal, iframe, and close button elements
    var modal = document.getElementById('arModal');
    var iframe = document.getElementById('arIframe');
    var closeButton = document.querySelector('.close-button');

    // Get a reference to your "3D\AR" button (the one with class 'my-3d-button')
    var my3dButton = document.querySelector('.my-3d-button');

    // Check if essential elements exist before adding listeners to prevent errors
    if (modal && iframe && closeButton && my3dButton) {
        // When the "3D\AR" button is clicked
        my3dButton.addEventListener('click', function() {
            // Define the base URL for your 3D AR Model Viewer
            var baseUrl = 'https://jontimi.github.io/3dModelARviewer/'; 

            // --- IMPORTANT: Dynamically set the brand and model for NERYA TEC ---
            var brandName = 'neryatech'; // The brand recognized by your 3D Model Viewer
            var modelToLoad = 'neryatech_120mm_table_model.glb'; // The specific GLB model for Nerya Tec

            // Construct the full URL with brand and model parameters
            var arViewerURL = `${baseUrl}?brand=${brandName}&model=${modelToLoad}`;
            
            // Set the iframe's source to load your AR mockup
            iframe.src = arViewerURL;
            
            // Show the modal by changing its display style to flex
            modal.style.display = 'flex';
            console.log("3D/AR button clicked. Opening modal for Nerya Tec with URL:", arViewerURL);
        });

        // When the close button is clicked
        closeButton.addEventListener('click', function() {
            // Hide the modal
            modal.style.display = 'none';
            // Clear the iframe source to stop any video/audio playback and release resources
            iframe.src = ''; 
            console.log("Modal closed by close button.");
        });

        // When the user clicks anywhere outside of the modal content, close it
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                iframe.src = ''; 
                console.log("Modal closed by outside click.");
            }
        });
    } else {
        console.error("One or more required elements (modal, iframe, close button, or 3D/AR button) were not found.");
    }
});