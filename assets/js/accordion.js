let accordionItems = document.querySelectorAll('.accordion-item');



accordionItems.forEach((item)=>{
    item.addEventListener('click',()=>{


        accordionItems.forEach(otherItem =>{
            let otherPanel = otherItem.parentElement.nextElementSibling; 

            if(otherItem !== item){
                otherItem.classList.remove('active'); 
                otherPanel.style.maxHeight = null;
            }
        }); 
      
        item.classList.toggle('active');



        let panel = item.parentElement.nextElementSibling; 

        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        // panel.classList.toggle('active');
        // panel.style.maxHeight = null;
    });
});