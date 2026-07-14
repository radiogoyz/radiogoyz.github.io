let left_album_art_switch_btn = document.getElementById("jchl_aas_l");
let right_album_art_switch_btn = document.getElementById("jchl_aas_r");
let jchl_album_art_img = document.getElementById("jchl_album_art");

let jchl_album_img_num = 1;

left_album_art_switch_btn.onclick = function() {
    jchl_album_img_num -= 1;

    jchl_img_reload()

}

right_album_art_switch_btn.onclick = function() {
    jchl_album_img_num += 1;

    jchl_img_reload()

}

jchl_album_art_img.onclick = function() {

}

function jchl_img_reload() {
    if (jchl_album_img_num == 1) {
        jchl_album_art_img.src = "imgs/jchl single cover.png";
        jchl_album_art_img.alt = "Jude Clubber Has Leprosy single album cover";
        jchl_album_art_img.title = "Jude Clubber Has Leprosy album cover";

    }
    if (jchl_album_img_num == 2) {
        jchl_album_art_img.src = "imgs/jchlbackinsertcd.png";
        jchl_album_art_img.alt = "Jude Clubber Has Leprosy cd jewel case back insert";
        jchl_album_art_img.title = "Jude Clubber Has Leprosy cd jewel case back insert";
    }
    if (jchl_album_img_num == 3) {
        jchl_album_art_img.src = "imgs/jchl single cd.png";
        jchl_album_art_img.alt = "Jude Clubber Has Leprosy cd";
        jchl_album_art_img.title = "Jude Clubber Has Leprosy cd";
    }

    if (jchl_album_img_num == 4) {
        jchl_album_img_num = 1;
        jchl_img_reload()
    }
    if (jchl_album_img_num == 0) {
        jchl_album_img_num = 3;
        jchl_img_reload()
    }
}