function calculate() {

    let load = parseFloat(document.getElementById("power").value);
    let hours = parseFloat(document.getElementById("hours").value);
    let result = document.getElementById("result");

    if (isNaN(load) || isNaN(hours)) {
        result.innerHTML = "<p style='color:red;'>Please enter valid values.</p>";
        return;
    }

    // Daily Energy
    let energy = load * hours;
    let energyKwh = (energy / 1000).toFixed(2);

    // Inverter Recommendation
    let inverter = "";

    if (load <= 1000) {
        inverter = "1.5kVA Hybrid Inverter";
    } else if (load <= 2500) {
        inverter = "3.5kVA Hybrid Inverter";
    } else if (load <= 4000) {
        inverter = "5kVA Hybrid Inverter";
    } else if (load <= 6500) {
        inverter = "8kVA Hybrid Inverter";
    } else if (load <= 8500) {
        inverter = "10kVA Hybrid Inverter";
    } else {
        inverter = "15kVA Hybrid Inverter";
    }

    // Battery Recommendation
    let battery = Math.ceil(energy / 5000);

    // Solar Panel Recommendation (585W)
    let panels = Math.ceil(load / 585);

    result.innerHTML = `
        <h3>Calculation Result</h3>

        <p><strong>Total Load:</strong> ${load} W</p>

        <p><strong>Daily Energy:</strong> ${energy} Wh (${energyKwh} kWh)</p>

        <p><strong>Recommended Inverter:</strong> ${inverter}</p>

        <p><strong>Battery Suggestion:</strong> ${battery} × 5.12kWh Lithium Battery</p>

        <p><strong>Solar Panels:</strong> ${panels} × 585W Panels</p>

        <hr>

        <p style="color:green;">
        ✔ System recommendation generated successfully.
        </p>
    `;
}