<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php
function today_date_render( $attributes, $content ) {
	$text = $attributes['text'] ?? 'Today is';
	$align = $attributes['align'] ?? 'left';
	$dateFormatKey = $attributes['dateFormat'] ?? 'long';

	$formats = [
		'long' => 'F j, Y',    // October 24, 2025
		'short' => 'M j, Y',   // Oct 24, 2025
		'numeric' => 'm/d/Y',  // 10/24/2025
	];
	$date = date($formats[$dateFormatKey]);
	return sprintf(
		'<p style="text-align:%1$s"' . get_block_wrapper_attributes() . ';>%2$s %3$s</p>',
		esc_attr( $align ),
		esc_html( $text ),
		esc_html( $date )
	);
}
echo today_date_render( $attributes, $content );
