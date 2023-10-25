<?php

/**
 * Description: Footer element - for Natalia Świerczek Portfolio
 *
 * Authors: Natalia Świerczek (swierczek.n@gmail.com)
 * Copyright Natalia Świerczek Portfolio © All Rights Reserved
 */
?>

</main>

<?php wp_footer(); ?>
<?php if (is_page('work-page')) : ?>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/subPage.min.js"></script>
<?php endif; ?>
<?php if (is_page('web-app')) : ?>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/subPage.min.js"></script>
<?php endif; ?>
</body>

</html>