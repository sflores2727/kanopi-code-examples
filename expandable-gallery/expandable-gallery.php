<?php
/**
 * Plugin Name:       Expandable Gallery
 * Description:       Displays a gallery of images with expandable text
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       expandable-gallery
 *
 * @package KanopiExample
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
function kanopi_example_expandable_gallery_block_init() {
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	$block_path = __DIR__ . '/build';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		$path = __DIR__ . "/build/{$block_type}";
    if ( file_exists( "{$path}/block.json" ) ) {
        register_block_type( $path );
    } else {
        error_log( "Block folder missing or block.json missing: {$path}" );
    }
		// if( file_exists( $block_path . '/' . $block_type ) ) {
		// 	register_block_type( __DIR__ . "/build/{$block_type}" );
		// }else{
		// 	error_log( 'Block build folder missing: ' . $block_path . '/' . $block_type );
		// }
		// register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'kanopi_example_expandable_gallery_block_init' );
