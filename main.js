function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './navbar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navbar').innerHTML = xhr.responseText;
        }
        loadFooter();
    };
    xhr.send();
}
function loadNavbar_mob() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './navbar-mobile.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navbar-mobile').innerHTML = xhr.responseText;
            loadFooter();
        }
    };
    xhr.send();
}


function loadWrapper() {
    loadNavbar();
    loadFooter();
    loadNavbar_mob();
    loadFooter_mob();
    addEvent()
    updateFavicon();
}

var isMobile = false
if (window.innerWidth < 1000) {
    isMobile = true;
}
window.addEventListener("resize", function (event) {
    let screen_width = event.target.innerWidth;
    let location = event.target.location.href
    if (screen_width < 1000 && !isMobile) {
        isMobile = true
        switchScreen(isMobile, location)
    } else if (screen_width >= 1000 && isMobile) {
        isMobile = false
        switchScreen(isMobile, location)
    }
})

function switchScreen(isMobile, location) {
    console.log(location);
    let split = location.split('/');
    let name = split[split.length - 1]
    if (isMobile) {
        if (!name.includes('mobile')) {
            if (name == "") {
                window.location.href = 'index-mobile.html'
            } else {
                window.location.href = name.split('.')[0] + '-mobile.html';
            }
        }
    } else {
        if (name == "") {
            window.location.href = 'index.html'
        } else if (name.includes('mobile')) {
            window.location.href = name.slice(0, name.lastIndexOf('-')) + '.html'
        }
    }
}

function loadJs() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
}
function loadFooter() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './footer.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('footer').innerHTML = xhr.responseText;
        }
        loadJsonData();
    };
    xhr.send();
}
function loadFooter_mob() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './footer-mobile.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('footer-mobile').innerHTML = xhr.responseText;
        }
        loadJsonData();
    };
    xhr.send();
}

function updateFavicon() {
    const favicon = document.getElementById('favicon');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.matches) {
        favicon.href = 'favicon-dark.svg';
    } else {
        favicon.href = 'favicon-light.svg';
    }
}

var jsonData = null;
function loadJsonData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './site-data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            jsonData = JSON.parse(xhr.responseText);
            replaceInnerHTMLWithJSONValues();
        }
    };
    xhr.send();

}


function getValue(query) {
    const keys = query.split('.');
    let index = null;
    if (!isNaN(keys[keys.length - 1])) {
        index = parseInt(keys.pop());
    }
    let value = jsonData;
    for (const key of keys) {
        if (value.hasOwnProperty(key)) {
            value = value[key];
        } else {
            return null;
        }
    }
    if (index !== null && Array.isArray(value)) {
        if (index >= 0 && index < value.length) {
            return value[index];
        } else {
            return null;
        }
    } else {
        return value;
    }
}

function replaceInnerHTMLWithJSONValues() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        const query = element.getAttribute('data-query');
        if (query) {
            // Set Alt values of images
            if (element.getAttribute('data-attribute') === 'alt') {
                const altValue = getValue(query);
                element.setAttribute('alt', altValue);
            } else {
                // set innerhtml & href
                const value = getValue(query);
                if (value !== null && value !== undefined) {
                    element.innerHTML = value;
                }
                if (element.getAttribute('data-attribute') === 'href') {
                    const linkQuery = query.split('.').splice(0, query.split('.').length - 1).join('.').concat('.url');
                    const hrefValue = getValue(linkQuery);
                    element.setAttribute('href', hrefValue);
                }
                if (element.getAttribute('data-target') === 'target') {
                    const targetQuery = query.split('.').splice(0, query.split('.').length - 1).join('.').concat('.target');
                    const targetValue = getValue(targetQuery);
                    element.setAttribute('target', targetValue);
                }
            }
        }
    });
    navActiveLink();
}

function navActiveLink() {
    var currentPath = window.location.pathname;
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link')
    navbarLinks.forEach(function (link) {
        var linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
            link.classList.add('active-nav');
        }
    });
}
// Horizontal Lines with animations
const images = [["./img/horizontal-lines-2.svg", "./img/horizontal-lines-3.svg", "./img/horizontal-lines-4.svg"]];
let currentIndex = 0;
let imageInterval;

function startImageLoop(wrapper) {
    const index = Array.from(wrapper.parentNode.children).indexOf(wrapper);
    imageInterval = setInterval(() => changeImage(wrapper, index), 200);
}

function changeImage(wrapper, index) {
    const mainImage = wrapper.querySelector(".main-image");
    mainImage.src = images[index][currentIndex];
    currentIndex = (currentIndex + 1) % images[index].length;
    if (currentIndex === 0) {
        clearInterval(imageInterval);
    }
}

function resetImage(wrapper) {
    clearInterval(imageInterval);
    currentIndex = 0;
    const mainImage = wrapper.querySelector(".main-image");
    mainImage.src = "./img/horizontal-lines.svg";
}

function openNav() {
    document.getElementById("navbarToggleMain").style.right = "0%";
    document.getElementById("navbarToggle-back").style.display = "block";
}
function closeNav() {
    document.getElementById("navbarToggleMain").style.right = "-75%";
    document.getElementById("navbarToggle-back").style.display = "none";
}
// MOBILE
// ACCORDION
function addEvent() {
    var acc = document.getElementsByClassName("timeLineHeader");
    var i;
    for (i = 0; i < acc.length; i++) {
        var panel = acc[i].nextSibling.nextSibling.getElementsByClassName('timelineBorder')[0].firstChild.nextSibling
        panel.style.maxHeight = '0px'
        acc[i].addEventListener("click", function () {
            for (i = 0; i < acc.length; i++) {
                if (acc[i] != this) {
                    var panel = acc[i].nextSibling.nextSibling.getElementsByClassName('timelineBorder')[0].firstChild.nextSibling
                    panel.style.visibility = 'hidden'
                    panel.style.maxHeight = "0px";
                    panel.style.opacity = '0'
                }
            }
            this.classList.toggle("active");
            var panel = this.nextSibling.nextSibling.getElementsByClassName('timelineBorder')[0].firstChild.nextSibling
            if (panel.style.maxHeight != '0px') {
                panel.style.visibility = 'hidden'
                panel.style.maxHeight = "0px";
                panel.style.opacity = '0'
                // rotate icon
                this.getElementsByClassName('arrow-icon')[0].firstChild.nextSibling.style.transform = "rotate(0deg)"
            } else {
                panel.style.display = 'block'
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.visibility = 'visible'
                panel.style.opacity = '1'
                this.getElementsByClassName('arrow-icon')[0].firstChild.nextSibling.style.transform = "rotate(-180deg)"
            }

        });
    }
}

function scrollToContent(id) {
    $('html,body').animate({
        scrollTop: $('#' + id).offset().top
    }, 'fast');
}