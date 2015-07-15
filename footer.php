</div>
<footer class="col xs-12">

		<div class="col xs-12 md-6 contact">
		<a href="mailto:info@dkaplan.co.uk" title="Contact" id="js-mailto"><i class="icomoon-envelope"></i></a>
		</div>
		<div class="col xs-12 md-6 social">
			<a target="_blank" href=""><i class="icomoon-linkedin2"></i></a>
			<a target="_blank" href=""><i class="icomoon-skype"></i></a>
			<a target="_blank" href="https://twitter.com/asphaltenes"><i class="icomoon-twitter"></i></a>
		</div>
		<div class="sub-footer">
			<span>&copy; Copyright <a class="" href="<?php bloginfo('url'); ?>"><?php bloginfo('title'); echo " ".date('Y'); ?></a></span>
		</div>


</footer>
<nav>

	<div class="topMenu xs-12 sm-12 md-12">
		<a href="#" class="toggle-nav"><i class="icon icomoon-menu"></i></a>
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
	<div class="logo">
		<a class="navbar-brand" href="<?php bloginfo('url'); ?>">
			<?php strip_tags(get_sidebar('logo'), '<img>'); ?>
		</a>
	</div>
	

</nav><!--end primary_nav-->
<a href="#" class="exit-off-canvas"></a>
</div>
<!-- </div> -->
<?php wp_footer(); ?>
			</div>
		</div>
 <?php
// generate a new token for the $_SESSION superglobal and put them in a hidden field
$newToken = generateFormToken('kaplanform');   
?>
<div class="overlay" id="overlay">
	<div id="contact_form" class="contact-form clearfix">
		<form action="" id="contactForm" class="clearfix" name="contact" method="POST" autocomeplete="off">
		<div class="clearfix">
			<a href="" class="exit-form"><i class="icomoon-close"></i></a>
		</div>
		<div class="message">
			<h1>Contact</h1>			
		</div>
		<input type="hidden" name="token" id="token" value="<?php echo $newToken; ?>">
		<input type="hidden" name="action" value="add">
			<div class="col xs-12">
				<label for="name" id="name_label">Name</label>
				<input type="text" name="name" id="name">
				<label for="name" class="error" id="name_error">This field is required</label>
				<label for="email" id="email_label">Email Address</label>
				<input type="email" name="email" id="email">
				<label for="email" class="error" id="email_error">This field is required</label>
			</div>
			<div class="col xs-12">
				<label for="subject">Subject</label>
				<input type="text" name="subject" id="subject">
				<label for="subject" class="error" id="subject_error">This field is required</label>
				<label for="message">Message</label>
				<textarea name="message" id="message"></textarea>
				<label for="message" class="error" id="message_error">This field is required</label>
			</div>
			<div class="col xs-12">
				<input type="submit" class="btn" id="submit_btn" value="Get in touch">
			</div>
		</form>
	</div>
</div>
</body>
</html>