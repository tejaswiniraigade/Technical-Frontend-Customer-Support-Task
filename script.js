document.querySelectorAll('.priceCard').forEach(card => {
    card.addEventListener('click', function(event) {
        // Collapse all other cards
        document.querySelectorAll('.priceCard').forEach(c => {
            c.classList.remove('expanded');
            c.querySelector('input[type=radio]').checked = false;
        });

        // Expand the clicked card
        this.classList.add('expanded');
        this.querySelector('input[type=radio]').checked = true;

        event.stopPropagation();
    });
});
