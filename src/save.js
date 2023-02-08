/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { imgURL, title, instaLink, fbLink, twLink,  ytLink, ptLink } =
		attributes;
	return [
		
			<div className="img-container">
				<img
					style={{
						width: "200px",
						height: "200px",
						marginTop: "auto",
					}}
					src={imgURL}
				/>
				<RichText.Content tagName="h3" value={title} />
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
			</div>
		,
	];
}
