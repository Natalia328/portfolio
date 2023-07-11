<?php

/**
 * Description: Home page base element - for Natalia Świerczek Portfolio
 *
 * Authors: Natalia Świerczek (swierczek.n@gmail.com)
 * Copyright Natalia Świerczek Portfolio © All Rights Reserved
 */
?>

<section id="homePageOpening" class="homePage homePageOpening">

    <div class="openingBackground">
        <div class="stripe stripeLight"></div>
        <div class="stripe stripeLight"></div>
        <div class="stripe stripeLight"></div>
        <div class="stripe stripeLight"></div>
        <div class="stripe stripeLight"></div>
    </div>
    <div class="openingBackground">
        <div class="stripe stripeDark"></div>
        <div class="stripe stripeDark"></div>
        <div class="stripe stripeDark"></div>
        <div class="stripe stripeDark"></div>
        <div class="stripe stripeDark"></div>
    </div>
    <div class="openingTextWrapper">
        <div class="mainTitle">
            <h1 class="mainTitleInfo">
                <span><?php the_field('homePageOpening_mainTitleName'); ?></span>
                <span><?php the_field('homePageOpening_mainTitleLastName'); ?></span>
            </h1>
        </div>
        <div class="shortInfo">
            <p class="shortInfoText"><?php the_field('homePageOpening_extraDescription1'); ?></p>
            <p class="line">
            <p class="shortInfoText"><?php the_field('homePageOpening_extraDescription2'); ?></p>
        </div>
    </div>
</section>


<div class="introPage">
    <div class="introTitleWrapper">
        <div class="welcomeTitle"><?php the_field('welcomeTitle'); ?></div>
    </div>
    <div class="intro">
        <div class="toTransition first"></div>
        <div class="toTransition second"></div>
        <div class="toTransition third"></div>
        <div class="toTransition fourth"></div>
    </div>
</div>




<nav class="navigation">
    <h2 class="menuHeader">Menu</h2>
    <?php
    wp_nav_menu(
        array(
            "theme_location" => "header-menu",
        )
    ); ?>
    <button class="burger">
        <p class="menuBtn"><i class="fa-solid fa-eye"></i></p>
    </button>
</nav>



<div id="homePageAboutMe" class="homePageAboutMe lightSection">

    <?php $aboutMeMainFields = get_field('homePageAboutMe_main');

    if (count($aboutMeMainFields) > 0) : # Main repeater-field 
        foreach ($aboutMeMainFields[0] as $aboutMeMainKey => $aboutMeMainValue) :
            if (is_array($aboutMeMainValue) && count($aboutMeMainValue) > 0) : # Sub repeater-field 
                foreach ($aboutMeMainValue as $aboutMeSubKey => $aboutMeSubValue) : ?>
                    <p class="aboutMeParagraph paragraph-<?php echo $aboutMeSubKey + 1; ?>">
                        <?php foreach ($aboutMeSubValue as $aboutMeKey => $aboutMeValue) :
                            if ($aboutMeValue) : ?>
                                <span class="aboutMeText <?php echo $aboutMeKey; ?>">
                                    <?php echo $aboutMeValue; ?>
                                </span>
                        <?php endif;
                        endforeach; ?>
                    </p>
    <?php endforeach;
            endif;
        endforeach;
    endif; ?>

    <div class="aboutMeWrapper">
        <div class="aboutMeCircle aboutMeCircleBefore"></div>
        <div class="aboutMeCircle aboutMeCircleMain"></div>
        <div class="aboutMeDescrpition">
            <?php the_field('homePageAboutMe_description'); ?>
        </div>
    </div>
</div>

<section id="homePageWork" class="homePage homePageOpening homePageWork">
    <h2 class="headerTitle"><?php the_field('homePageWork_mainTitle'); ?></h2>
    <div id="homePageWorkWrapper" class="homePageWorkWrapper">
        <?php $allProjects = get_field('projectPages');
        foreach ($allProjects as $index => $project) : ?>
            <a class="homePageWorkLink project project-<?php echo $index + 1; ?>" href="<?php echo $project['projectData']['url']; ?>" target="<?php echo $project['projectData']['target']; ?>">
                <div class="marginWrapper">
                    <h3 class="projectLink">
                        <?php echo $project['projectData']['title']; ?>
                    </h3>
                    <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
                </div>
            </a>
        <?php endforeach ?>
    </div>
</section>

<section id="homePageContact" class="homePage homePageContact">

    <h2 class="headerTitleContact"><?php the_field('homePageContact_mainTitle'); ?></h2>

    <div class="contactPageMarquee">
        <a class="contactPageLink contactPageMail" href="mailto:<?php the_field('homePageContact_mail'); ?>"> <?php the_field('homePageContact_mail'); ?></a>
        <a class="contactPageLink contactPageMail" href="mailto:<?php the_field('homePageContact_mail'); ?>"> <?php the_field('homePageContact_mail'); ?></a>
    </div>
    <div class="linkWrapper">
        <h3>
            <a class="contactPageLink contactPageLinkedIn" href="<?php the_field('homePageContact_linkedinURL'); ?>" target="_blank"><?php the_field('homePageContact_linkedin'); ?></a>
        </h3>
        <h3>
            <a class="contactPageLink contactPageGithub" href="<?php the_field('homePageContact_githubURL'); ?>" target="_blank"><?php the_field('homePageContact_github'); ?></a>
        </h3>
    </div>



</section>