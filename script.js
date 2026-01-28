<script>
  function calculate() {
    // Appliance watt ratings
    const fanW = 75;
    const acW = 1500;
    const lightW = 20;
    const tvW = 150;
    const laptopW = 65;

    // Quantities
    const fan = Number(document.getElementById("fan").value);
    const ac = Number(document.getElementById("ac").value);
    const light = Number(document.getElementById("light").value);
    const tv = Number(document.getElementById("tv").value);
    const laptop = Number(document.getElementById("laptop").value);

    const hours = Number(document.getElementById("hours").value);
    const future = document.getElementById("future").checked;

    // Total watts
    let totalWatts =
      fan * fanW +
      ac * acW +
      light * lightW +
      tv * tvW +
      laptop * laptopW;

    // Future expansion (25%)
    if (future) {
      totalWatts *= 1.25;
    }

    // Convert to kVA
    const kva = (totalWatts / 1000).toFixed(2);

    // Display result
    document.getElementById("result").innerHTML =
      `Total Load: <b>${kva} kVA</b><br>
       Backup Time: ${hours} hours`;

    // WhatsApp message
    const message =
      `Hello, I used your Solar Calculator.%0A` +
      `Total Load: ${kva} kVA%0A` +
      `Backup Time: ${hours} hours%0A` +
      `Future Expansion: ${future ? "Yes" : "No"}`;

    // Save WhatsApp link globally
    window.whatsappLink =
      "https://wa.me/2347059640476?text=" + message;
  }

  function sendToWhatsApp() {
    if (!window.whatsappLink) {
      alert("Please calculate load first.");
      return;
    }
    window.open(window.whatsappLink, "_blank");
  }
</script>
