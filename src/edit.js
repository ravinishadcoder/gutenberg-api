/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import {
	InnerBlocks,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { PanelBody } from "@wordpress/components";
import { TextControl } from "@wordpress/components";
import { MyFontSizePicker } from "./fontPicker";
import { ColorPalette } from "@wordpress/components";
import { ToggleControl } from "@wordpress/components";
const ALLOWED_BLOCKS = ["core/button"];
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		trialDays,
		amount,
		toogleDeal,
		description,
		symbol,
		selectSize,
		headerColor,
	} = attributes;
	// console.log("edit", attributes.toogleDeal);

	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title="Block Settings">
				<TextControl
					label="Price Symbol"
					value={symbol ? symbol : ""}
					onChange={(newSymbol) => setAttributes({ symbol: newSymbol })}
				/>
				<TextControl
					label="Price"
					value={amount}
					onChange={(newAmount) => setAttributes({ amount: newAmount })}
				/>
			</PanelBody>
			<PanelBody title={"Typography"}>
				<MyFontSizePicker
					fontSize={selectSize}
					onChangeFontSize={(newSize) => setAttributes({ selectSize: newSize })}
				/>
			</PanelBody>
			<PanelBody title={"Background Color Settings"}>
				<p>
					<strong>Select header background color:</strong>
				</p>
				<ColorPalette
					value={headerColor}
					onChange={(newheaderColor) =>
						setAttributes({ headerColor: newheaderColor })
					}
				/>
			</PanelBody>
			<PanelBody title={"Best Deal Settings"}>
				<p>
					<strong>Enable Best Deal</strong>
				</p>
				<ToggleControl
					checked={toogleDeal}
					label="Enable something"
					onChange={() => setAttributes({ toogleDeal: !toogleDeal })}
				/>
			</PanelBody>
		</InspectorControls>,
		
		<div className="price-table-container">
			{toogleDeal&&<div className="price-table-deals">Best Deal</div>}
			<div
				style={{ backgroundColor: headerColor }}
				className="price-table-header"
			>
				<RichText
					key="editable"
					tagName="h2"
					placeholder="card title"
					value={title}
					onChange={(newTitle) => setAttributes({ title: newTitle })}
				/>

				<RichText
					key="editable"
					tagName="span"
					className="price-table-days"
					placeholder="trail days"
					value={trialDays}
					style={{ textAlign: "center" }}
					onChange={(value) => setAttributes({ trialDays: value })}
				/>
				<h2 style={{ fontSize: selectSize }}>{symbol + amount}</h2>
			</div>
			<div className="price-table-body">
				<RichText
					key="editable"
					tagName="p"
					placeholder="add description"
					value={description}
					onChange={(newDes) => setAttributes({ description: newDes })}
				/>
			</div>
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
		</div>,
	];
}
