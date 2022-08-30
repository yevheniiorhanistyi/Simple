
const trigger = document.querySelectorAll('.faq-accordion__item-trigger');

const content = document.querySelectorAll('.faq-accordion__item-content');

const links = document.querySelectorAll('.nav-wrapper__item-link');

links.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.btn-burger').classList.remove('btn-burger--active');
        document.querySelector('.section-header').classList.remove('section-header--active-nav');
        showScroll();
    });
});

trigger.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function (event) {
        let currentLink = item;
        let tabId = currentLink.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        item.classList.toggle('faq-accordion__item-trigger--active');
        currentTab.classList.toggle('faq-accordion__item-content--active');
    });
}


document.querySelector('.btn-burger').addEventListener('click', (event) => {
    document.querySelector('.btn-burger').classList.toggle('btn-burger--active');
    const header = document.querySelector('.section-header');

    header.classList.toggle('section-header--active-nav');

    if (header.classList.contains('section-header--active-nav')) {
        hideScroll();
    }
    else {
        showScroll();
    }
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    document.getElementById('main-navigation').style.paddingRight = scrollWidth;
};
const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    document.getElementById('main-navigation').style.paddingRight = '';
};

const resetNav = () => {
    document.querySelector('.section-header').classList.remove('section-header--active-nav');
    showScroll();
};

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {

    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
};

new Swiper('.section-hero-image', {
    loop: true,

    pagination: {
        el: '.section-hero-image .dots',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
    },
});

new Swiper('.slider-blog-container', {
    autoplay: true,
    speed: 1000,
    grabCursor: true,
    loop: true,

    pagination: {
        el: '.section-blog .dots',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.slider-quotes-container', {
    autoplay: true,
    speed: 1000,
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.section-quotes .dots',
        clickable: true,
    },
});

const time = 1000;
const step = 1;

function outNum(num, elem) {
    let l = document.querySelector('#' + elem);
    let n = 1;
    if (num > 3000) {
        n = 2900;
    }
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n >= num) {
            clearInterval(interval);
        }
        if (num < 100) {
            l.innerHTML = n + '%';
        }
        else {
            l.innerHTML = n;
        }
    }, t);
}


let icon = document.querySelectorAll('.section-stats__icon');
let count = 0;
let pageHeight = document.documentElement.scrollHeight;

window.addEventListener('scroll', trackScroll, { passive: true });


function trackScroll() {
    let scrolled = window.pageYOffset;
    let scrolledPercent = Math.round((scrolled * 100) / pageHeight);
    let links = document.querySelectorAll('.nav-wrapper__item-link');

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('nav-wrapper__item-link--active');
    }
    if (scrolledPercent >= 30 && scrolledPercent < 38 && count < 1) {
        outNum(89, "statsLeftNumber");
        outNum(3123, "statsRightNumber");
        for (let i = 0; i < icon.length; i++) {
            icon[i].classList.add('section-stats__icon--active');
        }
        count++;
    }

    if (scrolledPercent <= 12 && scrolledPercent >= 0) {
        document.querySelector('#home').classList.add('nav-wrapper__item-link--active');
    }
    else if (scrolledPercent <= 35 && scrolledPercent >= 22) {
        document.querySelector('#features').classList.add('nav-wrapper__item-link--active');
    }
    else if (scrolledPercent <= 55 && scrolledPercent >= 39) {
        document.querySelector('#blog').classList.add('nav-wrapper__item-link--active');
    }
    else if (scrolledPercent <= 75 && scrolledPercent >= 63) {
        document.querySelector('#documentation').classList.add('nav-wrapper__item-link--active');
    }
    else if (scrolledPercent <= 85 && scrolledPercent >= 74) {
        document.querySelector('#pricing').classList.add('nav-wrapper__item-link--active');
    }

}
