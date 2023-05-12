<section id="workPage" class="homePage workPage">
    <?php $projectImage = get_field('projectImage'); ?>
    <div class="projectElement" <?php if ($projectImage) : ?>style="background-image: url('<?php echo $projectImage; ?>'); background-size: cover; background-repeat: no-repeat;" <?php endif; ?>>
        <div class="projectLabel">
            TEST
        </div>
    </div>
</section>