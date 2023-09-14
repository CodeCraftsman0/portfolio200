(function () {

    var slidersContainer = document.querySelector('.sliders-container');

    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [0, 9],
        rangeContent: function (i) {
            return '0' + i;
        },
        style: {
            transform: [{ scale: [0.4, 1] }],
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the titles slider
    var titles = [
        'Yogeswara-Yoga',
        'Shops-Smart',
        'CoderCode',
        'Sweet-Scope',
        'Service',
        'Garden-Gems-Galore',
        'Ecommerce',
        'Coffee',
        'Weather2Day',
        'WanderLodge'
    ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 9],
        rangeContent: function (i) {
            return '<h3>' + titles[i] + '</h3>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the links slider
    // var msLinks = new MomentumSlider({
    //     el: slidersContainer,
    //     cssClass: 'ms--links',
    //     range: [0, 5],
    //     rangeContent: function () {
    //         return '<a href="#" class="ms-slide__link">View Case</a>';
    //     },
    //     vertical: true,
    //     interactive: false
    // });




    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 9],
        rangeContent: function (index, value) {
            var link;
            switch (index) {
                case 0:
                    link = '<a href="https://yogeswara-yoga.netlify.app" class="ms-slide__link">View Case 00</a>';
                    break;
                case 1:
                    link = '<a href="https://shops-smart.netlify.app" class="ms-slide__link">View Case 01</a>';
                    break;
                case 2:
                    link = '<a href="https://codercode.netlify.app" class="ms-slide__link">View Case 02</a>';
                    break;
                case 3:
                    link = '<a href="https://sweet-scope.netlify.app" class="ms-slide__link">View Case 03</a>';
                    break;
                case 4:
                    link = '<a href="https://service-code.netlify.app" class="ms-slide__link">View Case 04</a>';
                    break;
                case 5:
                    link = '<a href="https://garden-gems-galore.netlify.app" class="ms-slide__link">View Case 05</a>';
                    break;

                case 6:
                    link = '<a href="https://cart2cart.netlify.app" class="ms-slide__link">View Case 06</a>';
                    break;


                case 7:
                    link = '<a href="https://coffeco.netlify.app" class="ms-slide__link">View Case 07</a>';
                    break;

                case 8:
                    link = '<a href="https://chkweather-2day.netlify.app" class="ms-slide__link">View Case 08</a>';
                    break;

                case 9:
                        link = '<a href="https://wanderlodge.netlify.app" class="ms-slide__link">View Case 09</a>';
                        break;

                default:
                    link = '<a href="#" class="ms-slide__link">View Case 00</a>';
                    break;
            }
            return link;
        },
        vertical: true,
        interactive: false
    });













    // Get pagination items
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, 9],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{ scale: [1.5, 1] }]
            }
        },
        // Update pagination if slider change
        change: function (newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });

    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener('click', function (e) {
        if (e.target.matches('.pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });

})();