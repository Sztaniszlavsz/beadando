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

    let price1;

    switch (cityCategory) {
        case 'category1':
            price1 = 1;
            break;
        case 'category2':
            price1 = 1.1;
            break;
        case 'category3':
            price1 = 1.2;
            break;
    }

    let price2;
    switch (serviceType) {
        case 'mowing':
            price2 = 1.3;
            break;
        case 'trimming':
            price2 = 0.6;
            break;
        case 'both':
            price2 = 1.5;
            break;
    }

    let ok = 1
    let price3;
    if (squareMeters <= 500) {
        price3 = 12000;
    } else if (squareMeters > 500 && squareMeters <= 1000) {
        price3 = 20000;
    } else if (squareMeters > 1000 && squareMeters <= 2000) {
        price3 = 32000;
    } else if (squareMeters > 2000){
        price3 = 0 
    }

    if (price3 != 0){
        const totalPrice = price2 * price1 * price3;
        document.getElementById('result').innerText = `Az összes költség: ${Math.ceil(totalPrice)} Ft`;
    } else if (price3 == 0){
        document.getElementById('result').innerText = `A megadott négyzetméter túl nagy!`;
    }
}
