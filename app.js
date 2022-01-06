const cntText = document.querySelector("#cnt-num");
const title = document.querySelector("h1");
const minsub = document.querySelector("img");
const page = document.querySelector("body");
const audio = new Audio();
let cnt = 0;
let state = false;

audio.src = "sounds/촵.mp3";

function isMobile() {
    let user = navigator.userAgent;
    let is_mobile = false;
    if (
        user.indexOf("iPhone") > -1 ||
        user.indexOf("Android") > -1 ||
        user.indexOf("iPad") > -1 ||
        user.indexOf("iPod") > -1
    ) {
        is_mobile = true;
    }
    return is_mobile;
}
function saveCnt() {
    localStorage.setItem("count-t", cnt);
}
function codeDown() {
    audio.load();
    audio.play();
    cnt += 1;
    minsub.src = "img/after-bald.png";
    cntText.innerHTML = `+${cnt}`;
    cntText.className = "active-num";
    title.className = "active-title";
    saveCnt();
}
function codeUp() {
    minsub.src = "img/before.png";
    cntText.className = "";
    title.className = "";
}

function changeImgDown() {
    codeDown();
}
function changeImgUp() {
    codeUp();
}

function changeImgKeydown() {
    if (!state) {
        state = true;
        codeDown();
    }
}
function changeImgKeyup() {
    state = false;
    codeUp();
}

if (isMobile()) {
    page.addEventListener("touchstart", changeImgDown);
    page.addEventListener("touchend", changeImgUp);
} else {
    page.addEventListener("mousedown", changeImgDown);
    page.addEventListener("mouseup", changeImgUp);
    page.addEventListener("keydown", changeImgKeydown);
    page.addEventListener("keyup", changeImgKeyup);
}

const savedCnt = localStorage.getItem("count-t");

if (savedCnt !== null) {
    cntText.innerHTML = `+${savedCnt}`;
    cnt = parseInt(savedCnt);
} else {
    cntText.innerHTML = "0";
}
