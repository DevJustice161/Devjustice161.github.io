document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById("downloadBtn");
    const notification = document.getElementById("notification");

    downloadBtn.addEventListener("click", function() {
        // Trigger download
        const link = document.createElement("a");
        link.href = "Justice_Joshua_Resume.pdf"; // Path to your PDF file
        link.download = "Justice_Joshua_Resume.pdf"; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show notification
        notification.style.display = "block";

        // Hide notification after 3 seconds
        setTimeout(function() {
            notification.style.display = "none";
        }, 3000);
    });
});
