document.getElementById('navSideOpen').addEventListener('click',openNavSide);
document.getElementById('navSideClose').addEventListener('click',closeNavSide);
document.getElementById("linkProfile").addEventListener("click",openNavSide);
document.getElementById("linkEducation").addEventListener("click",openNavSide);
document.getElementById("linkContact").addEventListener("click",openNavSide);
document.getElementById("linkWork").addEventListener("click",openNavSide);

function openNavSide(){
    document.getElementById("my-nav-side").style.width = "240px";
    document.getElementById("main-content").style.marginLeft = "240px";
    document.getElementById("my-nav-side").style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("footer").style.marginLeft = "240px";
}
function closeNavSide(){
    document.getElementById("my-nav-side").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
    document.getElementById("my-nav-side").style.display = "none";
    document.body.style.backgroundColor = "#e5e5e5";
    document.getElementById("footer").style.marginLeft = "0";
}