<?php 

add_theme_support('menus');
add_theme_support('post-thumbnails');

function register_theme_menus() {

	register_nav_menus(
		array(
			'primary-menu' => __('Primary Menu')
		)
	);
}

add_action('init', 'register_theme_menus');

function cmcr_create_widget( $name, $id, $description ) {

	register_sidebar(array(
		'name' => __( $name ),	 
		'id' => $id, 
		'description' => __( $description ),
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h2 class="module-heading">',
		'after_title' => '</h2>'
	));

}
cmcr_create_widget( 'Logo', 'logo', 'Displays site logo' );
// cmcr_create_widget( 'linkedin', 'linkedin', 'Link to your Linkedin profile' );

add_action( 'phpmailer_init', 'my_phpmailer_example' );
function my_phpmailer_example( $phpmailer ) {
    $phpmailer->isSMTP();     
    $phpmailer->Host = 'smtp.example.com';
    $phpmailer->SMTPAuth = true; // Force it to use Username and Password to authenticate
    $phpmailer->Port = 25;
    $phpmailer->Username = 'yourusername';
    $phpmailer->Password = 'yourpassword';
}

function cmcr_theme_styles() {

	// wp_enqueue_style('main_css', get_template_directory_uri() . '/css/normalize.css');

	wp_enqueue_style('style_css', get_template_directory_uri() . '/css/style.css');

	// wp_enqueue_style('font_awesome', '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css');

	// wp_enqueue_style('museo', get_template_directory_uri() . '/fonts/');

	// wp_enqueue_style('bebas-neue', get_template_directory_uri() . '/fonts/bebas-neue');

}
add_action('wp_enqueue_scripts', 'cmcr_theme_styles');

function cmcr_theme_js() {

	// global $wp_scripts;

	// wp_register_script( 'html5_shiv', 'https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js', '', '', false );

	// wp_register_script( 'respond_shiv', 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js', '', '', false );

	// $wp_scripts->add_data('html5_shiv', 'conditional', 'lt IE 9' );

	// $wp_scripts->add_data('respond_shiv', 'conditional', 'lt IE 9' );

// 	wp_enqueue_script( 'less_js', 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.2.0/less.min.js', '', '', false );

	wp_enqueue_script('app_js', get_template_directory_uri() . '/js/app.js', array('jquery'), '', true);

	wp_enqueue_script('kaplan_js', get_template_directory_uri() . '/js/kaplan.js', array('jquery'), '', true);

	$cmcr_url = array('template_url' => get_bloginfo('template_url'));
	wp_localize_script('app_js', 'cmcr_url', $cmcr_url);
	wp_localize_script('kaplan_js', 'cmcr_url', $cmcr_url);
}
add_action( 'wp_enqueue_scripts', 'cmcr_theme_js');

add_filter( 'show_admin_bar', '__return_false'); // hide admin bar


add_action('init', 'myStartSession', 1);
add_action('wp_logout', 'myEndSession');
add_action('wp_login', 'myEndSession');

function myStartSession() {
    if(!session_id()) {
        session_start();
    }
}

function myEndSession() {
    session_destroy ();
}

// session_start();

function generateFormToken($form) {

// generate a token from an unique value
$token = md5(uniqid(microtime(), true));  

// Write the generated token to the session variable to check it against the hidden field when the form is sent
$_SESSION[$form.'_token'] = $token; 

return $token;

}