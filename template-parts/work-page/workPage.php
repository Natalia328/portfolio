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


<section id="workPage" class="homePage workPage">
    <?php $projectImage = get_field('projectImage'); ?>
    <div class="projectElement" <?php if ($projectImage) : ?>style="background-image: url('<?php echo $projectImage; ?>'); background-size: cover; background-repeat: no-repeat;" <?php endif; ?>>
        <div class="projectLabel">
            TEST
        </div>
    </div>
</section>