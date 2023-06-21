<section id="workPage" class="workPageSection">
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
        <a href="https://natalia328.github.io/jankowski-konstrukcje/" class="linkToWebsite">
            <p class="changingText">Commercial website</p>
            <p class="linkToWebsiteText">
                SEE
                <i class="fa-solid fa-eye"></i>
            </p>
        </a>
    </div>

    <div class="imgWrapper">

        <!-- ---Put it to the loop?--- -->

        <?php $projectImage = get_field('projectImage'); ?>
        <div class="projectElement projectElementFirst" <?php if ($projectImage) : ?>style="background-image: url('<?php echo $projectImage; ?>');" <?php endif; ?>>
            <div class="hero-img"></div>
        </div>

        <?php $projectImage2 = get_field('projectImage2'); ?>
        <div class="projectElement projectElementSecond" <?php if ($projectImage2) : ?>style="background-image: url('<?php echo $projectImage2; ?>');" <?php endif; ?>>
            <div class="hero-img"></div>
        </div>

        <?php $projectImage3 = get_field('projectImage3'); ?>
        <div class="projectElement projectElementThird" <?php if ($projectImage3) : ?>style="background-image: url('<?php echo $projectImage3; ?>');" <?php endif; ?>>
            <div class="hero-img"></div>
        </div>

        <?php $projectImage4 = get_field('projectImage4'); ?>
        <div class="projectElement projectElementFourth" <?php if ($projectImage4) : ?>style="background-image: url('<?php echo $projectImage4; ?>');" <?php endif; ?>>
            <div class="hero-img"></div>
        </div>

    </div>

</section>
<footer class="footer">
    <p> Natalia Świerczek portfolio
    <p>
</footer>