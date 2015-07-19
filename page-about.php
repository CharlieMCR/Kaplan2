<?php 
/*
	Template Name: About Page
*/
 ?>

<?php 

$image = get_field('home_image');
$profile = get_field('profile'); ?>

<?php get_header(); ?>

<?php if(!empty($image)): ?>
<div class="header" style="background-image: url('<?php echo $image['url']; ?>');">
<?php else : ?>
<div>
<?php endif; ?>
</div>
<div class="wrapper">
	<div class="content">

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

			<div class="row">
				<h1 class="title"><?php the_title(); ?></h1>
			</div>
			<?php if(!empty($image)): ?>
			<div class="row">
				<img src="<?php echo $profile['url']; ?>" alt="<?php echo $profile['alt']; ?>" class="profile-picture">
			</div>
			<?php endif; ?>
			<div class="row content content-single">
				<div class="col xs-12 md-10 offset-md-1 lg-8 offset-lg-2">
				<?php the_content(); ?>
				</div>
			</div>

		<?php endwhile; else : ?>

			<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>

		<?php endif; ?>

	</div>
</div>


<script>
	;(function($){
		function headerImage(){
			$header = $('.header'),
			imageWidth = '<?php echo $image['width']; ?>',
			imageHeight = '<?php echo $image['height']; ?>',
			windowWidth = $(window).width();
			imageHeight = Math.ceil(imageHeight*(windowWidth/imageWidth));
			$header.css({'height': imageHeight+'px'});
		}
		$(window).load(function(){
			headerImage();
		});
		$(window).resize(function(){
			window.setTimeout(function(){
				headerImage();
			},200);
		});
		window.addEventListener("orientationchange", function() {
		    headerImage();
		});
		window.addEventListener("orientationchange", function() {
			headerImage();
		}, false);
	})(jQuery);
</script>
<?php get_footer(); ?>