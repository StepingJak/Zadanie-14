$(document).ready(function () {

    const table = $('#tabela').DataTable({
        ajax: {
            url: 'studenci.json',
            dataSrc: ''
        },
        iDisplayLength: 10,
        aLengthMenu: [[10, 25, 50], [10, 25, 50]],

        dom: 'Bfrtip',
        buttons: [
            'csvHtml5',
            'pdfHtml5'
        ],

        columns: [
            { data: "ID" },
            { data: "Imię" },
            { data: "Nazwisko" },
            { data: "Wiek" },
            { data: "E-mail" },
            { data: "Kierunek" },
            { data: null, defaultContent: "<button class='usun'>Usuń</button>" },
            { data: null, defaultContent: "<button class='edytuj'>Edytuj</button>" }
        ]
    });

    $('#tabela').on('click', '.usun', function () {
        const row = table.row($(this).parents('tr'));
        const dane = row.data();
        row.remove().draw();
    });

    $('#tabela').on('click', '.edytuj', function () {
        const row = table.row($(this).parents('tr'));
        const dane = row.data();

        const noweImie = prompt("Nowe imię:", dane.Imię);
        const noweNazwisko = prompt("Nowe nazwisko:", dane.Nazwisko);
        const nowyWiek = prompt("Nowy wiek:", dane.Wiek);
        const nowyEmail = prompt("Nowy email:", dane["E-mail"]);
        const nowyKierunek = prompt("Nowy kierunek:", dane.Kierunek);

        if (noweImie && noweNazwisko && nowyWiek && nowyEmail && nowyKierunek) {
            row.data({
                ID: dane.ID,
                Imię: noweImie,
                Nazwisko: noweNazwisko,
                Wiek: nowyWiek,
                "E-mail": nowyEmail,
                Kierunek: nowyKierunek
            }).draw();
        }
    });

});
