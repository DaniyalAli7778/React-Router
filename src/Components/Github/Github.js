import React, { useEffect, useState } from "react";

  function Github(){
  const [followers, setFollowers]=useState( []);
  useEffect(()=>{
     fetch('https://api.github.com/users/DaniyalAli7778')
     .then(response=> response.json())
     .then(data=>{
      console.log(data);
      setFollowers(data)
     })
    },[setFollowers]) 

   return(
    <>
   
      <div  className='bg-gray-600 text-white text-3xl p-4 h-24 flex items-center justify-center'>  
      <img src={followers.avatar_url} alt="GitPicture" width={100} className="mr-20" />  GitHub Repositries : {followers.public_repos}

      </div>

    </>
  );
}
export default Github;