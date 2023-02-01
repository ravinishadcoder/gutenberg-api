import { RichText } from "@wordpress/block-editor";

const attributes = {
	message: {
		type: "string",
		default: "Default message",
	},
};
const supports = {
    className: false,
};

const deprecated = [
	{
		attributes,
		supports,
		save(props) {
			const { message } = props.attributes;
			return (
				<div>
					<RichText.Content tagName="h2" value={message} />
				</div>
			);
		},
	},
];

export default deprecated;