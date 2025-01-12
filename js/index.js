const loadPosts = async () =>{
  const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts`);
  const data = await res.json();
  const posts = data.posts;
  // console.log(posts);
  displayPosts(posts)
}

const displayPosts = (posts) =>{
  // console.log(posts);
  // 1. create divs for all posts
  posts.forEach(post =>{
    // console.log(post);
    // get the parent div by ID
    const allPosts = document.getElementById('all-posts');
    // create new element for the post
    const postDiv = document.createElement('div');
    // set innerhtml for new element
    postDiv.innerHTML = `
    <div class="mt-12 bg-[#F3F3F5] w-[772px] h-[270px] rounded-3xl ">
        <div class="flex items-center gap-6">
              <div class="">
                <img src="${post.image}" class="w-[72px] h-[72px] ml-10 mb-[260px] mt-10 rounded-2xl">
              </div>
              <div class="space-y-3 mb-[250px] mt-10">
                <div class="flex gap-5">
                  <p class="font-inter text-sm font-medium ">#${post?.category}</p>
                  <p class="font-inter text-sm font-medium ">Author: ${post?.author?.name}</p> 
                </div>
                <h2 class="text-xl">Title: ${post?.title}</h2>
                <p class="font-inter text-base">${post?.description}</p>
              </div>
        </div>
        <div class="-mt-[208px] mx-[200px] text-center flex  items-center gap-8 ">
            <div>
               <img src="images/tabler-icon-message-2.png" class="w-[28px] h-[28px]">
               ${post?.comment_count}
            </div>
            <div>
               <img src="images/tabler-icon-eye.png" class="w-[28px] h-[28px]">
               ${post?.view_count}
            </div>
            <div>
               <img src="images/tabler-icon-clock-hour-9.png" class="w-[28px] h-[28px]">
               ${post?.posted_time}
            </div>
            <div>
              <img src="images/email 1.png" class="w-[28px] h-[28px] read-btn" >
            </div>
      </div>
     
    </div>
    
    
    `
    // append new element inside the parent element
    allPosts.appendChild(postDiv);
    
     
      

  })
  // get markAsRead parent elemenet
  const markAsRead = document.getElementById('read-count');
  // create new element for the posts that are read
  const readCountDiv = document.createElement('div');
  // set classList for the new element
  readCountDiv.classList=('pt-[24px] px-[24px]');
  // set innerhtml for new element
  readCountDiv.innerHTML = `
      <div class="flex justify-between items-center gap-5">
          <h5 class="text-xl text-black">Title</h5>
          <p class="font-inter text-base">Mark as Read(<span id="count-result"></span>)</p>

      </div>
    `;
  markAsRead.appendChild(readCountDiv);
  
    const readCountButtons = document.getElementsByClassName('read-btn');
    const countResult = document.getElementById('count-result');
    let count = 0;
    for(let readCountButton of readCountButtons){
      readCountButton.addEventListener('click', (e) =>{
        count += 1;
        // console.log(count);
        countResult.innerHTML = count;
      })
    }

}




loadPosts()