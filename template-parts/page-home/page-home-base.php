<?php

/**
 * Description: Home page base element - for Natalia Świerczek Portfolio
 *
 * Authors: Natalia Świerczek (swierczek.n@gmail.com)
 * Copyright Natalia Świerczek Portfolio © All Rights Reserved
 */
?>
<nav class="navigation">
    <?php
    wp_nav_menu(
        array(
            "theme_location" => "header-menu",
            // "after" => '<i class="fa-regular fa-arrow-right"></i>'
        )
    ); ?>
    <button class="burger">
        <!-- <i class="fas fa-times hide"></i> -->
        <p class="menuBtn"><i class="fa-regular fa-eye"></i></p>
    </button>
</nav>

<section id="homePageOpening" class="homePage homePageOpening">
    <div class="mainTitle">
        <h1 class="mainTitleName"><?php the_field('homePageOpening_mainTitleName'); ?></h1>
        <h1 class="mainTitleLastName"><?php the_field('homePageOpening_mainTitleLastName'); ?></h1>
    </div>

    <div class="shortInfo">
        <p><?php the_field('homePageOpening_extraDescription1'); ?></p>
        <p class="line">
        <p><?php the_field('homePageOpening_extraDescription2'); ?></p>
        <p class="line">
        <p><?php the_field('homePageOpening_extraDescription3'); ?></p>
    </div>
</section>

<section id="homePageAboutMe" class="homePage homePageAboutMe">
    <h2><?php the_field('homePageAboutMe_mainTitle'); ?></h2>
    <div class="descriptions">
        <p><?php the_field('homePageAboutMe_description1'); ?></p>
        <p><?php the_field('homePageAboutMe_description2'); ?></p>
        <p><?php the_field('homePageAboutMe_description3'); ?></p>
        <p><?php the_field('homePageAboutMe_description4'); ?></p>
    </div>
</section>

<section id="homePageWork" class="homePage homePageWork">
    <h2><?php the_field('homePageWork_mainTitle'); ?></h2>
    <div class="descriptions">
        <p><?php the_field('homePageWork_description1'); ?></p>
        <p><?php the_field('homePageWork_description2'); ?></p>
        <p><?php the_field('homePageWork_description3'); ?></p>
    </div>
</section>

<section id="homePageContact" class="homePage homePageContact">
    <h2 class="contactTitle"><?php the_field('homePageContact_mainTitle'); ?></h2>
    <a class="mail link reverseColors" href="mailto:<?php the_field('homePageContact_mail'); ?>"> <?php the_field('homePageContact_mail'); ?></a>
    <div class="shortInfo">
        <!-- <p class="line"> -->
        <a class="link reverseColors" href="<?php the_field('homePageContact_linkedinURL'); ?>">
            <?php the_field('homePageContact_linkedin'); ?> </a>
    </div>
</section>