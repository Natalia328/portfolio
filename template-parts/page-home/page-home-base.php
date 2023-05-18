<?php

/**
 * Description: Home page base element - for Natalia Świerczek Portfolio
 *
 * Authors: Natalia Świerczek (swierczek.n@gmail.com)
 * Copyright Natalia Świerczek Portfolio © All Rights Reserved
 */
?>
<section class="intro">
    <div class="toTransition thirdToTransition"></div>
    <div class="toTransition forthToTransition"></div>
    <div class="toTransition firstToTransition"></div>
    <div class="toTransition secondToTransition"></div>

</section>

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
    </section>
</nav>

<section id="homePageOpening" class="homePage homePageOpening">
    <div class="mainTitle">
        <h1 class="mainTitleInfo"><?php the_field('homePageOpening_mainTitleName'); ?></h1>
        <h1 class="mainTitleInfo"><?php the_field('homePageOpening_mainTitleLastName'); ?></h1>
    </div>

    <div class="shortInfo">
        <p><?php the_field('homePageOpening_extraDescription1'); ?></p>
        <p class="line">
        <p><?php the_field('homePageOpening_extraDescription2'); ?></p>
    </div>
</section>

<section id="homePageAboutMe" class="homePage homePageAboutMe lightSection">
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

    <div class="aboutMeDescrpition">
        <?php the_field('homePageAboutMe_description'); ?>
    </div>
</section>

<section id="homePageWork" class="homePage homePageOpening homePageWork">
    <h2 class="headerTitle"><?php the_field('homePageWork_mainTitle'); ?></h2>
    <div class="homePageWorkWrapper">
        <!-- <div class="homePageWorkEmptyCircle circle1">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>           
        </div>
        <div class="homePageWorkEmptyCircle circle2">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>           
        </div>
        <div class="homePageWorkEmptyCircle circle3">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>           
        </div>
        <div class="homePageWorkEmptyCircle circle4">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>           
        </div>
        <div class="homePageWorkEmptyCircle circle5">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>           
        </div>
        <div class="homePageWorkEmptyCircle circle6">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>           
        </div>
        <div class="homePageWorkEmptyCircle circle7">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>           
        </div> -->

        <?php $allProjects = get_field('projectPages');
        foreach ($allProjects as $index => $project) : ?>
            <a class="homePageWorkLink project-<?php echo $index + 1; ?>" href="<?php echo $project['projectData']['url']; ?>" target="<?php echo $project['projectData']['target']; ?>">
                <h3 class="projectLink">
                    <?php echo $project['projectData']['title']; ?>
                </h3>
                <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
            </a>
        <?php endforeach ?>

    </div>
</section>

<section id="homePageContact" class="homePage homePageContact">

    <h2 class="headerTitle"><?php the_field('homePageContact_mainTitle'); ?></h2>

    <div class="contactPageMarquee">
        <a class="contactPageLink contactPageMail" href="mailto:<?php the_field('homePageContact_mail'); ?>"> <?php the_field('homePageContact_mail'); ?></a>
        <a class="contactPageLink contactPageMail" href="mailto:<?php the_field('homePageContact_mail'); ?>"> <?php the_field('homePageContact_mail'); ?></a>
    </div>
    <div class="linkWrapper">
        <a class="contactPageLink contactPageLinkedIn" href="<?php the_field('homePageContact_linkedinURL'); ?>" target="_blank"><?php the_field('homePageContact_linkedin'); ?></a>

        <a class="contactPageLink contactPageGithub" href="<?php the_field('homePageContact_githubURL'); ?>" target="_blank"><?php the_field('homePageContact_github'); ?></a>

    </div>



</section>