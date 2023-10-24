<?php

/**
 * Custom Wordpress functions - for Natalia Świerczek Portfolio
 *
 * Authors: Natalia Świerczek (swierczek.n@gmail.com)
 * Copyright Natalia Świerczek Portfolio © All Rights Reserved
 */
// --------------------------------------------------- GLOBALS ---------------------------------------------------------
const DASHBOARD_LOGO_URL = '';
const DASHBOARD_LOGO_LABEL = 'Natalia Świerczek';
const DASHBOARD_LOGO_ANCHOR = 'project-author-url';

// ------------------------------------------- ASSETS > header + footer ------------------------------------------------
// Site elements loaded with header
function load_assets_in_header()
{
    if (!is_admin()) {
      
        wp_enqueue_style('sample-css', get_template_directory_uri() . '/assets/css/sample.css');
    }
}
add_action('init', 'load_assets_in_header', 1);

// Site elements loaded with footer
function load_assets_in_footer()
{
    if (!is_admin()) {
        // Libraries
        wp_enqueue_script('anime-js', get_template_directory_uri() . '/assets/js/common/animejs/anime.min.js', false, false, true);
        

    wp_enqueue_script('nsportfolio-js', get_template_directory_uri() . '/assets/js/project.min.js', false, false, true);
    

    }
    
}
add_action('init', 'load_assets_in_footer');


// Register scripts/styles. They can be optionally enqueued later on.
// add_action( 'wp_loaded', 'wpse248829_register_scripts' );
// function wpse248829_register_scripts() {
//     wp_register_script( 'nsportfolio-js', get_template_directory_uri() . '/assets/js/project.min.js', array( 'jquery' ), false, true );
//     wp_register_script( 'subPage-js', get_template_directory_uri() . '/assets/js/subPage.min.js', array( 'jquery' ), false, true );

// }

// // Enqueue scripts/styles.
// add_action( 'wp_enqueue_scripts', 'wpse248829_enqueue_scripts' );
// function wpse248829_enqueue_scripts() {
    
//     if ( is_front_page() ) {
//         wp_enqueue_script( 'nsportfolio-js' );
//     }

//     if ( is_page_template( 'work.php' ) ) {
//         wp_enqueue_script( 'subPage-js' );
//     }

//     if ( is_page_template( 'web_app.php' ) ) {
//         wp_enqueue_script( 'subPage-js' );
//     }

// }



// ------------------------------------- jQuery - disable on front-end (default) ---------------------------------------
function remove_jQuery_from_site()
{
    if (!is_admin()) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', false);
    }
}
add_action('init', 'remove_jQuery_from_site');

function reg_mymenu()
{
    register_nav_menu("header-menu", __("Menu główne"));
}
add_action("init", "reg_mymenu");
