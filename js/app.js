let menu = document.getElementById("nav-menu");
let toggle = document.getElementById("menu-toggle");
let bars = document.querySelector("#menu-toggle .bars");
let close = document.querySelector("#menu-toggle .close");

toggle.addEventListener("click", function () {
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
        toggle.innerHTML = `<i class="fa-solid fa-xmark fa-fw bars"></i>`;
        toggle.style.rotate = "180deg";
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-bars fa-fw bars"></i>`;
        toggle.style.rotate = "0deg";
    }
})
document.onkeyup = function (e) {
    if (e.key === "Escape") {
        menu.classList.remove("open");
    }
}
let header = document.querySelector("header");
let section = document.getElementById("about");
let spans = document.querySelectorAll(".progress-bar span");
let countsCount = document.querySelectorAll(".counter .count");
let started = false;
window.onscroll = function () {
    if(this.scrollY >= 700) {
        header.classList.add("change-bg");
    } else {
        header.classList.remove("change-bg");
    }
    menu.classList.remove("open");
    if (menu.classList.contains("open")) {
        toggle.innerHTML = `<i class="fa-solid fa-xmark fa-fw bars"></i>`;
        toggle.style.rotate = "180deg";
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-bars fa-fw bars"></i>`;
        toggle.style.rotate = "0deg";
    }
    if (this.scrollY >= section.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
        if (!started) {
            countsCount.forEach((countt) => {
                startCount(countt);
            })
        }
        started = true;
    } 
}
window.onresize = () => {
    menu.classList.remove("open");
    if (menu.classList.contains("open")) {
        toggle.innerHTML = `<i class="fa-solid fa-xmark fa-fw bars"></i>`;
        toggle.style.rotate = "180deg";
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-bars fa-fw bars"></i>`;
        toggle.style.rotate = "0deg";
    }
}
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

let tabs = document.querySelectorAll(".tabs .tab-link");
let imgs = document.querySelectorAll(".projects .img");

tabs.forEach((tab) => {
    tab.addEventListener("click" , (e) => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        e.target.classList.add("active");
        imgs.forEach((img) => {
            img.style.display = "none";
        });
        document.querySelectorAll(e.currentTarget.dataset.work).forEach((el) => {
            el.style.display = "block";
        });
    });
});

let input1 = document.querySelector("form .input1");
let head1 = document.querySelector("form .one");
let input2 = document.querySelector("form .input2");
let head2 = document.querySelector("form .two");
let input3 = document.querySelector("form .input3");
let head3 = document.querySelector("form .three");
let input4 = document.querySelector("form .input4");
let head4 = document.querySelector("form .four");
let input5 = document.querySelector("form .input5");
let head5 = document.querySelector("form .five");

input1.onclick = function () {
        head1.style.top = "-1rem";
        head1.style.left = "0";
        head1.style.color = "#881f50";
}
input1.onblur = function () {
    if (input1.value == "") {
        head1.style.top = "2rem";
        head1.style.left = "1rem";
        head1.style.color = "#666";
    }
}


input2.onclick = function () {
    head2.style.top = "-1rem";
    head2.style.left = "0";
    head2.style.color = "#881f50";
}
input2.onblur = function () {
if (input2.value == "") {
    head2.style.top = "2rem";
    head2.style.left = "1rem";
    head2.style.color = "#666";
}
}


input3.onclick = function () {
    head3.style.top = "-1rem";
    head3.style.left = "0";
    head3.style.color = "#881f50";
}
input3.onblur = function () {
if (input3.value == "") {
    head3.style.top = "2rem";
    head3.style.left = "1rem";
    head3.style.color = "#666";
}
}


input4.onclick = function () {
    head4.style.top = "-1rem";
    head4.style.left = "0";
    head4.style.color = "#881f50";
}
input4.onblur = function () {
if (input4.value == "") {
    head4.style.top = "2rem";
    head4.style.left = "1rem";
    head4.style.color = "#666";
}
}


input5.onclick = function () {
    head5.style.top = "-1rem";
    head5.style.left = "0";
    head5.style.color = "#881f50";
}
input5.onblur = function () {
if (input5.value == "") {
    head5.style.top = "2rem";
    head5.style.left = "1rem";
    head5.style.color = "#666";
}
}

// lightGallery(document.querySelector(".project .container"));