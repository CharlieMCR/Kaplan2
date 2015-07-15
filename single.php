<?php get_header(); ?>
<?php 
// $bar = get_field('images');
$bar = "<p>foo</p>";
$foo = new DOMDocument();
$foo->loadHTML($bar); 
// $foobar = new DOMXPath($foo);
// $thing = $foobar->query('//img');
// $foo = DOMDocument::loadHTML($bar);
// echo $foo->saveHTML();
// var_dump($foo);

$gallery = get_field('gallery');
$imageHeight;
$imageWidth;

?>
<?php  ?>
<div class="wrapper row">
	<div class="content col">
		<div class="row" id="js-width">
			<h1 class="title"><?php the_title(); ?></h1>
			<?php if (!empty($gallery)): ?>
				<?php $imageHeight = array(); ?>
				<?php $imageWidth = array(); ?>
				<div class="carousel-container">
					<div class="carousel">
						<?php foreach($gallery as $galleryImage): ?>
							<?php array_push($imageHeight, $galleryImage['sizes']['large-height']); ?>
							<?php array_push($imageWidth, $galleryImage['sizes']['large-width']); ?>
							<span class="image-wrapper js-image"><img src="" alt="<?php echo $galleryImage['title']; ?>" title="<?php echo $galleryImage['title']; ?>" data-src="<?php echo $galleryImage['sizes']['large']; ?>"></span>
						<?php endforeach; ?>
						<?php $imageHeight = max($imageHeight); ?>
						<?php $imageWidth = max($imageWidth); ?>
					</div>
					<a href="" class="slide-control left" id="js-slide-left"><i class="icomoon-angle-left"></i></a>
					<a href="" class="slide-control right" id="js-slide-right"><i class="icomoon-angle-right"></i></a>
					<ul id="js-list-count" class="carouselList"></ul>
				</div>
			<?php else: ?>
			<div class="slider-container">
				<div id="image-slider" class="image-gallery">
					<?php echo strip_tags(get_field('images'), '<a><img>'); ?>
				</div>
				<a href="" class="slide-control left" id="js-slide-left"><i class="icomoon-angle-left"></i></a>
				<a href="" class="slide-control right" id="js-slide-right"><i class="icomoon-angle-right"></i></a>
				<ul id="js-list-count"></ul>
			</div>
			<?php endif; ?>
		</div>
		<div class="row content content-single">
			<div class="col xs-12 md-10 offset-md-1 lg-8 offset-lg-2">
			<?php the_field('description'); ?>
				
		<div class="row project-links">
			<ul class="clearfix <?=(get_previous_post_link('%link')) ? "" : "left" ; ?><?=(get_next_post_link('%link')) ? "" : "right" ; ?>">
				<?=(get_previous_post_link('%link')) ? '<li class="prev">'.get_previous_post_link("%link").'</li>' : "" ; ?>
				<!-- <li class="pipe">|</li> -->
				<?=(get_next_post_link('%link')) ? '<li class="next">'.get_next_post_link("%link").'</li>' : "" ; ?>
			</ul>
		</div>
			</div>
		</div>


	</div>
</div>
<script>
	var imageHeight = <?php echo $imageHeight; ?>,
		imageWidth = <?php echo $imageWidth; ?>,
		imageLength = <?php echo count($gallery); ?>;
	jQuery(document).ready(function() {
		Kaplan.SetSlider();
	});
</script>
<?php get_footer(); ?>