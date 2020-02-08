$(function(){

		// Every time the pop up opens, the HTML file will reload, meaning this JS will also reload.
		// Update the UI with the current total and the limit (get that data from storage)
    chrome.storage.sync.get(['total','limit'],function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    });

    $('#spendAmount').click(function(){
				//Everytime the spend button is clicked

        chrome.storage.sync.get(['total', 'limit'],function(budget){
            var newTotal = 0;
            if (budget.total){
                newTotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();
            if (amount){
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal}, function(){
								// if an amount was entered and the new total breaches the limit
								if (amount && newTotal >= budget.limit){
                    var notifOptions = {
                        type: "basic",
                        iconUrl: "icon48.png",
                        title: "Limit reached!",
                        message: "Uh oh, look's like you've reached your alloted limit."
                };
                chrome.notifications.create('limitNotif', notifOptions);

            }
						});

						// Update the UI
            $('#total').text(newTotal);
            $('#amount').val('');

        });
    });
});
