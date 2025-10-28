<?php
// This file is generated. Do not modify it manually.
return array(
	'today' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'today/today',
		'version' => '0.1.0',
		'title' => 'Today\'s Date',
		'category' => 'widgets',
		'icon' => 'calendar',
		'description' => 'This block displays today\'s date',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Today\'s Date: '
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'dateFormat' => array(
				'type' => 'string',
				'default' => 'long'
			)
		),
		'textdomain' => 'today',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
