<?php global $titan; ?>
<!DOCTYPE html>
<html <?php language_attributes( 'html' ) ?>>
<head>
	<?php if ( is_front_page() ) : ?>
		<title><?php bloginfo('name'); ?></title>
	<?php elseif ( is_404() ) : ?>
		<title><?php _e('Page Not Found |', 'titan'); ?> | <?php bloginfo('name'); ?></title>
	<?php elseif ( is_search() ) : ?>
		<title><?php printf(__ ("Search results for '%s'", "titan"), get_search_query()); ?> | <?php bloginfo('name'); ?></title>
	<?php else : ?>
		<title><?php wp_title($sep = ''); ?> | <?php bloginfo('name');?></title>
	<?php endif; ?>

	<!-- Basic Meta Data -->
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="copyright" content="<?php
		esc_attr( sprintf(
			__( 'Design is copyright %1$s The Theme Foundry', 'titan' ),
			date( 'Y' )
		) );
	?>" />

	<!-- Favicon -->
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon.ico" />

	<!-- WordPress -->
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php wp_head(); ?>
	
	<!-- Google Maps -->
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCsc05XOQz7VGu7NTk9ktaG_CrAflFltjE"></script>
	<script type="text/javascript" src="<?php echo includes_url('js/ColumbusWaterPlantsMap.js');?>"></script>
</head>
<body 
	<?php 
		body_class(); 
		if (is_page(1736)) { echo 'onload="initializeMap(10)" onunload="GUnload()"'; } 
		if (is_page(1750)) { echo 'onload="initializeMap(11)" onunload="GUnload()"'; } 
	?>>
	<div class="skip-content"><a href="#content"><?php _e( 'Skip to content', 'titan' ); ?></a></div>
	<div id="header" class="clear">
		<div id="follow">
			<div class="wrapper clear">
				<?php if ($titan->followDisable() != 'true' ) { ?>
					<ul>
						<?php if ($titan->emailToggle() == 'true') { ?>
							<li><a href="<?php
								echo esc_attr($titan->feedEmail() !== '' ? $titan->feedEmail() : "#" );
							?>"><img src="<?php echo get_template_directory_uri(); ?>/images/flw-email.png" alt="<?php _e( 'Email', 'titan' ); ?>"/></a></li>
						<?php
						} ?>
						<?php if ($titan->flickrToggle() == 'true') { ?>
							<li><a href="<?php
								echo esc_attr($titan->flickr() !== '' ? $titan->flickr() : "#" );
							?>"><img src="<?php echo get_template_directory_uri(); ?>/images/flw-flickr.png" alt="<?php _e( 'Flickr', 'titan' ); ?>"/></a></li>
						<?php
						} ?>
						<?php if ($titan->facebookToggle() == 'true') { ?>
							<li><a href="<?php
								echo esc_attr($titan->facebook() !== '' ? $titan->facebook() : "#" );
							?>"><img src="<?php echo get_template_directory_uri(); ?>/images/flw-facebook.png" alt="<?php _e( 'Facebook', 'titan' ); ?>"/></a></li>
						<?php
						} ?>
						<?php if ($titan->twitterToggle() == 'true') { ?>
							<li><a href="<?php
								echo esc_attr($titan->twitter() !== '' ? $titan->twitter() : "#" );
							?>"><img src="<?php echo get_template_directory_uri(); ?>/images/flw-twitter.png" alt="<?php _e( 'Twitter', 'titan' ); ?>"/></a></li>
						<?php
						} ?>
						<li><a class="rss" href="<?php bloginfo('rss2_url'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/flw-rss.png" alt="<?php _e( 'RSS', 'titan' ); ?>"/></a></li>
					</ul>
				<?php
				} ?>
			</div><!--end wrapper-->
		</div><!--end follow-->
		<div class="wrapper">
			<?php if ($titan->logoState() == 'true') : ?>
				<div id="title-logo">
					<?php $alt = ( $titan->logoAlt() !== '' ) ? $titan->logoAlt() : get_bloginfo( 'name' ); ?>
					<a href="<?php echo home_url( '/' ); ?>"><img src="<?php echo esc_attr( $titan->logoName() ); ?>" alt="<?php echo esc_attr( $alt ); ?>"/></a>
				</div>
				<?php if ($titan->logoTagline() == 'true') : ?>
					<div id="description">
						<?php bloginfo('description'); ?>
					</div><!--end description-->
				<?php endif; ?>
			<?php else : ?>
				<?php
				$logo_markup = is_home() ? '<h1 id="title"><a href="%1$s">%2$s</a></h1>' : '<div id="title"><a href="%1$s">%2$s</a></div>';
				printf(
					$logo_markup,
					home_url( '/' ),
					get_bloginfo( 'name' )
				);
				?>
				<div id="description">
					<?php bloginfo('description'); ?>
				</div><!--end description-->
			<?php endif; ?>
			<?php
				wp_nav_menu(
					array(
						'theme_location'  => 'nav-1',
						'container_id'    => 'navigation',
						'menu_id'         => 'nav',
						'fallback_cb'     => array( &$titan, 'main_menu_fallback' )
					)
				);
			?>
		</div><!--end wrapper-->
	</div><!--end header-->
<div class="content-background">
<div class="wrapper clear">
	<div class="notice">
		<?php if ((is_front_page()) && ($titan->noticeState() == 'true')) { ?>
			<div><?php echo $titan->noticeContent(); ?></div>
		<?php } ?>
	</div><!--end notice-->
	<?php if (is_page_template('left-sidebar.php')) : ?>
		<?php get_sidebar(); ?>
	<?php endif; ?>
<div id="content" <?php if (is_page_template('no-sidebar.php')) echo ('class="no-sidebar"'); ?>>