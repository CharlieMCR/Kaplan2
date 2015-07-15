<?php 
/*
	Template Name: Contact Page
*/
 // header("Location: " . get_bloginfo('url') . "/contact/?status=thanks");
 ?>

 <?php get_header(); ?>
<h1>foo</h1>
<h1>bar</h1>
<h1>foo</h1>
<h1>bar</h1>
 <?php 
  ?>
		<div id="contact_form">
			<form action="" id="contactForm" class="clearfix" name="contact" method="POST">
			<input type="hidden" name="pid" value="[page_id]">
			<input type="hidden" name="action" value="add">
				<div class="u-field">
					<label for="name" id="name_label">Name*</label>
					<input type="text" name="name" id="name">
					<small>Please enter your name</small>
					<label for="name" class="error" id="name_error">This field is required</label>
				</div>
				<div class="u-field">
					<label for="email" id="email_label">Email Address*</label>
					<input type="email" name="email" id="email">
					<small>Please enter a valid email address</small>
					<label for="email" class="error" id="email_error">This field is required</label>

				</div>
				<div class="u-field">
					<label for="subject">Subject*</label>
					<input type="text" name="subject">
					<small>Please enter a subject</small>
				</div>
				<div class="u-field">
					<label for="message">Message*</label>
					<textarea name="message" cols="30" rows="5"></textarea>
				</div>
				<input type="submit" class="btn u-right" id="submit_btn">
			</form>
		</div>
<script>
	var foo = "<?php bloginfo('template_directory') ?>/contact.php";
	// console.log(foo);

</script>
 <?php get_footer(); ?>