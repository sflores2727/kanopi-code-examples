import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';

export default function Edit( {attributes, setAttributes} ) {
	const {itemsPerRow, hideImage, hideDescription, hideExpandableText} = attributes;
	const blockProps = useBlockProps();
	blockProps.style = {'--items-per-row': `${itemsPerRow}`};
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Grid Settings', 'expandable-gallery')}>
					<RangeControl
						label={__('Items per row', 'expandable-gallery')}
						value={attributes.itemsPerRow}
						onChange={(itemsPerRow) => setAttributes({ itemsPerRow })}
						min={1}
						max={4}
					/>
				</PanelBody>
				<PanelBody title={__('Card Settings', 'expandable-gallery')}>
					<ToggleControl 
						label={__('Hide image', 'expandable-gallery')}
						checked={hideImage}
						onChange={(hideImage) => setAttributes({ hideImage })}
					/>
					<ToggleControl 
						label={__('Hide description', 'expandable-gallery')}
						checked={hideDescription}
						onChange={(hideDescription) => setAttributes({ hideDescription })}
					/>
					<ToggleControl 
						label={__('Hide expandable text', 'expandable-gallery')}
						checked={hideExpandableText}
						onChange={(hideExpandableText) => setAttributes({ hideExpandableText })}
					/>
					
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
					<InnerBlocks allowedBlocks={['expandable-gallery/expandable-gallery-item']}/>
					{/* <!-- Live Text Region Desktop Only--> */}
					<div className="kanopi-example-expandable-gallery-expandable-text kanopi-example-expandable-gallery-live-text-area desktop-render" role="region" id="gallery-description-desktop" aria-live="assertive"></div>
					{/* <!-- Live Text Region Tablet Only--> */}
					<div className="kanopi-example-expandable-gallery-expandable-text kanopi-example-expandable-gallery-live-text-area-tablet tablet-render" role="region" id="gallery-description-tablet" aria-live="assertive"></div>
			</div>
		</>
	);
}
