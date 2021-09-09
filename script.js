
let tanyaNamaGithub = prompt('masukkan nama github anda')
alert('cek di console ya ' + tanyaNamaGithub)
let webAPI = "https://api.github.com/users/" + tanyaNamaGithub;


// fetch()
let promiseFatch = () =>{
    fetch(webAPI)
    .then((respons) => {
        if(respons.ok){
            return respons.json();
        } else {
            throw new Error(respons.status);
        }
    })
    .then((result) => {
        console.log("*=~=~=~ mengambil data API menggunakan fatch() dengan promise ~=~=~=*");
        console.log("seluruh data dari github users : ");
        console.log(result);
        console.log("beberapa data dari github users :");
        console.log("1. nama = "  + result.name);
        console.log('2. alamat = ' + result.location);
        console.log('3. repositori publik = ' + result.public_repos);
        console.log('4. id = ' + result.id);
        console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    })
    .catch((error) => {
        console.log('ada yang error = ' +error);
    })
}
promiseFatch();


// asynch
async function ambilData(){
    let anu = await fetch(webAPI)
    anu = await anu.json()

    console.log("*=~=~=~ mengambil data API menggunakan fatch() dengan asynch / await ~=~=~=*");
    console.log("seluruh data dari github users : ");
    console.log(anu);
    console.log("beberapa data dari github users :");
    console.log("1. nama = "  + anu.name);
    console.log('2. alamat = ' + anu.location);
    console.log('3. repositori publik = ' + anu.public_repos);
    console.log('4. id = ' + anu.id);
    console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
}

ambilData()



