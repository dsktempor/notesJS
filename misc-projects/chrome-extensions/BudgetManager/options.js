$(function(){

		// When the options page loads, get the current limit and pre-populate the limit input box value.
    chrome.storage.sync.get('limit',function(budget){
        $('#limit').val(budget.limit);
    });

		// when the user clicks the save button, store the limit in storage and close the tab
    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if (limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                close();  // closes the current tab
            });
        }
    });

		// when the user clicks reset total, store total=0 in storage. Notify the user that you've reset the total.
    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0}, function(){

            var notifOptions = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "Resetting Total",
                message: "Total has been reset to 0."
            };

            chrome.notifications.create('resetNotif', notifOptions);

        });
    });
});
