$(function () {
    var color = "";
    var niveau = '<i class="fas fa-star"></i>';

    // ajoute les étoiles
    if (competences.index === 1) {
        color = "red";
        niveau = '<i class="fas fa-star ' + color + '"></i>';
        niveau = niveau;

    }
    else if (competences.index === 2) {
        color = "red";
        niveau = '<i class="fas fa-star ' + color + '"></i>';
        niveau = niveau + niveau;

    }
    else if (competences.index === 3) {
        color = "green";
        niveau = '<i class="fas fa-star ' + color + '"></i>';
        niveau = niveau + niveau + niveau;

    }
    else if (competences.index === 4) {
        color = "green";
        niveau = '<i class="fas fa-star ' + color + '"></i>';
        niveau = niveau + niveau + niveau + niveau;

    }
    else if (competences.index === 5) {
        color = "greendark";
        niveau = '<i class="fas fa-star ' + color + '"></i>';
        niveau = niveau + niveau + niveau + niveau + niveau;

    }
    else {
        color = "greendark";
        niveau = '<i class="fas fa-star ' + color + '"></i>';
        niveau = niveau + niveau + niveau + niveau + niveau + niveau;

    }

    $('#etoile').append('' + niveau + '');

});