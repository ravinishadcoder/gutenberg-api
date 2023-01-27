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
import {
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks,
	AlignmentToolbar,
	BlockControls,
	useBlockProps,
} from "@wordpress/block-editor";

import { IconButton, PanelBody, RangeControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { MyFontSizePicker } from "./fontPicker";


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

const ALLOWED_BLOCKS = ["core/button"];



export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		body,
		alignment,
		titleColor,
		backgroundImage,
		overlayColor,
		overlayOpacity,
		selectSize
	} = attributes;
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}
	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}
	function onTitleColorChange(newColor) {
		setAttributes({ titleColor: newColor });
	}
	function onSelectImage(newImage) {
		setAttributes({ backgroundImage: newImage.sizes.full.url });
	}
	function onOverlayColorChange(newColor) {
		setAttributes({ overlayColor: newColor });
	}
	function onOverlayOpacityChange(newOpacity) {
		setAttributes({ overlayOpacity: newOpacity });
	}
	function onChangeAlignment(newAlignment) {
		setAttributes({
			alignment: newAlignment === undefined ? "none" : newAlignment,
		});
	}
	function onChangeFontSize(newSize){
     setAttributes({selectSize:newSize});
	}
	
	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title={"Font Color Settings"}>
				<p>
					<strong>Select a Title color:</strong>
				</p>
				<ColorPalette value={titleColor} onChange={onTitleColorChange} />
			</PanelBody>
			<PanelBody title={"Typography"}>
			<MyFontSizePicker fontSize={selectSize} onChangeFontSize={onChangeFontSize}/>
			</PanelBody>
			<PanelBody title={"Background Image Settings"}>
				<p>
					<strong>Select a Background Image:</strong>
				</p>
				<MediaUpload
					onSelect={onSelectImage}
					type="image"
					value={backgroundImage}
					render={({ open }) => {
						return (
							<IconButton
								onClick={open}
								icon="upload"
								className="editor-media-placeholder__button"
							>
								Background Image
							</IconButton>
						);
					}}
				/>
				<div style={{ marginTop: "20px", marginBottom: "40px" }}>
					<p>
						<strong>Overlay Color:</strong>
					</p>
					<ColorPalette value={overlayColor} onChange={onOverlayColorChange} />
				</div>
				<RangeControl
					label={"Overlay Opacity"}
					value={overlayOpacity}
					onChange={onOverlayOpacityChange}
					min={0}
					max={1}
					step={0.05}
				/>
			</PanelBody>
		</InspectorControls>,
		<div {...useBlockProps()}>
			<div
				className="cta-container"
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div
					className="cta-overlay"
					style={{
						background: overlayColor,
						opacity: overlayOpacity,
					}}
				></div>
				{
					<BlockControls>
						<AlignmentToolbar onChange={onChangeAlignment} value={alignment} />
					</BlockControls>
				}

				<RichText
					key="editable"
					tagName='h2'
					placeholder="Your CTA title"
					value={title}
					onChange={onChangeTitle}
					style={{ color: titleColor, textAlign: alignment,fontSize:selectSize }}
				/>
				<RichText
					key="editable"
					tagName='p'
					placeholder="Your Description"
					style={{ textAlign: alignment,fontSize:selectSize }}
					value={body}
					onChange={onChangeBody}
				/>

				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</div>,
	];
}
