<script>
function generateWhatsAppLink() {
    // Get user input
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Create the WhatsApp link
    var whatsappLink = 'https://wa.me/' + encodeURIComponent(phone);
    
    // Optionally, include a pre-filled message
    if (message.trim() !== '') {
        whatsappLink += '?text=' + encodeURIComponent(message);
    }

    // Redirect to the WhatsApp link
    window.location.href = whatsappLink;
}
</script>