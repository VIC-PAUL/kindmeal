//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=kgf&key=[YOUR_API_KEY]'
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=kgf&key=AIzaSyDx-1AEUxDCrNlicp4UeebNPIUdkMDnMUo
//AIzaSyDx-1AEUxDCrNlicp4UeebNPIUdkMDnMUo
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=AIzaSyDx-1AEUxDCrNlicp4UeebNPIUdkMDnMUo
//let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`

const API_KEY="AIzaSyDx-1AEUxDCrNlicp4UeebNPIUdkMDnMUo";

let q=""

let search = async () => {
    let query = document.getElementById("query").value
    let data = await getData(query);
    q=query;
    append(data);
};

let getData = async (query) => {
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyDx-1AEUxDCrNlicp4UeebNPIUdkMDnMUo`;

    let res= await fetch(url);
    let data= await res.json();

    console.log(data);
    return data.items

};

let append = (data)=>{
    let container= document.getElementById("container");
    container.innerHTML=null;

    data.forEach((el)=>{
        let img=document.createElement("img");
        img.src=el.snippet.thumbnails.medium.url;

        let h3= document.createElement("h3");
        h3.innerText=el.snippet.title;

        let div = document.createElement("div");
        div.onclick = ()=>{
            saveVideo(el);
        }
        div.setAttribute("class" , "video");
        div.append(img,h3);
        container.append(div);
    })
};

let saveVideo = (data) =>{
    localStorage.setItem("video",JSON.stringify(data));
    window.location.href = "video.html"
};

// let sort = async () =>{
//     let data = await getData(q);
//     data = data.sort((a,b)=>{
//        return b.snippet.publishTime - a.snippet.publishTime;
//     })
//     append(data);
// }

let filter = async () =>{
    let data = await getData(q);
    data = data.filter((el)=>{
       return el.snippet.channelId === "UC0PKLLmL8pIJLjOI1gBH_pA";
    })
    append(data);
}