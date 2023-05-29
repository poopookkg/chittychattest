function butt()
{
    var user = document.getElementById("textbutt").value;
    localStorage.setItem("buttuser",user);
    window.location = "index2.html"
}