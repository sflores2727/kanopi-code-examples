<?php
// This file is generated. Do not modify it manually.
return array(
	'expandable-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'kanopi-example/expandable-gallery',
		'version' => '0.1.0',
		'title' => 'Expandable Gallery',
		'category' => 'widgets',
		'icon' => 'plus',
		'description' => 'Displays a gallery of images with expandable text',
		'keywords' => array(
			'expand',
			'gallery'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'itemsPerRow' => array(
				'type' => 'integer',
				'default' => 3
			),
			'hideImage' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideDescription' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideExpandableText' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'expandable-gallery',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./expandable-gallery.js'
	),
	'expandable-gallery-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'kanopi-example/expandable-gallery-item',
		'version' => '0.1.0',
		'title' => 'Expandable Gallery Item',
		'category' => 'widgets',
		'icon' => 'plus',
		'description' => 'Displays an expandable gallery item',
		'keywords' => array(
			'expand',
			'gallery',
			'item'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string'
			),
			'image' => array(
				'type' => 'object',
				'default' => null
			),
			'description' => array(
				'type' => 'string'
			),
			'expandable_text' => array(
				'type' => 'string'
			),
			'hideImage' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideDescription' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideExpandableText' => array(
				'type' => 'boolean',
				'default' => false
			),
			'id' => array(
				'type' => 'string'
			)
		),
		'parent' => array(
			'kanopi-example/expandable-gallery'
		),
		'textdomain' => 'expandable-gallery',
		'editorScript' => 'file:./index.js'
	)
);
