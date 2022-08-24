
function DishplayNavbar() {
    return `<div id="nav-1">
    <div id="nav1-child-1">
        <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="">
    </div>
    <div id="nav1-child-2">

        <a href=""><img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt=""></a>
        <a href="https://www.facebook.com/KindMeal.my"><img
                src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt=""></a>
        <a href="https://twitter.com/KindMeal"><img src="https://www.kindmeal.my/images/follow_twitter_grey.png"
                alt=""></a>

    </div>
    <div id="nav1-child-3">
        <p>Login</p>
        <h4 id="facebook"><a
                href="https://www.facebook.com/v2.9/dialog/oauth?client_id=292733157519852&redirect_uri=https%3A%2F%2Fwww.kindmeal.my%2Flogin.php%3Faction%3Dfacebook&state=de4724f7b2529a9874245150d1ee3df9&display=popup&scope=email,user_birthday,user_location">Facebook</a>
        </h4>
        <h4 id="email">Email</h4>
        <p id="signup">Sign Up</p>
    </div>
</div>
<div id="nav-2">
    <div>
        <a href="index.html">Home</a>
        <a href="#">Meal Deals</a>
        <a href="#">KindMoments</a>
        <a href="#">Hot Picks</a>
        <a href="directory.html">Directory</a>
        <a href="#">Articles</a>
        <a href="#">Help</a>
    </div>
</div>`
}

export default DishplayNavbar;