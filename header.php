<!DOCTYPE html>
<html class="">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/images/favicon.ico">
		<link rel="apple-touch-icon" sizes="57x57" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-120x120.png">
		<link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/images/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/images/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/images/favicon-16x16.png" sizes="16x16">
		<link rel="manifest" href="<?php bloginfo('template_directory'); ?>/images/manifest.json">
		<meta name="msapplication-TileColor" content="#00aba9">
		<meta name="theme-color" content="#ffffff">
		<title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>

		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?> id="top">
		<div id="site-wrapper" class="">
			<div id="site-canvas">
				<div id="site-menu">
				<!-- <a href="#" class="toggle-nav"><i class="icon icon-menu"></i></a> -->
				<?php 

				$defaults = array(
					'container' => false,
					'theme_location' => 'primary-menu',
					'menu_class' => 'navigation',
					'link_before' => '<span>',
					'link_after' => '</span>'
				);

				wp_nav_menu($defaults);

				?>
					
				</div>

