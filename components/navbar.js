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
    <div class="isLoggedIn" style="display:none">
      <img src="https://www.kindmeal.my/images/icon_notice.png" alt="">

      <p style="color: rgb(136, 136, 136);display:inline" ><span id="name">Shivendra Babu</span><font style="font-size:12px;color: rgb(136, 136, 136);margin-left: 10px;">▼</font></p>
      
      <img style="border: 1px solid rgb(136, 136, 136);" src="https://www.kindmeal.my/images/no_photo_header.png" alt="">
    </div>
    <div id="nav1-child-3">
        <p>Login</p>
        <h4 id="facebook"><a
                href="https://www.facebook.com/v2.9/dialog/oauth?client_id=292733157519852&redirect_uri=https%3A%2F%2Fwww.kindmeal.my%2Flogin.php%3Faction%3Dfacebook&state=de4724f7b2529a9874245150d1ee3df9&display=popup&scope=email,user_birthday,user_location">Facebook</a>
        </h4>
        <h4 id="email">Email</h4>
        <p  id="signup">Sign Up</p>
    </div>
</div>
<div id="nav-2">
    <div>
        <a href="index.html">Home</a>
        <a href="MealDeals.html">Meal Deals</a>
        <a href="KindMoment.html">KindMoments</a>
        <a href="HotPicks.html">Hot Picks</a>
        <a href="directory.html">Directory</a>
        <a href="articles.html">Articles</a>
        <a href="help.html">Help</a>
    </div>
</div>

`;
}

export default DishplayNavbar;