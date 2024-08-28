
    const notification = document.getElementById("notification");
    const downloadBtn = document.getElementById("downloadBtn");

    downloadBtn.addEventListener("click", function() {
        // Show notification
        notification.style.display = "block";
        notification.style.color = "red";

        // Hide notification after 3 seconds
        setTimeout(function() {
            notification.style.display = "none";
        }, 3000);
    });

