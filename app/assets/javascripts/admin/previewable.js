// 參考用法
// <%= f.file_field :icon, class: "d-none previewable" %>
// <%= image_tag tag.icon_or_default, style: "max-width: 100%;", class: "previewer", data: { file: "input#tag_icon" } %>

var $imagePreviewer = $(`<div class="fileinput-preview fileinput-exists thumbnail" style=""><img src=""></div>`)
var event = new Event('preview:load');

$(document).on("click", "img.previewer", function(e) {
	var target = this.getAttribute("data-file")
	document.querySelector(target).click()
})

$(document).on("change", "input[type='file'].previewable", function(e) {
	if (this.files !== undefined) {
		document.querySelector("#newImagePreview").innerHTML = ''
		for (file of this.files) {
			var $previewer = $imagePreviewer.clone()
			$previewer.appendTo($("#newImagePreview"))
			previewFile($previewer.find("img")[0], file)	
		}
		let $file_input = $(this).parents(".fileinput.fileinput-new")
		$file_input.removeClass("fileinput-new").addClass("fileinput-exists")
		document.querySelector("#newImagePreviewLabel").classList.remove("d-none")
		document.querySelector(".btn.btn-file .fileinput-exists").innerHTML = "重新選擇"
	}
})

function previewFile(previewer, file){
	// var file    = file_input.files[0]; //sames as here
	var reader  = new FileReader();

	reader.onloadend = function () {
	  previewer.src = reader.result;
	}

	if (file) {
	  reader.readAsDataURL(file); //reads the data as a URL
	} else {
	  // previewer.src = "";
	}
}