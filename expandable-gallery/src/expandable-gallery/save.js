import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes}) {
	const blockProps = useBlockProps.save();
	blockProps.style = {'--items-per-row': `${attributes.itemsPerRow}`};
	blockProps['data-items-per-row'] = attributes.itemsPerRow;
	return (
		<div { ...blockProps }>
			<div className="kanopi-example-expandable-gallery-container">
				<InnerBlocks.Content />
				<div className="kanopi-example-expandable-gallery-expandable-text kanopi-example-expandable-gallery-live-text-area desktop-render" role="region" id="gallery-description-desktop" aria-live="assertive"></div>
				{/* <!-- Live Text Region Tablet Only--> */}
				<div className="kanopi-example-expandable-gallery-expandable-text kanopi-example-expandable-gallery-live-text-area-tablet tablet-render" role="region" id="gallery-description-tablet" aria-live="assertive"></div>
			</div>
		</div>
	);
}
