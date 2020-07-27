const refsAndData ={
    references: {
        buttons: document.querySelectorAll(".buttons button"),
        article: document.querySelector(".info"),
     
    },
    data: {
   energy: 
        `<h2> Solar-Energy</h2><img src='img/m1.jpg'>
         
        <p>Nunc quis ultrices nisl. Nunc rhoncus venenatis purus, ut faucibus metus semper in. Aliquam erat volutpat. Nam sed nunc elit. Ut sed elit quis felis dignissim pretium nec non tortor. Phasellus nec tincidunt augue, non faucibus metus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non aliquam neque. Sed tempor fringilla justo vitae vestibulum. </p>`
    ,
    water: 
       `<h2>Water-Energy</h2><img src='img/m2.jpg'>
        <p>Vivamus porttitor id tellus in vulputate. Nullam congue rhoncus finibus. Nam ut nisl ultricies, sollicitudin nunc eu, feugiat lectus. Curabitur a lectus turpis. Curabitur sollicitudin feugiat leo, ut dictum eros efficitur et. Nam a laoreet eros, quis cursus diam. Etiam dolor ligula, iaculis non cursus vel, pretium sit amet nibh. Aliquam in risus pellentesque, sagittis dui at, maximus felis. Quisque mollis risus sed massa pharetra, quis pretium tortor ultrices.</p>`
        
    ,
    leaves: 
         `<h2>Green-Energy</h2><img src='img/m3.jpg'>
        <p>Nunc quis ultrices nisl. Nunc rhoncus venenatis purus, ut faucibus metus semper in. Aliquam erat volutpat. Nam sed nunc elit. Ut sed elit quis felis dignissim pretium nec non tortor. Phasellus nec tincidunt augue, non faucibus metus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non aliquam neque. Sed tempor fringilla justo vitae vestibulum.</p>`
    
    
}
};
function addContent(ev)
{
    let k = ev.target.value;
    refsAndData.references.article.innerHTML = refsAndData.data[k];
    
    ev.target.k.setAttribute("id","active")
 }       
    for(let btn of refsAndData.references.buttons)
        {
            btn.addEventListener('click', addContent);
        }




    
  


