/**** JSON Function */
// function loadJSON() {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200) {
//             var jsonFile = JSON.parse(this.responseText);

//             jsonFile.employees.forEach(i => {
//                 jsonFile.departments.forEach(j => {
//                     if(i.deptId == j.deptId) {
//                         console.log("Employee: " + i.firstName + " " + i.lastName + "\n" +
//                         "Department: " + j.name);
//                     }
//                 });
//             });
//         }
//     };
//     xmlhttp.open('GET', 'test.json', true);
//     xmlhttp.send();
// }

/*** ANIMATED MENU ***/
function animationMenuBtn() {
    const menuBtn = document.querySelector('.container');

    menuBtn.onclick = function () {
        this.classList.toggle('change');
    }
}


/*** ACCORDION MENU ***/
function accordionMenu() {
    const menus = document.querySelectorAll('.option');
    const icon1 = "&#xe5cf;";
    const icon2 = "&#xe5ce;";

    menus.forEach(i => {
        i.addEventListener('click', () => {
            var panel = i.nextElementSibling;
            i.classList.toggle('active');

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                i.lastElementChild.innerHTML = icon1;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                i.lastElementChild.innerHTML = icon2;
            }
        });
    });
}


/*** TAB HEADERS ***/
function tabHeaders() {
    const tabContent = document.querySelectorAll('.tabcontent');
    const tabLinks = document.querySelectorAll('.tablink');
    const cityInfo = document.querySelectorAll('.city-info');
    const cityArr = [{
            cityName: "Tokyo",
            desc: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
            img_src: "[Tokyo City](https://www.japan-guide.com/thumb/destination_tokyo.jpg)"
        },

        {
            cityName: "Paris",
            desc: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
            img_src: "[Eiffel Tower](https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg)"
        },

        {
            cityName: "London",
            desc: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
            img_src: "[London City](https://static01.nyt.com/images/2019/08/09/travel/xxhotels-london-video-promo/xxhotels-london-video-promo-threeByTwoMediumAt2X.jpg)"
        },

        {
            cityName: "Venice",
            desc: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.",
            img_src: "[Venice](https://www.cruisetradenews.com/wp-content/uploads/2019/08/venice-canal-1.jpg)"
        },
    ];

    //Onload Default Tab
    tabContent[0].style.display = "block";
    cityInfo[0].firstElementChild.innerHTML = cityArr[0].cityName;
    cityInfo[0].lastElementChild.innerHTML = cityArr[0].desc;
    tabContent[0].innerHTML += cityArr[0].img_src.replace(/\[(.*?)\]\((https.*?)\)/, '<img src="$2" alt="$1" draggable="false">');
    tabLinks[0].style.backgroundColor = "rgb(255, 116, 92)";

    tabLinks.forEach((i, index) => {
        i.addEventListener('click', () => {
            tabContent.forEach((j, index2) => {
                if (index == index2) {
                    j.style.display = "block";
                    cityInfo[index2].firstElementChild.innerHTML = cityArr[index2].cityName;
                    cityInfo[index2].lastElementChild.innerHTML = cityArr[index2].desc;
                    j.innerHTML += cityArr[index2].img_src.replace(/\[(.*?)\]\((https.*?)\)/, '<img src="$2" alt="$1" draggable="false">');

                } else {
                    j.style.display = "none";
                }
            });

            tabLinks.forEach((k, index3) => {
                if (index == index3) {
                    switch (index3) {
                        case 0:
                            k.style.backgroundColor = "rgb(255, 116, 92)";
                            break;
                        case 1:
                            k.style.backgroundColor = "rgb(80, 176, 255)";
                            break;
                        case 2:
                            k.style.backgroundColor = "rgb(143, 218, 109)";
                            break;
                        case 3:
                            k.style.backgroundColor = "rgb(188, 130, 255)";
                            break;
                    }
                } else {
                    k.style.backgroundColor = "#333";
                }
            });
        });
    });
}


/*** RESPONSIVE TOP-NAV ***/
function topNavDropMenu() {
    const moreBtn = document.getElementById('more-menu');
    const moreBtn2 = document.querySelector('.scnd-icon');
    const slideLft = document.querySelector('.slide-menu');
    const drpMenu = document.querySelector('.drop-menu');
    const icon = document.querySelector('.arrow');

    moreBtn.onclick = function () {
        drpMenu.classList.toggle('show');
        icon.classList.toggle('icon-rotate');
    }

    moreBtn2.onclick = function () {
        slideLft.classList.toggle('shown');
    }

    document.onclick = (event) => {
        if (event.target != moreBtn && event.target != icon) {
            if (drpMenu.classList.contains('show')) {
                drpMenu.classList.remove('show');
                icon.classList.remove('icon-rotate');
            }
        }
    }
}


/*** SEARCH/FILTER MENU ***/
function searchMenu() {
    const sideBar = document.querySelector('.side-bar').lastElementChild;
    const srchBar = document.querySelector('#srch-bar');

    srchBar.addEventListener('keyup', function () {
        for (let i = 0; i < sideBar.childElementCount; i++) {
            var srch = this.value.toUpperCase();
            var elmnt = sideBar.children[i].innerHTML.toUpperCase();

            if (elmnt.search(srch) > -1) {
                sideBar.children[i].style.display = "block";
            } else {
                sideBar.children[i].style.display = "none";
            }
        }
    });

    sidebarButtons();
}

function sidebarButtons() {
    const sideBtns = document.querySelectorAll('.side-buttons');
    const mainContent = document.querySelector('.main-content');

    var topics = [{
            header: "HTML Tutorial",
            article: 'HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language HTML describes the structure of a Web page HTML consists of a series of elements HTML elements tell the browser how to display the content HTML elements are represented by tags HTML tags label pieces of content such as "heading", "paragraph", "table", and so on Browsers do not display the HTML tags, but use them to render the content of the page'
        },

        {
            header: "CSS Tutorial",
            article: 'CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files'
        },

        {
            header: "JavaScript Tutorial",
            article: 'JavaScript Can Change HTML Content. One of many JavaScript HTML methods is getElementById(). JavaScript Can Change HTML Styles (CSS). JavaScript Can Hide HTML Elements. JavaScript Can Show HTML Elements'
        },

        {
            header: "PHP Tutorial",
            article: 'PHP: Hypertext Preprocessor is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.'
        },

        {
            header: "Python Tutorial",
            article: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace.'
        },

        {
            header: "jQuery Tutorial",
            article: 'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites.'
        },

        {
            header: "SQL Tutorial",
            article: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems.'
        },

        {
            header: "Bootstrap Tutorial",
            article: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.'
        },

        {
            header: "Node.js Tutorial",
            article: 'Node.js is an open source server environment. A common task for a web server can be to open a file on the server and return the content to the client. Node.js eliminates the waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.'
        },
    ];

    //Default Values
    sideBtns[0].className += " side-bar-active";
    mainContent.firstElementChild.innerHTML = topics[0].header;
    mainContent.lastElementChild.innerHTML = topics[0].article;

    sideBtns.forEach((i, index) => {
        i.addEventListener('click', () => {
            mainContent.firstElementChild.innerHTML = topics[index].header;
            mainContent.lastElementChild.innerHTML = topics[index].article;

            sideBtns.forEach(j => {
                j.className = j.className.replace(" side-bar-active", '');
            });
            i.className += " side-bar-active";
        });
    });
}


/*** SIDE NAVIGATION ***/
function sideNav() {
    const overlay = document.querySelector('.overlay');
    const pushNav = document.querySelector('.push-nav');
    const article = document.querySelector('.txt-content');
    const menuBtn = article.firstElementChild;
    const clsBtn = pushNav.firstElementChild;

    menuBtn.onclick = function () {
        overlay.style.animation = "showOverlay 0.5s ease forwards";
        this.style.display = "none";
        pushNav.style.zIndex = "2";
        pushNav.style.width = "240px";
        article.style.marginLeft = "240px";
    }
    clsBtn.onclick = function () {
        overlay.style.animation = "hideOverlay 0.5s ease";
        menuBtn.style.display = "block";
        pushNav.style.zIndex = "0";
        pushNav.style.width = "0";
        article.style.marginLeft = "0";
    }
}


/*** FULLSCREEN OVERLAY NAV ***/
function fullscreenNav() {
    const fullscrnNav = document.getElementById('fls-nav-wrapper');
    const background = fullscrnNav.firstElementChild;
    const overlayBtn = fullscrnNav.firstElementChild.firstElementChild;
    const curtain = document.getElementById('fls-nav-wrapper').lastElementChild;

    overlayBtn.onclick = function () {
        background.className += " blurredOut";
        curtain.style.height = "100%";
    }

    curtain.firstElementChild.onclick = function () {
        background.className = background.className.replace(/blurredOut/, "");
        curtain.style.height = "0";
    }
}


/*** DYNAMIC SCROLLBAR ***/
function changeScrollbar() {
    const main = document.querySelector('.scrollable');

    main.addEventListener('scroll', function () {
        switch (true) {
            case (this.scrollTop >= 100):
                this.lastElementChild.style.opacity = "1";
                break;
            default:
                this.lastElementChild.style.opacity = "0";
        }

        if (this.scrollTop >= 350) {
            this.firstElementChild.style.top = "-60px";
            this.children[1].style.visibility = "visible";
            this.children[1].style.top = "0";
        } else {
            this.children[1].style.top = "-36px";
            this.children[1].style.visibility = "hidden";
            this.firstElementChild.style.top = "0";
        }
    });
}


/*** SLIDE SHOW ***/
function slideShow() {
    const nxt_icon = document.querySelector('.next');
    const prv_icon = document.querySelector('.prev');
    const slideBtn = document.querySelectorAll('.btns');
    const slides = document.querySelectorAll('.slides');

    //default value
    commonActions(null, true);

    nxt_icon.addEventListener('click', function () {
        imgIndex++;
        if (imgIndex > slides.length - 1) {
            imgIndex = 0;
        }
        commonActions(imgIndex, false);
    });

    prv_icon.addEventListener('click', function () {
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex = slides.length - 1;
        }
        commonActions(imgIndex, false);
    });

    slideBtn.forEach((i, index) => {
        i.addEventListener('click', function () {
            slides.forEach(j => {
                j.style.display = "none";
            });
            slideBtn.forEach(k => {
                k.classList.remove('btns-active');
            });
            slides[index].style.display = "block";
            i.classList.toggle('btns-active');
            imgIndex = index;
        });
    });

    (function automaticSlide() {
        if (imgIndex > slides.length - 1) {
            imgIndex = 0;
        }
        commonActions(imgIndex, false);
        imgIndex++;
        setTimeout(automaticSlide, 4000);
    })();

    function commonActions(_num, _default) {
        if (_default == false) {
            slides.forEach(j => {
                j.style.display = "none";
            });
            slideBtn.forEach(k => {
                k.classList.remove('btns-active');
            });
            slides[_num].style.display = "block";
            slideBtn[_num].classList.toggle('btns-active');
        } else {
            slides[imgIndex].style.display = "block";
            slideBtn[imgIndex].classList.toggle('btns-active');
        }
    }
}


/*** SLIDE SHOW GALLERY ***/
function slideShow2() {
    const img_CTNS = document.querySelector('.img-ctns');
    const caption = img_CTNS.lastElementChild;
    const thmbnail = document.querySelectorAll('.thumbnails');
    const nxt_icon = document.querySelector('.next2');
    const prv_icon = document.querySelector('.prev2');
    const counter = document.getElementById('counter');

    //Default Value
    commonActions(null, true);

    thmbnail.forEach((i, index) => {
        i.addEventListener('click', function () {
            img_CTNS.children[1].src = i.firstElementChild.src;
            caption.innerHTML = i.firstElementChild.alt;
            thmbnail.forEach(j => {
                j.classList.remove('active-thumbnail');
            });

            i.classList.toggle('active-thumbnail');
            counter.innerHTML = (index + 1) + " / " + thmbnail.length;
            imgIndex2 = index;
        });
    });

    nxt_icon.addEventListener('click', function () {
        imgIndex2++;
        if (imgIndex2 > thmbnail.length - 1) {
            imgIndex2 = 0;
        }
        commonActions(imgIndex2, false);
    });

    prv_icon.addEventListener('click', function () {
        imgIndex2--;
        if (imgIndex2 < 0) {
            imgIndex2 = thmbnail.length - 1;
        }
        commonActions(imgIndex2, false);
    });

    function commonActions(_num, _default) {
        thmbnail.forEach(j => {
            j.classList.remove('active-thumbnail');
        });
        if (_default == false) {
            img_CTNS.children[1].src = thmbnail[_num].firstElementChild.src;
            caption.innerHTML = thmbnail[_num].firstElementChild.alt;
            counter.innerHTML = (_num + 1) + " / " + thmbnail.length;
            thmbnail[_num].classList.toggle('active-thumbnail');
        } else {
            img_CTNS.children[1].src = thmbnail[0].firstElementChild.src;
            caption.innerHTML = thmbnail[0].firstElementChild.alt;
            counter.innerHTML = "1 / " + thmbnail.length;
            thmbnail[0].classList.toggle('active-thumbnail');
        }
    }
}


/*** IMAGE MODAL ***/
function imageModal() {
    const mainImg = document.querySelector('.main-img');
    const imgModal = document.querySelector('.curtain');
    const imgPath = mainImg.src;
    const imgCapt = mainImg.alt;
    const closeBtn = imgModal.firstElementChild;

    mainImg.addEventListener('click', function () {
        imgModal.classList.remove('curtain-close');
        imgModal.classList.toggle('curtain-open');
        imgModal.children[1].src = imgPath;
        imgModal.lastElementChild.innerHTML = imgCapt;
    });

    closeBtn.addEventListener('click', function () {
        imgModal.classList.remove('curtain-open');
        imgModal.classList.toggle('curtain-close');
    });
}


/*** PORTFOLIO WITH FILTERING ***/
function categoryFiler() {
    const btns = document.querySelectorAll('.filter')
    const rows = document.querySelectorAll('.row');

    btns[0].classList.toggle('btn-active');

    btns.forEach(i => {
        i.addEventListener('click', function () {
            btns.forEach(j => {
                j.classList.remove('btn-active');
            });

            i.classList.toggle('btn-active');

            if (i.dataset.category == "show-all") {
                rows.forEach(k => {
                    k.style.display = "flex";
                })
            } else {
                rows.forEach(k => {
                    const category = k.dataset.category;

                    if (category != i.dataset.category) {
                        k.style.display = "none";
                    } else {
                        k.style.display = "flex";
                    }
                })
            }
        });
    });
}


/*** READ MORE ***/
function readMore() {
    const indicator = document.getElementById('indicator');
    const remaining = document.getElementById('remaining');
    const expandBtn = document.querySelector('.read-more').lastElementChild;

    expandBtn.addEventListener('click', function () {
        indicator.classList.toggle('hidden');
        remaining.classList.toggle('hidden');
        !remaining.classList.contains('hidden') ? this.innerHTML = "Read Less" :
            this.innerHTML = "Read More";
    });
}


/*** SCROLL TO TOP BUTTON ***/
function scrollToTopBtn() {
    const container = document.querySelector('.scrl-top-wrapper');
    const toTopBtn = container.children[1];

    container.addEventListener('scroll', function (event) {
        container.scrollTop != 0 ?
            (toTopBtn.style.visibility = "visible", toTopBtn.style.opacity = "1",
                toTopBtn.style.bottom = (-container.scrollTop + 20) + "px") :
            (toTopBtn.style.opacity = "0", toTopBtn.style.visibility = "hidden");
    });
}


/*** COPY SELECTION ***/
function textSelect() {
    const selectText = document.getElementById('myInput');
    const copyBtn = document.querySelector('.copy-wrapper').lastElementChild;
    const tooltip = document.querySelector('.tooltip');

    copyBtn.addEventListener('click', function () {
        selectText.select();
        tooltip.innerHTML = "Number Copied!";
        document.execCommand("copy");
    });

    copyBtn.addEventListener('mouseout', function () {
        tooltip.innerHTML = "Copy Number";
    });
}


/*** CUSTOM SELECT MENU ***/
function openSelectMenu() {
    const myFORM = document.forms['form1'];
    const drpBtn = document.querySelector('.my-drpdown').firstElementChild;
    const drpMenu = document.querySelector('.actual-drp');
    const drpMenuOptions = document.querySelectorAll('.drp-option');

    drpBtn.addEventListener('click', function () {
        drpMenu.classList.toggle('actual-drp-show');
    });

    drpMenuOptions.forEach(i => {
        i.addEventListener('click', function () {
            drpBtn.firstElementChild.innerHTML = i.innerHTML;
            myFORM['country'].value = i.dataset.value;
            drpMenu.classList.toggle('actual-drp-show');
        });
    });

    document.addEventListener('click', function (e) {
        if (e.target != drpBtn && e.target != drpBtn.firstElementChild &&
            e.target != drpBtn.lastElementChild) {
            drpMenu.classList.remove('actual-drp-show');
        }
    });
}


/*** SHOW PASSWORD ***/
function showPassword() {
    const myFORM = document.forms['form2'];
    myFORM['checkBox1'].addEventListener('click', function () {
        myFORM['pswrd'].type == "password" ?
            myFORM['pswrd'].type = "text" : myFORM['pswrd'].type = "password";
    });
}


/*** PASSWORD VALIDATION ***/
function validatePassword() {
    const myFORM = document.forms['form3'];
    const validation = document.querySelector('.validation');
    const LOWERCASE = /[a-z]+/;
    const UPPERCASE = /[A-Z]+/;
    const NUMBERS = /[0-9]+/;
    const SPCLCHAR = /[-~!@#$%^&*{}()\[\]_=+*:;,.'"?\s]+/;
    const CHARLENGTH = /^.{8,}$/;

    myFORM['pswrd'].addEventListener('keyup', function () {
        if (!validation.classList.contains('validation-active')) {
            validation.classList.toggle('validation-active');
        }
        validate(this.value);
    });

    function validate(pass) {
        if (LOWERCASE.test(pass)) {
            if (!validation.children[1].firstElementChild.classList.contains('valid-input')) {
                validation.children[1].firstElementChild.innerHTML = "&#xe86c;";
                validation.children[1].firstElementChild.classList.toggle('valid-input');
            }
        } else {
            validation.children[1].firstElementChild.innerHTML = "&#xe000;";
            validation.children[1].firstElementChild.classList.remove('valid-input');
        }

        if (UPPERCASE.test(pass)) {
            if (!validation.children[2].firstElementChild.classList.contains('valid-input')) {
                validation.children[2].firstElementChild.innerHTML = "&#xe86c;";
                validation.children[2].firstElementChild.classList.toggle('valid-input');
            }
        } else {
            validation.children[2].firstElementChild.innerHTML = "&#xe000;";
            validation.children[2].firstElementChild.classList.remove('valid-input');
        }

        if (NUMBERS.test(pass)) {
            if (!validation.children[3].firstElementChild.classList.contains('valid-input')) {
                validation.children[3].firstElementChild.innerHTML = "&#xe86c;";
                validation.children[3].firstElementChild.classList.toggle('valid-input');
            }
        } else {
            validation.children[3].firstElementChild.innerHTML = "&#xe000;";
            validation.children[3].firstElementChild.classList.remove('valid-input');
        }

        if (SPCLCHAR.test(pass)) {
            if (!validation.children[4].firstElementChild.classList.contains('valid-input')) {
                validation.children[4].firstElementChild.innerHTML = "&#xe86c;";
                validation.children[4].firstElementChild.classList.toggle('valid-input');
            }
        } else {
            validation.children[4].firstElementChild.innerHTML = "&#xe000;";
            validation.children[4].firstElementChild.classList.remove('valid-input');
        }

        if (CHARLENGTH.test(pass)) {
            if (!validation.children[5].firstElementChild.classList.contains('valid-input')) {
                validation.children[5].firstElementChild.innerHTML = "&#xe86c;";
                validation.children[5].firstElementChild.classList.toggle('valid-input');
            }
        } else {
            validation.children[5].firstElementChild.innerHTML = "&#xe000;";
            validation.children[5].firstElementChild.classList.remove('valid-input');
        }
    }
}


/*** AUTOCOMPLETE ***/
function autocomplete() {
    const srchBox = document.forms['form4']['country'];
    const countries = [];
    var srchResultFocus = -1;

    (function getCountries() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                var jsonFile = JSON.parse(this.responseText);
                jsonFile.countries.forEach(i => {
                    countries.push(i);
                });
            }
        };
        xmlhttp.open('GET', 'main.json', true);
        xmlhttp.send();
    })();    

    srchBox.addEventListener('input', function () {
        var _ul, _li;
        var inpValue = this.value;
        closeAllLists();

        _ul = document.createElement('ul');
        _ul.className = "srch-result";
        srchBox.parentNode.appendChild(_ul);
        _ul.classList.toggle('srch-result-show');

        countries.forEach(i => {
            if(inpValue != "") {
                if (i.slice(0, inpValue.length).toUpperCase() == inpValue.toUpperCase()) {
                    _li = document.createElement('li');
                    _li.innerHTML = "<strong>" + i.slice(0, inpValue.length) + "</strong>" +
                    i.slice(inpValue.length)   + "<input type='hidden' value='" + i + "'>";
    
                    _li.onclick = function () {
                        srchBox.value = this.lastElementChild.value;
                        closeAllLists();
                    }
                    _ul.appendChild(_li);
                }
            } 
        });
    });

    srchBox.addEventListener('keydown', function(e) {
        const itemList = document.querySelector(".srch-result");
        var key = e.keyCode || e.which;

        if(itemList !== null) {
            for(let i = 0; i < itemList.childElementCount; i++) {
                if(srchResultFocus == -1) {
                    itemList.children[0].classList.remove('srch-onkey-active');
                } else {
                    itemList.children[srchResultFocus].classList.remove('srch-onkey-active');
                }
            }

            switch (key) {
                case 13:
                    e.preventDefault();
                    itemList.children[srchResultFocus].click();
                    break;
                case 27:
                    itemList.classList.remove('srch-result-show');
                    break;
                case 38:
                    srchResultFocus--;
                    srchResultFocus < 0 ? srchResultFocus = itemList.childElementCount - 1 : srchResultFocus;
                    break;
                case 40:
                    srchResultFocus++;
                    srchResultFocus > itemList.childElementCount - 1 ? srchResultFocus = 0 :
                    srchResultFocus;
            }
            itemList.children[srchResultFocus].classList.toggle('srch-onkey-active');
        }
    });

    function closeAllLists() {
        const itemList = document.querySelectorAll(".srch-result");
        itemList.forEach(i => {
            i.parentNode.removeChild(i);
            srchResultFocus = -1;
        });
    }

    document.addEventListener('click', function (e) {
        const itemList = document.querySelector(".srch-result");

        if(itemList !== null) {
            if (e.target != itemList && e.target != srchBox &&
                itemList.classList.contains('srch-result-show')) {
                itemList.classList.remove('srch-result-show');
            }
        }
    });
}


/*** MULTI STEP FORM ***/
function multiStepForm() {
    const reg_scrn  = document.querySelectorAll('.regis-slide');
    const next_btn  = document.querySelector('.prev-next-wrapper').firstElementChild; 
    const prev_btn  = document.querySelector('.prev-next-wrapper').lastElementChild;
    var advance = 0;

    tabIndicator();
    const indicator = document.querySelectorAll('.prog-indicator'); 
    reg_scrn[advance].classList.add('active-reg');

    if(reg_scrn[advance].classList.contains('unfinished')) {
        indicator[advance].classList.add('prog-active');
    }
    
    next_btn.addEventListener('click', function () {
        if(this.type == "button") {
            if (validateForm() == true) {
                reg_scrn[advance].classList.remove('active-reg');
                reg_scrn[advance + 1].classList.add('active-reg');
                indicator[advance].classList.add('prog-completed');
                advance++;
    
                indicator.forEach(i => {
                    i.classList.remove('prog-completed2');
                })
        
                if (!reg_scrn[advance].classList.contains('unfinished')) {
                    indicator[advance].classList.add('prog-completed2');
                } else {
                    indicator[advance].classList.add('prog-active');
                }  
                if (reg_scrn[advance].classList.contains('terms-conditions')) {
                    next_btn.type = "submit";
                    next_btn.value = "Sign Up";
                } 
            }
    
            if (advance > 0) {
                prev_btn.type = "button";
            }  
        } 
    });

    prev_btn.addEventListener('click', function () {
        reg_scrn[advance].classList.remove('active-reg');
        reg_scrn[advance - 1].classList.add('active-reg');
        advance--;
        if(advance == 0) {
            prev_btn.type = "hidden";
        } 

        indicator.forEach(i => {
            i.classList.remove('prog-completed2');
        })

        if(indicator[advance + 1].classList.contains('prog-active')) {
            indicator[advance + 1].classList.remove('prog-active');
        }
        if (!reg_scrn[advance].classList.contains('terms-conditions')) {
            next_btn.type = "button";
            next_btn.value = "Next";
        } 

        indicator[advance].classList.add('prog-completed2');
    });

    function validateForm() {
        var validated = true;
        const INPUT_FIELD = reg_scrn[advance].getElementsByTagName('input')

        for(let i = 0; i < INPUT_FIELD.length; i++) {
            if(!INPUT_FIELD[i].value) {
                INPUT_FIELD[i].classList.add("invalid");    
                validated = false;
            } else {
                INPUT_FIELD[i].classList.remove("invalid");  
            }
            if(reg_scrn[advance].dataset.tab) {
                switch(INPUT_FIELD[i].name) {
                    case "email": 
                        !validateInput(INPUT_FIELD[i].value, "email") ?
                        validated = false : validated;
                        break;
                    case "phone":
                        !validateInput(INPUT_FIELD[i].value, "phone") ?
                        validated = false : validated;
                        break;
                    case "username":
                        !validateInput(INPUT_FIELD[i].value, "user") ?
                        validated = false : validated;
                        break;
                    case "password":
                        !validateInput(INPUT_FIELD[i].value, "pswrd") ?
                        validated = false : validated;
                }
            }

            if(validated) {
                reg_scrn[advance].classList.remove("unfinished");
            }
        }

        return validated;
    }

    function validateInput(value, type) {
        var result = false;
        
        switch(type) {
            case "phone":
                const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
                result = phoneRegex.test(value);
                break;

            case "email":
                const emailRegex = /^[A-Z_.!{}-]+[A-Z0-9_.!{}-]+?@[a-z]+\.+(com|net|org|edu|gov)$/i;
                result = emailRegex.test(value);
                break;

            case "user":
                const _usrchars  = /^[A-Za-z0-9_+!#$-]+$/;
                const _usrlength = /.{6,}/;
                const usernRegex = 
                    _usrchars.test(value) && 
                    _usrlength.test(value);
                result = usernRegex;
                break;
            
            case "pswrd": 
                const _lowercase  = /[a-z]+/;
                const _uppercase  = /[A-Z]+/;
                const _spclchars  = /[-_~!?@#$%^&*(){}\[\]=+/\\|;:.,"'\s]+/;
                const _numbers    = /[0-9]+/;
                const _passlength = /.{8,}/;
                const pswrdRegex = 
                    _lowercase.test(value)  && 
                    _uppercase.test(value)  &&
                    _spclchars.test(value)  && 
                    _passlength.test(value) && 
                    _numbers.test(value);
                result = pswrdRegex;
        }
        return result;
    }

    function tabIndicator() {
        const container = document.querySelector('.btn-container2');
    
        for(let i = 0; i < reg_scrn.length; i++) {
            const indicator = document.createElement('span');
            indicator.classList.add('prog-indicator');
            container.appendChild(indicator);
        }
    }
}


/*** FILTER LIST ***/
function filterList() {
    const srch_box   = document.querySelector('.filter-wrapper').firstElementChild;
    const filterList = document.querySelector('.filter-list');
    const sortBtn    = document.getElementById('sort-list');
    const students = [
        "Marcus",
        "Lauryn",
        "Saira",
        "Britney",
        "Gomez",
        "Sean",
        "Molly",
        "Allen",
        "Jeremy",
        "Cubalt",
        "Meryl",
        "Alison",
        "Marques",
        "Roger",
        "Bucciarati"
    ];

    students.forEach(i => {
        const _li = document.createElement("li");
        _li.className = "names";
        _li.innerHTML = i;
        filterList.appendChild(_li);
    });
    
    srch_box.addEventListener('input', function () {
        const listItem = document.querySelectorAll('.names');

        listItem.forEach(i => {
            if (i.innerHTML.toUpperCase().search(this.value.toUpperCase()) == -1) {
                i.style.display = "none";
            } else {
                i.style.display = "block";
            }
        });
    });

    sortBtn.addEventListener('click', function () {
        const listItem = document.querySelectorAll('.names');
        var _li;

        listItem.forEach(i => {
            i.parentNode.removeChild(i);
        });

        students.sort();
        students.forEach(i => {
            _li = document.createElement("li");
            _li.className = "names";
            _li.innerHTML = i;
            filterList.appendChild(_li);
        });
    });
}


/*** SORT TABLE ***/
function sortTable() {
    carDealer();
    const itemsRow = document.querySelectorAll('.row-wrapper');

    itemsRow.forEach(i => {
        i.addEventListener('click', function () {
            var expandable = i.lastElementChild;
            var _scrollHeight = expandable.scrollHeight;

            if(!i.classList.contains("open")) {
                expandable.style.maxHeight = _scrollHeight + "px";
                i.classList.add("open");
            } else {
                expandable.style.maxHeight = "0";
                i.classList.remove("open");
            }
            i.classList.toggle("item-row-focus");
        });
    });
}

function carDealer() {
    const mainContainer = document.querySelector('.sortable-tb');
    const vehicles = [
        { model: "Sonata", 
        brand: "Hyundai", 
        year: 2019, 
        color: "#6f0709", 
        price: "$45,785", 
        imgPath: "https://cdn.motor1.com/images/mgl/m6n6A/s1/2020-hyundai-sonata.jpg", 
        desc: "Lower profile. Wider stance. The aggressive curves and sharp lines of a 4-door coupe. Inside you'll encounter a sleek, modern cabin with premium touches. And your experience is further elevated with state-of-the-art technology and safety. Introducing the 2020 Sonata."},

        { model: "Cadenza", 
        brand: "Kia", 
        year: 2020, 
        color: "#5a4d4d", 
        price: "$50,687", 
        imgPath: "https://cdn.motor1.com/images/mgl/eXe7p/s1/2020-kia-k7-facelift.jpg", 
        desc: "Kia has made blind-spot monitoring, rear cross-traffic alert, rear parking sensors, and power-folding side mirrors all standard on the Cadenza Premium. The rest of the equipment that was part of last year's Luxury package on the Cadenza Premium (auto-dimming rearview mirror with HomeLink, in-dash navigation, Harman/Kardon premium audio, an 8.0-inch infotainment screen, and more) is now moved up to be standard equipment on the midrange Technology model."},

        { model: "Model X", 
        brand: "Tesla", 
        year: 2020, 
        color: "#ececf6", 
        price: "$81,000", 
        imgPath: "https://icdn2.digitaltrends.com/image/digitaltrends/tesla-model-x-header.jpg", 
        desc: "Model X is the safest SUV ever. Built from the ground up as an electric vehicle, the body, chassis, restraints and battery technology provide a very low probability of occupant injury."},

        { model: "Mustang Ecoboost", 
        brand: "Ford", 
        year: 2020, 
        color: "#ff8f37", 
        price: "$37,185", 
        imgPath: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F04%2F2020-ford-mustang-ecoboost-0.jpg?w=960&cbr=1&q=90&fit=max", 
        desc: "At the peak of the storied Mustang lineup is the all-new Shelby GT500®, the most powerful street-legal Ford vehicle of all time. It combines a supercharged 5.2-liter V8 engine and a TREMEC 7-speed transmission for awe-inspiring power. With an ergonomic build and superior powertrain, the GT500 takes performance to new heights as the fastest Mustang ever on a straight line and around curves." },

        { model: "Urus", 
        brand: "Lamborghini", 
        year: 2019, 
        color: "#f2a402", 
        price: "$204,000", 
        imgPath: "https://cdn.hiconsumption.com/wp-content/uploads/2019/01/Lamborghini-Urus-By-Manhart-Performance-0-Hero-1087x725.jpg", 
        desc: "Lamborghini Urus is the world’s first Super Sport Utility Vehicle, in which luxury, sportiness and performance meet comfort and versatility. It offers best-in-class driving dynamics, alongside its unmistakable elegance of design. Urus embodies the characteristics of multiple souls: sporty, elegant and off-road, and has a suitability for everyday driving in a range of environments. With its surprisingly distinct engine sound, combined with high performance, Lamborghini Urus is anything but typical." }
    ];
    var rowWrapper, _ul, _li, _car_desc, colorBox, _image, _article;

    vehicles.forEach(i => {
        rowWrapper = document.createElement('div');
        _ul        = document.createElement('ul');
        _car_desc  = document.createElement('div');
        colorBox   = document.createElement('span');
        _image     = document.createElement('img');
        _article   = document.createElement('article');
        
        rowWrapper.className = "row-wrapper";
        _ul.className        = "item-row";
        _car_desc.className  = "car-desc"; 
        colorBox.className   = "car-color";
        
        for(j in i) {
            if (j != "imgPath" && j != "desc") {
                _li = document.createElement('li');
                j == "color" ? _li.innerHTML = "" : _li.innerHTML = i[j];
                _ul.appendChild(_li);
            } 
        }

        _image.src = i.imgPath;
        _image.alt = i.brand + " " + i.model;
        _article.innerHTML = i.desc;
        colorBox.style.backgroundColor = i.color;
        
        _ul.children[3].appendChild(colorBox);
        _car_desc.appendChild(_image);
        _car_desc.appendChild(_article);
        rowWrapper.appendChild(_ul);
        rowWrapper.appendChild(_car_desc);
        mainContainer.appendChild(rowWrapper);
    });
}

function sortAscending(arr) {
    const headrRow = document.querySelector('.header');
    const itemRow  = document.querySelectorAll('.item-row');

    for( let i = 0; i < headrRow.childElementCount; i++) {
        const target = headrRow.children[i];  
        const type   = target.dataset.sort;
        if(type) {
            target.addEventListener('click', function () {
                switch(type) {
                    case "model":
                        arr.sort(function (a, b) {
                            a = a.model.toLowerCase();
                            b = b.model.toLowerCase();
                            if (a < b) {return -1;}
                            if (a > b) {return 1;}
                        });
                        break;
                    case "brand":
                        arr.sort(function (a, b) {
                            a = a.brand.toLowerCase();
                            b = b.brand.toLowerCase();
                            if (a < b) {return -1;}
                            if (a > b) {return 1;}
                        });
                        break;
                    case "year":
                        arr.sort(function (a, b) {
                            a = a.year;
                            b = b.year;
                            return a - b;
                        });
                }

                itemRow.forEach(i => {
                    i.parentNode.removeChild(i);
                });
            });
        }
    }
}


/*** COMING SOON lANDING PAGE ***/
function countDown() {
    const counter = document.querySelector('.countdown');
    var countDownDate = new Date("Oct 21, 2019 16:30:00").getTime();

    var start = setInterval(() => {
        var currentDate = new Date().getTime();
        var timeDiff    = countDownDate - currentDate;

        console.log(timeDiff);

        var days    = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours   = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        counter.innerHTML = days + "d-" + hours + "h-" + 
        minutes + "m-" + seconds + "s"; 

        if (timeDiff < 0) {
            clearInterval(start);
            counter.innerHTML = "IT'S OUT!";
        }

    }, 1000);
}

window.onload = () => {
    imgIndex = 0;
    imgIndex2 = 0;
    animationMenuBtn();
    accordionMenu();
    tabHeaders();
    topNavDropMenu();
    searchMenu();
    sideNav();
    fullscreenNav();
    changeScrollbar();
    slideShow();
    slideShow2();
    imageModal();
    categoryFiler();
    readMore();
    scrollToTopBtn();
    textSelect();
    openSelectMenu();
    showPassword();
    validatePassword();
    autocomplete();
    multiStepForm();
    filterList();
    sortTable();
    countDown();
}