$(document).on('turbolinks:load', function(){
	$('#datatables').DataTable({
		"destroy": true,
		"pagingType": "simple",
		"lengthMenu": [
		[10, 25, 50, -1],
		[10, 25, 50, "全部"]
		],
		responsive: true,
		language: {
			search: "_INPUT_",
			searchPlaceholder: "搜尋表格內容",
			"zeroRecords": "沒有搜尋結果",
			"lengthMenu": "每頁顯示 _MENU_ 筆",
			"info": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
			"infoEmpty": "沒有紀錄",
      "infoFiltered": "（從 _MAX_ 條紀錄過濾）",
      "paginate": {
        "first": "最前面",
        "previous": "前一頁",
        "next": "下一頁",
        "last": "最後面"
	    },
		}
	});

  $('.card .material-datatables label').addClass('form-group');

});

function setFormValidation(id){
  $(id).validate({
    highlight: function(element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
    },
    success: function(element) {
        $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
    },
    errorPlacement : function(error, element) {
        $(element).append(error);
    },
  });
}