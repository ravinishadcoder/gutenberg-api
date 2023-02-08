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
	useBlockProps,
	InspectorControls,
	MediaUpload,
	RichText,
} from "@wordpress/block-editor";
import {
	Card,
	PanelBody,
	TextControl,
	Button,
	CardFooter,
} from "@wordpress/components";
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
export default function Edit({ attributes, setAttributes }) {
	const { imgURL, title, instaLink, fbLink, twLink,  ytLink, imgID ,ptLink} = attributes;
	const onSelectImage = (media) => {
		return setAttributes({
			imgURL: media.url,
			imgID: media.id,
		});
	};
	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title="Insert Social Media Link">
				<TextControl
					label="Instagram"
					value={instaLink}
					onChange={(value) => setAttributes({ instaLink: value })}
				/>
				<TextControl
					label="Facebook"
					value={fbLink}
					onChange={(value) => setAttributes({ fbLink: value })}
				/>
				<TextControl
					label="twitter"
					value={twLink}
					onChange={(value) => setAttributes({ twLink: value })}
				/>
				
				<TextControl
					label="Youtube"
					value={ytLink}
					onChange={(value) => setAttributes({ ytLink: value })}
				/>
				<TextControl
					label="Pinterest"
					value={ptLink}
					onChange={(value) => setAttributes({ ptLink: value })}
				/>
			</PanelBody>
		</InspectorControls>,

		<Card>
			<div className="img-container">
				<MediaUpload
					onSelect={onSelectImage}
					style={{ marginTop: "30px" }}
					type="image"
					value={imgID}
					render={({ open }) => (
						<Button
							onClick={open}
							className={imgID ? "image-button" : "button button-large"}
						>
							{!imgID ? (
								__("Upload Image")
							) : (
								<img
									style={{
										width: "200px",
										height: "200px",
										marginTop: "auto",
									}}
									src={imgURL}
								/>
							)}
						</Button>
					)}
				/>
			</div>
			<RichText
				key="editable"
				tagName="h3"
				placeholder="Your Name"
				value={title}
				onChange={(newTitle) => setAttributes({ title: newTitle })}
			/>
			<CardFooter>
				<div className="social-media-icons">
					<a href={instaLink}>
						<span class="dashicons dashicons-instagram"></span>
					</a>
					<a href={fbLink}>
						<span class="dashicons dashicons-facebook"></span>
					</a>
					<a href={twLink}>
						<span class="dashicons dashicons-twitter"></span>
					</a>
					
					<a href={ytLink}>
						<span class="dashicons dashicons-youtube"></span>
					</a>
					<a href={ptLink}>
					    <span class="dashicons dashicons-pinterest"></span>
					</a>
				</div>
			</CardFooter>
		</Card>,
	];
}
