// Fonction pour gérer les statuts des véhicules
const vehicleButtons = document.querySelectorAll('.vehicle-button');

vehicleButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            this.textContent = 'Disponible';
        } else {
            this.classList.add('active');
            this.textContent = 'En Intervention';
        }
    });
});

// Fonction pour gérer la prise et fin de service
document.getElementById('prise-service-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;

    fetch('/prise-service', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => alert('Erreur : ' + error));
});

document.getElementById('fin-service-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom-fin').value;

    fetch('/fin-service', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => alert('Erreur : ' + error));
});

// Fonction pour gérer l'enregistrement des gardes
document.getElementById('garde-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom-garde').value;
    const horaire = document.getElementById('horaire-garde').value;

    fetch('/enregistrement-garde', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom, horaire })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => alert('Erreur : ' + error));
});

