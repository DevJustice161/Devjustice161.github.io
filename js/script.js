
    const notification = document.getElementById("notification");

    downloadBtn.addEventListener("click", function() {
        // Show notification
        notification.style.display = "block";

        // Hide notification after 3 seconds
        setTimeout(function() {
            notification.style.display = "none";
        }, 3000);
    });

