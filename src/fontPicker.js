import { FontSizePicker } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const fontSizes = [
    {
        name: __( 'Small' ),
        slug: 'small',
        size: '1rem',
    },
    {
        name: __( 'Medium' ),
        slug: 'medium',
        size: '2rem',
    },
    {
        name: __( 'Big' ),
        slug: 'big',
        size: '4rem',
    },
];


export const MyFontSizePicker = ({fontSize,onChangeFontSize}) => {
   

    return (
        <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={ fontSizes }
            value={ fontSize }
            fallbackFontSize={ fontSize }
            onChange={ ( newFontSize ) => {
                onChangeFontSize(newFontSize)
            } }
        />
    );
};