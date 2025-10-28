import { registerBlockType } from '@wordpress/blocks';
import '../expandable-gallery-item/index.js';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './expandable-gallery.js';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
