<?php 
/*
	Template Name: Illustration Page
*/
 ?>
<?php 

$image = get_field('home_image'); ?>

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

			<h1><?php the_title(); ?></h1>
			<p><?php the_content(); ?></p>

		<?php endwhile; else : ?>

			<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>

		<?php endif; ?>

		<?php 

			$num_posts = (is_front_page()) ? 6 : -1;

			$args = array(
				'post_type' => ['illustration'],
				'posts_per_page' => $num_posts
			);

			$query = new WP_Query($args);
		 ?>
		
		<div class="portfolio row clearfix">

			<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>

			<div class="clearfix col xs-6">
				<a href="<?php the_permalink(); ?>">
					<?php the_post_thumbnail('large'); ?>
					<p><?php the_title(); ?></p>
				</a>
			</div>

			<?php endwhile; endif; wp_reset_postdata(); ?>
		</div>


	</div>
</div>



<?php get_footer(); ?>