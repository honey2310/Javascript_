const tBody = document.getElementById("tBody");

function CovidApi(reg) {
  reg.map((data, index) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");

    td1.textContent = index + 1;
    tr.appendChild(td1);

    td2.textContent = data.loc;
    tr.appendChild(td2);

    td3.textContent = data.confirmedCasesIndian;
    tr.appendChild(td3);

    td4.textContent = data.confirmedCasesForeign;
    tr.appendChild(td4);

    td5.textContent = data.discharged;
    tr.appendChild(td5);

    td6.textContent = data.deaths;
    tr.appendChild(td6);

    td7.textContent = data.totalConfirmed;
    tr.appendChild(td7);

    tBody.appendChild(tr)
  });
}

fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then((res) => res.json())
  .then((data) => {
    CovidApi(data.data.regional);
  });
