  // Binance  api
  //Cryptocurrency prices and charts. Free access to current data for Bitcoin and thousands of altcoins.
  const renderContainer = document.querySelector('.container');
  const renderTable = document.querySelector('#container-table');
  const messageHeader = document.querySelector('#header');
  const displayUi = document.querySelector('#btn-move');
  const interfaceUi = document.querySelector('.all');
  const landPage = document.querySelector('.landing-page');

const crypto_url = 'https://binance43.p.rapidapi.com/ticker/24hr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23958bc3dbmshe25fdf2ca3bf9e6p139625jsnee76e010e4f2',
		'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
	}
};

const showFinanceData = async function(){

    try{
        const response = await fetch(crypto_url,options);
        console.log(response);
        const data = await response.json();
        console.log(data);
        let binanceData = "";
        // const [{symbol,priceChange,percent,weightedAvgPrice, previous}] =  data;
        data.map(item=>{
          binanceData += `<tr>
          <td>${item.symbol}</td>
          <td>${item.priceChange}</td>
          <td>${item.priceChangePercent}%</td>
          <td>${item.weightedAvgPrice}</td>
          <td>${item.prevClosePrice}</td>
        </tr>`
      
    })
    document.getElementById('binance-data-body').innerHTML= binanceData;
    
    }catch(err){
      messageHeader.textContent = 'Unable to fetch data:) check your network connection';
      messageHeader.style.color='red';
    }
   

}
showFinanceData()
displayUi.addEventListener('click', function(){
  landPage.classList.add('landing_page-active');
  interfaceUi.classList.remove('display_all');
})

