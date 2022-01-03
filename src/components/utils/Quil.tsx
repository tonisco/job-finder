import React from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

interface QuilProps {
	description: string
	setDescription: (value: string) => void
}

const Quil = ({ description, setDescription }: QuilProps) => {
	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }],
			[{ size: [] }],
			["bold", "italic", "underline", "blockquote"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link"],
			["clean"],
		],
	}

	const formats = [
		"header",
		"size",
		"bold",
		"italic",
		"underline",
		"blockquote",
		"list",
		"bullet",
		"link",
	]
	return (
		<ReactQuill
			theme="snow"
			modules={modules}
			formats={formats}
			value={description}
			onChange={(e) => setDescription(e)}
			className="description-input"
		/>
	)
}

export default Quil
