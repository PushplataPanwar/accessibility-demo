var root = document.documentElement;
var previousLinkHref = null;
var nextLinkHref = null;

 //  SIDEBAR DATA
 const sidebarLinks = [{
    href: "index.html",
    text: "Basic Accessibility",
    iconClass: "fa fa-tachometer-alt",
},
{
    href: "button.html",
    text: "Indroduction",
    iconClass: "fa fa-laptop",
    dropdown: [{
        iconClass: "fa fa-laptop",
        href: "button.html",
        text: "Buttons"
    },
    {
        iconClass: "fa fa-laptop",
        href: "chart.html",
        text: "Chart"
    },
    ],
},
{
    href: "404.html",
    text: "Dropdown 2",
    iconClass: "fa fa-laptop",
    dropdown: [{
        iconClass: "fa fa-laptop",
        href: "404.html",
        text: "404"
    },
    {
        iconClass: "fa fa-laptop",
        href: "widget.html",
        text: "Widget"
    },
    ],
},
{
    href: "table.html",
    text: "Table",
    iconClass: "fa fa-tachometer-alt",
},
{
    href: "signin.html",
    text: "signin",
    iconClass: "fa fa-tachometer-alt",
},
];


// Function to update CSS variables
function updateCSSVariables(primary, light, dark) {
    root.style.setProperty("--primary", primary);
    root.style.setProperty("--light", light);
    root.style.setProperty("--dark", dark);
}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($("#spinner").length > 0) {
                $("#spinner").removeClass("show");
            }
        }, 1000); // 2000 milliseconds = 2 seconds
    };
    spinner();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo");
        return false;
    });

   

    // Function to generate sidebar HTML
    function generateSidebarHTML(sidebarLinks, currentPath) {
        return `
        <nav class="navbar bg-light navbar-light">
            <a href="index.html" class="navbar-brand mx-4 mb-3" tabindex="1">
                <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>Accessibility </h3>
            </a>
            <div class="d-flex align-items-center ms-4 mb-4" tabindex="0">
                <div class="ms-3">
                    <h6 class="mb-0" >Accessibility Guidelines</h6>
                </div>
            </div>
            <div class="navbar-nav w-100">
                ${generateLinksHTML(sidebarLinks, currentPath)}
            </div>
        </nav>
    `;
    }


    function generateLinksHTML(links, currentPath) {
        console.log(currentPath, "dgsd")
        return links
            .map((link, index, array) => {
                if (link.dropdown) {
                    const isActiveDropdown = link.dropdown.some(
                        (subLink) => subLink.href === currentPath
                    );
                    const dropdownItemsHTML = link.dropdown
                        .map((subLink) => {
                            const isActive = subLink.href === currentPath;
                            if (isActive) {
                                previousLinkHref = index > 0 ? array[index - 1].href : null;
                                nextLinkHref =
                                    index < array.length - 1 ? array[index + 1].href : null;
                            }
                            return `<a href="${subLink.href}" class="dropdown-item ${isActive ? "active" : ""
                                }" tabindex="0">${subLink.text}</a>`;
                        })
                        .join("");

                    return `
                <div class="nav-item dropdown ${isActiveDropdown ? "active" : ""
                        }" tabindex="0">
                    <a href="#" class="nav-link dropdown-toggle ${isActiveDropdown ? "active" : ""
                        }" data-bs-toggle="dropdown" tabindex="0"><i class="${link.iconClass
                        } me-2"></i>${link.text}</a>
                    <div class="dropdown-menu bg-transparent border-0 ${isActiveDropdown ? "show" : ""
                        }">
                        ${dropdownItemsHTML}
                    </div>
                </div>
            `;
                } else {
                    const isActive = link.href === currentPath;
                    if (isActive && index > 0) {
                        previousLinkHref = array[index - 1].href;
                    }
                    if (isActive && index < array.length - 1) {
                        nextLinkHref = array[index + 1].href;
                    }
                    return `<a href="${link.href
                        }" tabindex="0" class="nav-item nav-link ${isActive ? "active" : ""
                        }"><i class="${link.iconClass} me-2"></i>${link.text}</a>`;
                }
            })
            .join("");
    }


    function generateSidebarHTML(sidebarLinks, currentPath) {
        return `
        <nav class="navbar bg-light navbar-light">
            <a href="index.html" class="navbar-brand mx-4 mb-3" tabindex="0" aria-label="Home">
              <img src="img/logo.jpg" class="img-fluid"> 
            </a>
            <div class="d-flex align-items-center ms-4 mb-4" tabindex="0">
            
            </div>
            <div class="navbar-nav w-100">
                ${generateLinksHTML(sidebarLinks, currentPath)}
            </div>
        </nav>
    `;
    }



    //     function generateLinksHTML(links, currentPath) {
    //         console.log(currentPath, "kjsdgsdjkgkfksdfhsk")
    //         return links
    //             .map((link, index, array) => {
    //                 if (link.dropdown) {
    //                     const isActiveDropdown = link.dropdown.some(
    //                         (subLink) => subLink.href === currentPath
    //                     );
    //                     const dropdownItemsHTML = link.dropdown
    //                         .map((subLink) => {
    //                             const isActive = subLink.href === currentPath;
    //                             return `<a href="${subLink.href}" class="dropdown-item">${subLink.text}</a>`;
    //                         })
    //                         .join("");

    //                     return `


    //  <div class="nav-item dropdown">
    //  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="far fa-file-alt me-2"></i>Pages</a>
    //  <div class="dropdown-menu bg-transparent border-0 " data-bs-popper="none">
    //    ${dropdownItemsHTML}
    //  </div>
    // </div>
    //             `;
    //                 } else {
    //                     const isActive = link.href === currentPath;
    //                     return `<a href="${link.href}" tabindex="0" class="nav-item nav-link ${isActive ? "active" : ""}">
    //                     <i class="${link.iconClass} me-2"></i>${link.text}
    //                 </a>`;
    //                 }
    //             })
    //             .join("");
    //     }
    function generateLinksHTML(links, currentPath) {
        console.log(currentPath, "dgsd");
        
        return links
            .map((link, index, array) => {
                if (link.dropdown) {
                    const isActiveDropdown = link.dropdown.some(
                        (subLink) => subLink.href === currentPath
                    );
                    const dropdownItemsHTML = link.dropdown
                        .map((subLink) => {
                            const isActive = subLink.href === currentPath;
                            return `<a href="${subLink.href}" class="dropdown-item ${isActive ? "active" : ""
                                }" tabindex="0">${subLink.text}</a>`;
                        })
                        .join("");
    
                    // Assign previous and next links based on the position of the dropdown link itself
                    if (isActiveDropdown) {
                        const dropdownIndex = link.dropdown.findIndex(subLink => subLink.href === currentPath);
                        previousLinkHref = dropdownIndex > 0 ? link.dropdown[dropdownIndex - 1].href : null;
                       
                        nextLinkHref = dropdownIndex < link.dropdown.length - 1 ? link.dropdown[dropdownIndex + 1].href : null;
                        if (previousLinkHref === null && index > 0) {
                            previousLinkHref = array[index - 1].href;
                        }
                        if (nextLinkHref === null && index < array.length - 1) {
                            nextLinkHref = array[index + 1].href;
                        }
    
                        console.log(previousLinkHref, nextLinkHref, "test");
                    }
    
                    return `
                        <div class="nav-item dropdown ${isActiveDropdown ? 'show' : ''} ">
                            <a href="#" class="nav-link dropdown-toggle  ${isActiveDropdown ? 'show' : ''}" data-bs-toggle="dropdown" aria-expanded="${isActiveDropdown}">
                                <i class="far fa-file-alt me-2"></i>${link.text}
                            </a>
                            <div class="dropdown-menu bg-transparent border-0 ${isActiveDropdown ? 'show' : ''} " data-bs-popper="none">
                                ${dropdownItemsHTML}
                            </div>
                        </div>
                    `;
                } else {
                    const isActive = link.href === currentPath;
                    if (isActive && index > 0) {
                        previousLinkHref = array[index - 1].href;
                    }
                    if (index < array.length - 1) {
                        nextLinkHref = array[index + 1].href;
                    }
                    return `<a href="${link.href}" tabindex="0" class="nav-item nav-link ${isActive ? "active" : ""
                        }"><i class="${link.iconClass} me-2"></i>${link.text}</a>`;
                }
            })
            .join("");
    }



    $(document).ready(function () {
        let currentPath = window.location.pathname;
        currentPath = currentPath.replace(/^\/|\/$/g, "");
        console.log(currentPath, "currentPath");

        // Extract the filename
        const lastIndex = currentPath.lastIndexOf('/');
        const filename = currentPath.substring(lastIndex + 1);
        $(".sidebar_container").html(
            generateSidebarHTML(sidebarLinks, filename)
        );
        $(".header_container").html(header);
        $(".navigation_pages").html(nav_pages);

        $("#previousButton").click(function() {
            window.location.href = previousLinkHref;
        });
        if(previousLinkHref == null){
            $("#previousButton").attr('disabled', true)
        }
        $("#nextButton").click(function() {
            window.location.href = nextLinkHref;
        });
        console.log(nextLinkHref, previousLinkHref, "NEXT X", "PREV");
    });

    // Example usage:
    // const sidebarContainer = document.getElementById('sidebar-container');
    // sidebarContainer.innerHTML = generateSidebarHTML(sidebarLinks);

    const header = `<nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-2">
<a href="index.html" class="navbar-brand d-flex d-lg-none me-4"  tabindex="1">
    <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
</a>
<a href="#" class="sidebar-toggler flex-shrink-0"  tabindex="1">
    <i class="fa fa-bars"></i>
</a>

<form class="d-none d-md-flex ms-4">
    <input class="form-control border-0" type="search" placeholder="Search"  tabindex="1">
</form>
</nav>`;


    const nav_pages = `<div class="row " role="navigation" aria-label="Pagination">
<div class="col-md-12 d-flex justify-content-between">
    <button
        type="button"
        class="btn btn-lg btn-primary m-2"
        id="previousButton"
        aria-label="Previous Page"
    >
        Prev
    </button>
    <button
        type="button"
        class="btn btn-lg btn-primary m-2"
        id="nextButton"
        aria-label="Next Page"
    >
        Next
    </button>
</div>
</div>`

    // Sidebar Toggler
    $(document).ready(function () {
        $(".sidebar-toggler").click(function () {
            $(".sidebar, .content").toggleClass("open");
            return false;
        });
    });

    // Progress Bar
    $(".pg-bar").waypoint(
        function () {
            $(".progress .progress-bar").each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
        }, {
        offset: "80%"
    }
    );

    // Calender
    $("#calender").datetimepicker({
        inline: true,
        format: "L",
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false,
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
                backgroundColor: "rgba(0, 156, 255, .7)",
            },
            {
                label: "UK",
                data: [8, 35, 40, 60, 70, 55, 75],
                backgroundColor: "rgba(0, 156, 255, .5)",
            },
            {
                label: "AU",
                data: [12, 25, 45, 55, 65, 70, 60],
                backgroundColor: "rgba(0, 156, 255, .3)",
            },
            ],
        },
        options: {
            responsive: true,
        },
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
                fill: true,
            },
            {
                label: "Revenue",
                data: [99, 135, 170, 130, 190, 180, 270],
                backgroundColor: "rgba(0, 156, 255, .3)",
                fill: true,
            },
            ],
        },
        options: {
            responsive: true,
        },
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
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
            },],
        },
        options: {
            responsive: true,
        },
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
                    "rgba(0, 156, 255, .3)",
                ],
                data: [55, 49, 44, 24, 15],
            },],
        },
        options: {
            responsive: true,
        },
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
                    "rgba(0, 156, 255, .3)",
                ],
                data: [55, 49, 44, 24, 15],
            },],
        },
        options: {
            responsive: true,
        },
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
                    "rgba(0, 156, 255, .3)",
                ],
                data: [55, 49, 44, 24, 15],
            },],
        },
        options: {
            responsive: true,
        },
    });
})(jQuery);