<div id="workPage" class="workPageSection">
    <div class="homeBtnNav">
        <a class="homeBtn" href="..\index.php">BACK</a>
        <div class="workCircleWrapper">
            <div class="workCircle workCircleBefore"></div>
            <div class="workCircle workCircleMain"></div>
        </div>
    </div>

    <div class="link">
        <span class="link__arrow">
            <span></span>
            <span></span>
        </span>
        <span class="link__line"></span>
        <span class="link__text">See more</span>
    </div>

    <div class="changingTextWrapper">
        <a href="https://natalia328.github.io/jankowski-konstrukcje/" target="_blank" class="linkToWebsite">
            <h2 class="changingText"><?php the_field('workPage_title'); ?></h2>
            <p class="linkToWebsiteText">
                SEE
                <i class="fa-solid fa-eye"></i>
            </p>
        </a>
    </div>

    <div class="imgWrapper">

        <div class="projectElement projectElementFirst">
            <div class="hero-img"></div>
        </div>
        <div class="projectElement projectElementSecond">
            <div class="hero-img"></div>
        </div>
        <div class="projectElement projectElementThird">
            <div class="hero-img"></div>
        </div>
        <div class="projectElement projectElementFourth">
            <div class="hero-img"></div>
        </div>

    </div>

</div>
<div class="footer">
    <h3 class="footerText"><?php the_field('footer'); ?></h3>
</div>

