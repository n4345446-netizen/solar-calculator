let lastKVA = 0;
let backupHours = 0;
let future = false;

function calculateLoad() {
  // Get values, treat "o" or empty as 0
  const fans = (Number(document.getElementById("fans").value) || 0) * 75;
  const acs = (Number(document.getElementById("acs").value) || 0) * 1500;
  const lights = (Number(document.getElementById("lights").value) || 0) * 20;
  const phones = (Number(document.getElementById("phones").value) || 0) * 10;
  const laptops = (Number(document.getElementById("laptops").value) || 0) * 65;
  const tv = (Number(document.getElementById("tv").value) || 0) * 100;
  const fridge = (Number(document.getElementById("fridge").value) || 0) * 200;

  backupHours = Number(document.getElementById("hours").value) || 0;
  future = document.getElementById("future").checked;

  const totalWatts = fans + acs + lights + phones + laptops + tv + fridge;
  lastKVA = (totalWatts / 1000).toFixed(2);

  document.getElementById("result").innerHTML =
    `Estimated Load: <strong>${lastKVA} kVA</strong>`;

  document.getElementById("pricingBtn").style.display = "block";
}

function sendToWhatsApp() {
  const message =
    `Hi, I need a solar system with:\n\n` +
    `Load: ${lastKVA} kVA\n` +
    `Backup Hours: ${backupHours}\n` +
    `Future Expansion: ${future ? "Yes" : "No"}`;

  const url =
    "https://wa.me/2347059640476?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}