async function loadCSV(tableId, filePath) {
    const tbody = document.getElementById(tableId);

    if (!tbody) return; // Tabelle existiert nicht

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            tbody.innerHTML = `
                <tr><td colspan="3" style="text-align:center;color:#999;">Noch keine Ergebnisse verfügbar</td></tr>
            `;
            return;
        }

        const csvText = await response.text();
        const lines = csvText.trim().split("\n");
        const rows = lines.map(line => line.split(","));

        tbody.innerHTML = "";

        rows.slice(1).forEach(cols => {
            const tr = document.createElement("tr");
            cols.forEach(col => {
                const td = document.createElement("td");
                td.textContent = col.trim();
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = `
                <tr><td colspan="3" style="text-align:center;color:#999;">Noch keine Ergebnisse verfügbar</td></tr>
            `;
        }

    } catch (error) {
        console.error("Fehler beim Laden:", filePath, error);
        tbody.innerHTML = `
            <tr><td colspan="3" style="text-align:center;color:#999;">Fehler beim Laden</td></tr>
        `;
    }
}

// Tabellen automatisch mit CSV füllen
loadCSV("kreismeisterschaft-table", "../data/kreismeisterschaft-2026.csv");
loadCSV("weltmeisterschaft-table", "../data/weltmeisterschaft-2026.csv");
loadCSV("winterspiele-table", "../data/winterspiele-2025.csv");
loadCSV("sommerspiele-table", "../data/sommerspiele-2026.csv");

