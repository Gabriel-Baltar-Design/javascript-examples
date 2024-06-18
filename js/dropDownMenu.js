export default function dropDownMenu() {

    const dropDownMenus = document.querySelectorAll('[data-dropdown]');

    dropDownMenus.forEach(menu => {

        ['touchstart', 'click'].forEach(userEvent => {

            menu.addEventListener(userEvent, handleClick);

        });

    });

    function handleClick(event) {

        event.preventDefault();

        this.classList.toggle('active');

        outsideClick(this, ['touchstart', 'click'], () => {

            this.classList.remove('active');

        });
    }

    function outsideClick(element, events, callback) {

        const html = document.documentElement;

        const outside = 'data-outside';

        if(!element.hasAttribute(outside)) {

            events.forEach(userEvent => {

                setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick) });

            });
             
            element.setAttribute(outside, '');
            
        }
        
        function handleOutsideClick(event) {

            if(!element.contains(event.target)) {

                element.removeAttribute(outside);

                html.removeEventListener('click', handleOutsideClick);

                callback();

            }
        }
    }

}