import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, SelectControl, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

const dateFormatOptions = {
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    numeric: { year: 'numeric', month: 'numeric', day: 'numeric' },
};

export default function Edit({ attributes, setAttributes }) {
    const { text, align, dateFormat } = attributes;

    const blockProps = useBlockProps({
        style: { textAlign: align },
    });

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        title={__('Align Left', 'today-date')}
                        icon="align-left"
                        isPressed={align === 'left'}
                        onClick={() => setAttributes({ align: 'left' })}
                    />
                    <ToolbarButton
                        title={__('Align Center', 'today-date')}
                        icon="align-center"
                        isPressed={align === 'center'}
                        onClick={() => setAttributes({ align: 'center' })}
                    />
                    <ToolbarButton
                        title={__('Align Right', 'today-date')}
                        icon="align-right"
                        isPressed={align === 'right'}
                        onClick={() => setAttributes({ align: 'right' })}
                    />
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <PanelBody title={__('Date Settings', 'today-date')} initialOpen={true}>
					<TextControl
						label={__('Pre Text', 'today-date')}
						value={text}
						onChange={(text) => setAttributes({ text })}
					/>
                    <SelectControl
                        label={__('Date Format', 'today-date')}
                        value={dateFormat}
                        onChange={(key) => setAttributes({ dateFormat: key })}
                        options={[
                            { value: 'long', label: 'Long (October 24, 2025)' },
                            { value: 'short', label: 'Short (Oct 24, 2025)' },
                            { value: 'numeric', label: 'Numeric (10/24/2025)' },
                        ]}
                    />
                </PanelBody>
            </InspectorControls>

            <p {...blockProps}>
                {text}{' '}
                {new Date().toLocaleDateString('en-US', dateFormatOptions[dateFormat])}
            </p>
        </>
    );
}
