<?php 

	$num_posts = (is_front_page()) ? 6 : -1;

	$args = array(
		'post_type' => ['print', 'web'],
		'posts_per_page' => $num_posts
	);

	$query = new WP_Query($args);
 ?>

<div class="portfolio row clearfix">

	<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>

	<div class="clearfix col">
		<a href="<?php the_permalink(); ?>">
			<?php the_post_thumbnail('medium'); ?>
			<p><?php the_title(); ?></p>
		</a>
	</div>

	<?php endwhile; endif; wp_reset_postdata(); ?>
</div>