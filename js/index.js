const loadPosts = async (categoryName) =>{
  const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
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
            <img src="images/email 1.png" class="w-[28px] h-[28px] read-btn" id="read-count-btn" onclick="readCountBtn()">
            </div>
      </div>
     
    </div>
    
    
    `
    // append new element inside the parent element
    allPosts.appendChild(postDiv);
  
  const markAsReadBtn = document.getElementById('read-count-btn');
  markAsReadBtn.addEventListener('click', (e) =>{
    // get markAsRead parent elemenet
    const markAsReadDiv = document.getElementById('read-count');
    // create new element for the posts that are read
    const postViewedDiv = document.createElement('div');
    postViewedDiv.classList = `w-[326px] h-[82px] bg-white rounded-[16px] mx-[16px] my-[15px] space-y-[16px]`;
    postViewedDiv.innerHTML = `
        <div class="flex items-center gap-2">
          <h2 class="text-sm">Title: ${post?.title}</h2>
          <img src="images/tabler-icon-eye.png" class="w-[28px] h-[28px]">
                ${post?.view_count}

        </div>`
    markAsReadDiv.appendChild(postViewedDiv);

  })

  
     
      

  })
}


const handleSearch = () =>{
  // toggleLoadingSpinner(true)
  const searchField = document.getElementById('search-field');
  const categoryName = searchField.value;
  searchField.value = '';
  console.log(categoryName);
  loadPosts(categoryName);
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
}

const readCountBtn = () =>{

  
  const readCountButtons = document.getElementsByClassName('read-btn');
  
  
  const countResultElement = document.getElementById('count-result');
  let count = 0;
  for(let readCountButton of readCountButtons){
    console.log(readCountButton);
    
    count += 1;
    countResultElement.innerHTML = count;

  }
 
  

  
  

}

// load latest posts api
const loadLatestPosts = async () =>{
  const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
  const data = await res.json();
  const latestPosts = data;
  // console.log(posts);
  displayLatestPosts(latestPosts)
}

// display latest posts
const displayLatestPosts = (latestPosts) => {
  // console.log(posts);
  // get each post for creating cards
  latestPosts.forEach(latestPost => {
    // console.log(post);
    // get the element for creating cards
    const latestPosts = document.getElementById('latest-posts-cards');
    // create new div
    const latestPostsDiv = document.createElement('div');
    // set classLists and innerHTML
    latestPostsDiv.classList = `card bg-base-100 w-96 shadow-xl`
    latestPostsDiv.innerHTML = `
      <div>
          <figure class="px-10 pt-10">
            <img
              src="${latestPost?.cover_image}"
              alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="card-body">
            <p class="text-[#12132D99] text-base">${latestPost?.author?.posted_date || "No Publish Date"}</p>
            <h2 class="card-title text-lg">${latestPost?.title}</h2>
            <p class="text-[#12132D99] text-base">${latestPost?.description}</p>
            <div class="flex gap-4">
                <img src="${latestPost?.profile_image}" class="w-[44px] h-[44px] rounded-full">
                <div>
                  <h5 class="text-base">${latestPost?.author?.name}</h5>
                  <p class="text-sm text-[#12132D99]">${latestPost?.author?.designation || "Unknown"}</p>
                </div>
            </div>
          </div>
      </div>

               
    
          
    
    `;
    // appendchild to the parent latestPosts
    latestPosts.appendChild(latestPostsDiv);
    
  })
  

}



loadPosts();

loadLatestPosts();