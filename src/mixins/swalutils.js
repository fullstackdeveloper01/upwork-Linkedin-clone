export default {
	
	methods: {
		swalConfirm(message,type,Callback,url) {
			swal({
				title: 'Are You Sure ?',
				text: message,
			    icon: type,
			    buttons: true,
			    dangerMode: true,
			})
			.then((confirmed) => {
				if(confirmed==false || confirmed==null || confirmed ==''){
					window.history.pushState({}, '', '#'+url);
					var confirmed = false;
				}
	  			Callback(confirmed);
			});
		},
		swalConfirmForMethod(message,type,Callback) {
			swal({
			    title: 'Are You Sure ?',
				text: message,
			    icon: type,
			    buttons: true,
			    dangerMode: true,
			})
			.then((confirmed) => {
				if(confirmed==false || confirmed==null || confirmed ==''){	
				 	var confirmed = false;
				}
				if(confirmed==true){
					Callback(confirmed);
				}
			 	 
			});
		},
		 
	}
}