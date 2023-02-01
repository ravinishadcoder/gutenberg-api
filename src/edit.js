/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
// const MY_TEMPLATE=[
// 	["core/image",{}],
// 	["core/heading",{placeholder:"custom tile"}],
// 	["core/paragraph",{placeholder:"description"}],
// 	["core/button",{placeholder:"button"}]
// ]
export default function Edit({ attributes, setAttributes }) {
	const { message} = attributes;

	const handleChange = (newValue) => {
		setAttributes({ message: newValue });
	};
	return (
		<div className="dep-block">
			<RichText
				key="editable"
				tagName="h3"
				onChange={handleChange}
				value={message}
			/>
			
		</div>
	);
}
