import { useBlockProps, BlockControls, InspectorControls, MediaUploadCheck, MediaUpload, RichText } from '@wordpress/block-editor';
import { TextareaControl, TextControl, Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
export default function Edit( { attributes, setAttributes, clientId } ) {
     const blockProps = useBlockProps();
    const {title, description, image, expandable_text, id} = attributes;
    const parentAttributes = useSelect((select) => {
		const { getBlockRootClientId, getBlock } = select('core/block-editor');
		const parentId = getBlockRootClientId(clientId);
		if (!parentId) return null;
		const parentBlock = getBlock(parentId);
		return parentBlock?.attributes || null;
	}, [clientId]);

        // Only destructure if parentAttributes exist
    const hideImage = parentAttributes?.hideImage ?? false;
    const hideDescription = parentAttributes?.hideDescription ?? false;
    const hideExpandableText = parentAttributes?.hideExpandableText ?? false;
    // Only setAttributes if parentAttributes exists
    useEffect(() => {
        if (parentAttributes) {
            setAttributes(parentAttributes);
        }
        if(!id){
            setAttributes({id: getUniqueId(20)});
        }
    }, [parentAttributes]);

   
    const onSelectImage = (media) => {
        setAttributes({ image: { id: media.id, url: media?.url, alt: media.alt } });
    };
    return (
        <div { ...blockProps }>
            {!hideImage && 
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={onSelectImage}
                        allowedTypes={['image']}
                        value={image?.id}
                        render={({ open }) => (
                            <>
                                <Button onClick={open} className="button button-large">
                                        {image?.url ? __('Edit Image', 'expandable-gallery') : __('Select Image', 'expandable-gallery')}
                                </Button>
                                {image?.url && <img src={image.url} width="240" height="240" />}
                            </>
                        )}
                    />
                </MediaUploadCheck>
            }
            <RichText placeholder={__("Title", "expandable-gallery")} value={title} onChange={(title) => setAttributes({title})} tagName='h3' />
            {!hideDescription && 
                <RichText placeholder={__("Description", "expandable-gallery")} value={description} onChange={(description) => setAttributes({description})} tagName='p' className='gallery-item-description' />
            }
            {!hideExpandableText && 
                <RichText placeholder={__("Expandable Text", "expandable-gallery")} value={expandable_text} onChange={(expandable_text) => setAttributes({expandable_text})} tagName='p' className='gallery-item-expandable' />
            }
        </div>
    );
}

function getUniqueId(length = 20) {
    let bytes;

    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        // Secure random bytes
        bytes = new Uint8Array(Math.ceil(length / 2));
        crypto.getRandomValues(bytes);
    } else {
        // Fallback to Math.random (less secure)
        bytes = [];
        for (let i = 0; i < Math.ceil(length / 2); i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
    }

    // Convert bytes to hex
    let hex = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');

    return 'kanopi-example--' + hex.slice(0, length);
}