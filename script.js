document.addEventListener('DOMContentLoaded', function () {
    const servicesButton = document.querySelector('#dropdown-id .dropdown-button');
    const servicesContent = document.querySelector('#dropdown-id .dropdown-content');
    const servicesArrow = document.querySelector('#dropdown-id .arrow');

    servicesButton.addEventListener('mouseenter', function () {
        servicesButton.classList.add('hovered');
    });

    servicesButton.addEventListener('mouseleave', function () {
        servicesButton.classList.remove('hovered');
    });

    servicesButton.addEventListener('click', function () {
        servicesContent.classList.toggle('show');
        servicesButton.classList.toggle('selected');
        servicesArrow.classList.toggle('selected')
    });

    window.addEventListener('click', function (event) {
        if (!servicesButton.contains(event.target) && !servicesContent.contains(event.target)) {
            servicesContent.classList.remove('show');
            servicesButton.classList.remove('selected');
            servicesArrow.classList.remove('selected')
        }
    });
});

function calculatePrice() {
    const squareMeters = document.getElementById('squareMeters').value;
    const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
    const cityCategory = document.getElementById('city').value;

    let priceMultiplier;

    switch (cityCategory) {
        case 'category1':
            priceMultiplier = 1;
            break;
        case 'category2':
            priceMultiplier = 1.1;
            break;
        case 'category3':
            priceMultiplier = 1.2;
            break;
    }

    let basePrice;
    switch (serviceType) {
        case 'mowing':
            basePrice = 1.3;
            break;
        case 'trimming':
            basePrice = 0.6;
            break;
        case 'both':
            basePrice = 1.5;
            break;
    }

    let ok = 1
    let squareMeterRate;
    if (squareMeters <= 500) {
        squareMeterRate = 12000;
    } else if (squareMeters > 500 && squareMeters <= 1000) {
        squareMeterRate = 20000;
    } else if (squareMeters > 1000 && squareMeters <= 2000) {
        squareMeterRate = 32000;
    } else if (squareMeters > 2000){
        ok = 0 
    }

    if (ok == 1){
        const totalPrice = basePrice * priceMultiplier * squareMeterRate;
        document.getElementById('result').innerText = `Az összes költség: ${Math.ceil(totalPrice)} Ft`;
    } else if (ok == 0){
        document.getElementById('result').innerText = `A megadott négyzetméter túl nagy!`;
    }
}
