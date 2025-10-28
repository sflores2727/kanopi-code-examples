import { useBlockProps, RichText } from '@wordpress/block-editor';
import Icon from './icon';

export default function save({ attributes, clientId }) {
    const {title, description, image, expandable_text, hideImage, hideDescription, hideExpandableText, id} = attributes;
    return (
       <div { ...useBlockProps.save() }>
            <div className="kanopi-example-expandable-gallery-content">
                {title && title !== '' && <RichText.Content tagName="h3" value={title} className="kanopi-example-expandable-gallery-title"/>}
                {!hideDescription && description && <RichText.Content tagName="p" value={description} className="kanopi-example-expandable-gallery-text" />}
            </div>
            {!hideImage && image?.url && 
                <div className="kanopi-example-expandable-gallery-image">
                    <img src={image.url} alt={image.alt} className={`wp-image-${image.id}`} width="240" height="240" />
                    {!hideExpandableText && expandable_text && 
                        <button className="kanopi-example-expandable-gallery-button" 
                            id={`gallery-btn-${id}`} 
                            data-live={expandable_text} 
                            data-id={id} 
                            screen-reader-text={`Expand ${title ?? 'Section'} Details`} 
                            aria-label={`Expand ${title ?? 'Section'} Details`}
                            aria-controls={`gallery-description-tablet gallery-description-desktop gallery-description-mobile-${clientId}`}
                            aria-expanded="false">
                            <Icon />
                        </button>
                    }
                </div>
            }       
            {!hideExpandableText && expandable_text &&
                <div class="kanopi-example-expandable-gallery-expandable-text mobile-render collapsed" role="region" aria-live="polite" id={`gallery-description-mobile-${id}`}>
                    {expandable_text}
                </div>
            }
           
       </div>
    );
}

