

<section id="workPageOpening" class="workPage">
    <a class= "homeBtn" href="..\index.php">HOME</a>
    <div class="mainTitle">
        <h1 class="mainTitleInfo">Natalia</h1>
        <h1 class="mainTitleInfo">Świerczek</h1>
    </div>
</section>


<section id="workPage" class="workPageSection">

<div class="workPageWrapper">
    <p class="workText">Commercial website</p>
    <p class="workText">Technology</p>
    <p class="workText">HTML</p>
    <p class="workText">CSS</p>
    <p class="workText">JavaScript</p>
    <p class="workText">Go to <i class="fa-regular fa-eye"></i> </p>

</div>

    <?php $projectImage = get_field('projectImage'); ?>
    <div class="projectElement projectElementFirst" <?php if ($projectImage) : ?>style="background-image: url('<?php echo $projectImage; ?>'); background-size: cover; background-repeat: no-repeat;" <?php endif; ?>><div class="hero-img"></div></div>

    <?php $projectImage2 = get_field('projectImage2'); ?>
    <div class="projectElement projectElementSecond" <?php if ($projectImage2) : ?>style="background-image: url('<?php echo $projectImage2; ?>'); background-size: cover; background-repeat: no-repeat;" <?php endif; ?>><div class="hero-img"></div></div>

    <?php $projectImage3 = get_field('projectImage3'); ?>
    <div class="projectElement projectElementThird" <?php if ($projectImage3) : ?>style="background-image: url('<?php echo $projectImage3; ?>'); background-size: cover; background-repeat: no-repeat;" <?php endif; ?>>
    <div class="hero-img"></div>
    </div>

    <?php $projectImage4 = get_field('projectImage4'); ?>
    <div class="projectElement projectElementFourth" <?php if ($projectImage4) : ?>style="background-image: url('<?php echo $projectImage4; ?>'); background-size: cover; background-repeat: no-repeat;" <?php endif; ?>><div class="hero-img"></div></div>

    
</section>