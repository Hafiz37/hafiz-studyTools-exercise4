
let tanyaNamaGithub = prompt('masukkan nama github anda')
alert('cek di console')
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
        console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    })
    .catch((error) => {
        console.log('ada yang error = ' +error);
    })
}
promiseFatch();


// asynch
async function ambilData(){
    let a = await fetch(webAPI)
    a = await a.json()

    console.log("*=~=~=~ mengambil data API menggunakan fatch() dengan asynch / await ~=~=~=*");
    console.log("seluruh data dari github users : ");
    console.log(a);
    console.log("beberapa data dari github users :");
    console.log("1. nama = "  + a.name);
    console.log('2. alamat = ' + a.location);
    console.log('3. repositori publik = ' + a.public_repos);
    console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
}

ambilData()



