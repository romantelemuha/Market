function adjustContentPosition() {

    const mainContentSection = document.querySelector('.main_content_section');
    const detachedSection01 = document.querySelector('.detached-section-01');

    const priceQuantitySection = document.querySelector('.price_quantity_section');
    const detachedSection02 = document.querySelector('.detached-section-02');

    if (window.innerWidth > 767) {

        if (!detachedSection01.contains(mainContentSection)) {
            detachedSection01.appendChild(mainContentSection);
        }

        if (!detachedSection02.contains(priceQuantitySection)) {
            detachedSection02.appendChild(priceQuantitySection);
        }

    } else {

        const main = document.getElementById('main');
        if (!main.contains(mainContentSection)) {
            main.appendChild(mainContentSection);
        }

        const form = document.querySelector('.form_section');
        if (!form.contains(priceQuantitySection)) {
            form.appendChild(priceQuantitySection);
        }

    }
}

window.addEventListener('resize', adjustContentPosition);
document.addEventListener('DOMContentLoaded', adjustContentPosition);