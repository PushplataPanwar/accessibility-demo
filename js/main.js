var root = document.documentElement;
// Function to update CSS variables
function updateCSSVariables(primary, light, dark) {
    root.style.setProperty('--primary', primary);
    root.style.setProperty('--light', light);
    root.style.setProperty('--dark', dark);
}


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 15); // 2000 milliseconds = 2 seconds
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


// Example data for sidebar links
const sidebarLinks = [
    { 
        href: "index.html", 
        text: "Basic Accessibility", 
        iconClass: "fa fa-tachometer-alt", 
        ariaLabel: "Navigate to Basic Accessibility" 
    },
    { 
        href: "#", 
        text: "Introduction", 
        iconClass: "fa fa-laptop", 
        dropdown: [
            { 
                iconClass: "fa fa-laptop", 
                href: "button.html", 
                text: "Buttons",
                ariaLabel: "Navigate to Buttons" 
            },
            { 
                iconClass: "fa fa-laptop", 
                href: "button.html", 
                text: "Buttons",
                ariaLabel: "Navigate to Buttons" 
            }
        ]
    },
    { 
        href: "index.html", 
        text: "1 Accessibility", 
        iconClass: "fa fa-tachometer-alt", 
        ariaLabel: "Navigate to 1 Accessibility" 
    }
];


// Function to generate sidebar HTML
function generateSidebarHTML(sidebarLinks) {
    return `
        <nav class="navbar bg-light navbar-light fixed-nav">
            <a href="index.html" class="navbar-brand mx-4 mb-3">
                <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>Accessibility </h3>
            </a>
            <div class="d-flex align-items-center ms-4 mb-4">
                <div class="ms-3">
                    <h6 class="mb-0">Accessibility Guidelines</h6>
                </div>
            </div>
            <div class="navbar-nav w-100">
                ${generateLinksHTML(sidebarLinks)}
            </div>
        </nav>
    `;
}

function generateLinksHTML(links) {
    return links.map(link => {
        if (link.dropdown) {
            return `
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <i class="${link.iconClass} me-2"></i>${link.text}
                    </a>
                    <div class="dropdown-menu bg-transparent border-0" aria-labelledby="navbarDropdown">
                        ${generateDropdownLinksHTML(link.dropdown)}
                    </div>
                </div>
            `;
        } else {
            return `
                <a href="${link.href}" class="nav-item nav-link" role="button" aria-label="${link.text}">
                    <i class="${link.iconClass} me-2"></i>${link.text}
                </a>
            `;
        }
    }).join('');
}

function generateDropdownLinksHTML(links) {
    return links.map(link => `
        <a href="${link.href}" class="dropdown-item" role="menuitem" aria-label="${link.text}">
            <i class="${link.iconClass} me-2"></i>${link.text}
        </a>
    `).join('');
}


// Function to generate sidebar links HTML
function generateLinksHTML(links) {
    return links.map(link => {
        if (link.dropdown) {
            return `
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="${link.iconClass} me-2"></i>${link.text}</a>
                    <div class="dropdown-menu bg-transparent border-0">
                        ${generateLinksHTML(link.dropdown)}
                    </div>
                </div>
            `;
        } else {
            return `<a href="${link.href}" class="nav-item nav-link"><i class="${link.iconClass} me-2"></i>${link.text}</a>`;
        }
    }).join('');
}

// Example usage:
// const sidebarContainer = document.getElementById('sidebar-container');
// sidebarContainer.innerHTML = generateSidebarHTML(sidebarLinks);


    const header = `<nav class="navbar navbar-expand bg-light navbar-light fixed-top mb-4 px-4 py-0">
<a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
    <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
</a>
<a href="#" class="sidebar-toggler flex-shrink-0">
    <i class="fa fa-bars"></i>
</a>
<form class="d-none d-md-flex ms-4">
    <input class="form-control border-0" type="search" placeholder="Search">
</form>
<div class="navbar-nav align-items-center ms-auto">
    <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i class="fa fa-envelope me-lg-2"></i>
            <span class="d-none d-lg-inline-flex">Message</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                    <div class="ms-2">
                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                    </div>
                </div>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                    <div class="ms-2">
                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                    </div>
                </div>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                    <div class="ms-2">
                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                    </div>
                </div>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item text-center">See all message</a>
        </div>
    </div>
    <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i class="fa fa-bell me-lg-2"></i>
            <span class="d-none d-lg-inline-flex">Notificatin</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item text-center">See all notifications</a>
        </div>
    </div>
    <div class="nav-item dropdown">
   
        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <a href="#" class="dropdown-item">My Profile</a>
            <a href="#" class="dropdown-item">Settings</a>
            <a href="#" class="dropdown-item">Log Out</a>
        </div>
    </div>
</div>
</nav>`




    $(document).ready(function () {
        $('.sidebar_container').html(generateSidebarHTML(sidebarLinks));
        $('.header_container').html(header);
        header
    });


    // Sidebar Toggler
    $(document).ready(function () {
        $('.sidebar-toggler').click(function () {
            $('.sidebar, .content').toggleClass("open");
            return false;
        });
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "USA",
                data: [15, 30, 55, 65, 60, 80, 95],
                backgroundColor: "rgba(0, 156, 255, .7)"
            },
            {
                label: "UK",
                data: [8, 35, 40, 60, 70, 55, 75],
                backgroundColor: "rgba(0, 156, 255, .5)"
            },
            {
                label: "AU",
                data: [12, 25, 45, 55, 65, 70, 60],
                backgroundColor: "rgba(0, 156, 255, .3)"
            }
            ]
        },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "Salse",
                data: [15, 30, 55, 45, 70, 65, 85],
                backgroundColor: "rgba(0, 156, 255, .5)",
                fill: true
            },
            {
                label: "Revenue",
                data: [99, 135, 170, 130, 190, 180, 270],
                backgroundColor: "rgba(0, 156, 255, .3)",
                fill: true
            }
            ]
        },
        options: {
            responsive: true
        }
    });



    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(0, 156, 255, .3)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });




})(jQuery);

