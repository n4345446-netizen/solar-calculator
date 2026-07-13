function calculate() {

    const customer = document.getElementById("customer").value;
    const location = document.getElementById("location").value;
    const batteryType = document.getElementById("batteryType").value;

    const bulb = Number(document.getElementById("bulb").value) * 10;
    const fan = Number(document.getElementById("fan").value) * 75;
    const tv = Number(document.getElementById("tv").value) * 120;
    const fridge = Number(document.getElementById("fridge").value) * 250;
    const freezer = Number(document.getElementById("freezer").value) * 350;
    const laptop = Number(document.getElementById("laptop").value) * 90;
    const cctv = Number(document.getElementById("cctv").value) * 25;
    const router = Number(document.getElementById("router").value) * 20;
    const hours = Number(document.getElementById("hours").value);

    if (hours <= 0) {
        alert("Please enter the average hours of use.");
        return;
    }

    const totalLoad =
        bulb +
        fan +
        tv +
        fridge +
        freezer +
        laptop +
        cctv +
        router;

    const dailyEnergy = totalLoad * hours;
    const dailyKwh = (dailyEnergy / 1000).toFixed(2);

    let inverter;

    if (totalLoad <= 1000)
        inverter = "1.5kVA Hybrid Inverter";
    else if (totalLoad <= 2500)
        inverter = "3.5kVA Hybrid Inverter";
    else if (totalLoad <= 4000)
        inverter = "5kVA Hybrid Inverter";
    else if (totalLoad <= 6500)
        inverter = "8kVA Hybrid Inverter";
    else if (totalLoad <= 8500)
        inverter = "10kVA Hybrid Inverter";
    else
        inverter = "15kVA Hybrid Inverter";

    const battery =
        batteryType === "Lithium"
            ? Math.ceil(dailyEnergy / 5120)
            : Math.ceil(dailyEnergy / 2400);

    const panels = Math.ceil(dailyEnergy / 2500);

    document.getElementById("result").innerHTML = `
        <div class="result-card">

            <h2>⚡ CHIPS SOLAR Recommendation</h2>

            <hr>

            <p><strong>Customer:</strong> ${customer}</p>

            <p><strong>Location:</strong> ${location}</p>

            <p><strong>Total Load:</strong> ${totalLoad} W</p>

            <p><strong>Daily Energy:</strong> ${dailyKwh} kWh</p>

            <p><strong>Recommended Inverter:</strong> ${inverter}</p>

            <p><strong>Battery Type:</strong> ${batteryType}</p>

            <p><strong>Recommended Batteries:</strong> ${battery}</p>

            <p><strong>Recommended Solar Panels:</strong> ${panels} × 585W</p>

            <hr>

         <h3 style="color:green;">
✔ System Recommendation Complete
</h3>

<br>

<button class="quote-btn">
Generate Quote
</button>

<button class="pdf-btn"
onclick="window.print()">

Download PDF

</button>

<a
class="whatsapp-btn"

target="_blank"

href="https://wa.me/2347059640476?text=
Hello CHIPS SOLAR.%0A
Customer:%20${customer}%0A
Location:%20${location}%0A
Total Load:%20${totalLoad}%20W%0A
Energy:%20${dailyKwh}%20kWh%0A
Recommended:%20${inverter}%0A
Battery:%20${battery}%20${batteryType}%0A
Panels:%20${panels}%20x%20585W">

Send To WhatsApp

</a>

</div>
`;
.quote-btn{

background:#FFC107;

color:#000;

padding:15px 30px;

border:none;

border-radius:8px;

font-size:16px;

font-weight:bold;

margin:10px;

cursor:pointer;

}

.pdf-btn{

background:#0056b3;

color:white;

padding:15px 30px;

border:none;

border-radius:8px;

font-size:16px;

margin:10px;

cursor:pointer;

}

.whatsapp-btn{

display:inline-block;

background:#25D366;

color:white;

padding:15px 30px;

text-decoration:none;

border-radius:8px;

margin:10px;

font-weight:bold;

}

.quote-btn:hover,

.pdf-btn:hover,

.whatsapp-btn:hover{

transform:scale(1.05);

transition:.3s;

}