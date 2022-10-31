// IIFE -- Immediately Invoked Function Expression
/*
         File Name: app.js
    Student's Name: Ho Yin Wong
         StudentID: 301290744
              Date: 28 October 2022
*/
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/bcontact');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();