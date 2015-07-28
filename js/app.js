$(document).ready(function () {

	var crossOff = '<button class="completed"><i class="fa fa-minus-circle"></i></button>';
	var deleteButton = '<button class="delete"><i class="fa fa-close"></i></button>';

	$('#submit-button').click(function () {
		postItem();
	});

	$('.full-list').on('click', '.completed', function() {
		if($(this).closest('li').hasClass('item-open')){
			$(this).closest('li').removeClass('item-open').addClass('item-completed');
			$(this).closest('li').children('.completed').children('i').removeClass('fa-minus-circle').addClass('fa-circle-o');
			$(this).closest('li').children('hr').removeClass('inactive');
		} else if($(this).closest('li').hasClass('item-completed')) {
			$(this).closest('li').removeClass('item-completed').addClass('item-open');
			$(this).closest('li').children('.completed').children('i').removeClass('fa-circle-o').addClass('fa-minus-circle');
			$(this).closest('li').children('hr').addClass('inactive');
		} else {
			alert('Something went wrong');
		}
	});

	$('.full-list').on('click', '.delete', function() {
		$(this).closest('li').addClass('inactive');
	});

	function postItem() {
		var item= $('#item-name').val();
		var qty = $('#item-qty').val();

		var fullItem = '<li class="item item-open"><span class="item-name">' + item + '</span><span class="item-qty">' + qty + '</span>' + deleteButton + crossOff + '<hr class="crossed-out inactive" /></li>';

		$('.full-list').append(fullItem);
		$('#item-name').val('');
		$('#item-qty').val('');
	};

});

