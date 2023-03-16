<?php

/**
 * Description: Home page base element - for Natalia Świerczek Portfolio
 *
 * Authors: Natalia Świerczek (swierczek.n@gmail.com)
 * Copyright Natalia Świerczek Portfolio © All Rights Reserved
 */
?>

<section class="homePage homePageOpening">
    <h1><?php the_field('homePageOpening_mainTitle'); ?></h1>
    <div class="shortInfo">
        <p><?php the_field('homePageOpening_extraDescription1'); ?></p>
        <p class="line">
        <p><?php the_field('homePageOpening_extraDescription2'); ?></p>
        <p class="line">
        <p><?php the_field('homePageOpening_extraDescription3'); ?></p>
    </div>
</section>

<section class="homePage homePageAboutMe">
    <h2><?php the_field('homePageAboutMe_mainTitle'); ?></h2>
    <div class="descriptions">
        <p><?php the_field('homePageAboutMe_description1'); ?></p>
        <p><?php the_field('homePageAboutMe_description2'); ?></p>
        <p><?php the_field('homePageAboutMe_description3'); ?></p>
        <p><?php the_field('homePageAboutMe_description4'); ?></p>
    </div>
</section>

<section class="homePage homePageWork">
    <h2><?php the_field('homePageWork_mainTitle'); ?></h2>
    <div class="descriptions">
        <p><?php the_field('homePageWork_description1'); ?></p>
        <p><?php the_field('homePageWork_description2'); ?></p>
        <p><?php the_field('homePageWork_description3'); ?></p>
    </div>
</section>

<section class="homePage homePageContact">
    <h2><?php the_field('homePageContact_mainTitle'); ?></h2>
    <div class="shortInfo">
        <p><?php the_field('homePageContact_mail'); ?></p>
        <p class="line">
        <p><?php the_field('homePageContact_linkedin'); ?></p>
    </div>
</section>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/project.min.js" type="module"></script>

