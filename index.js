async function callApi(){
    var data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    data = await data.json();
    console.log(data);
    document.getElementById('res').innerHTML = data.map((i)  =>
    `
    <div> 
    <image src = ${i.image} />
    <h2> ${i.name} </h2>
    <p> Price: $ ${i.current_price} </p>
    <p> Market Cap: $ ${i.market_cap} </p>
    <p> 24h: ${i.price_change_percentage_24h} % </p>
    </div>
    `
    )
}

callApi();
