$('.art-menu').append('<li><a id="palo-alto" href="#"><span class="l"> </span><span class="r"> </span><span class="t">Palo Alto</span></a></li>');
$('#palo-alto').click(function() {
    var currValue = localStorage['subclasses'];
    var value = prompt('Inserisci sottoclassi separate da virgola', currValue ? currValue : '');
    if (value) {
        localStorage['subclasses'] = value;
        filterSubclasses();
    }
})

function filterSubclasses() {
    var value = localStorage['subclasses'];
    if (value) {
        var subclasses = value.split(',');
        $('h2.art-postheader').text('Elenco IP Interdetti (filtro su ' + value + ')');
        if (subclasses.length) {
            var domExpr = 'tr';
            for (var i = 0; i < subclasses.length; i++) {
                domExpr += ':not(:contains("' + subclasses[i].trim() + '"))';
            }
            $(domExpr).hide();
        }
    } else {
        alert('Nessuna sottoclasse definita clicca sul menu PaloAlto');
    }
}

filterSubclasses();