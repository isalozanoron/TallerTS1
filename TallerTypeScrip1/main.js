import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsCell = document.getElementById('averageSeasons');
renderSeriesInTable(series);
function renderSeriesTabla(series) {
    var totalTemporadas = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var link = "<a href=\"".concat(serie.enlace, "\">").concat(serie.nombre, "</a>");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                          <td>").concat(link, "</td>\n                          <td>").concat(serie.canal, "</td>\n                          <td>").concat(serie.numTemporadas, "</td>");
        totalTemporadas += serie.numTemporadas;
        seriesTabla.appendChild(trElement);
    });
    var averageSeasons = totalTemporadas / series.length;
    PromedioTemporadas.textContent = averageSeasons.toFixed(0);
    
}
