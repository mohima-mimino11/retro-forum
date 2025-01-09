const loadPosts = async () =>{
  const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts`);
  const data = await res.json();
  const posts = data.posts;
  // console.log(posts);
  displayPosts(posts)
}

const displayPosts = (posts) =>{
  // console.log(posts);
  
  posts.forEach(post =>{
    console.log(post);
    
    const allPosts = document.getElementById('all-posts');
    const postDiv = document.createElement('div');
  
    postDiv.innerHTML = `
    <div class="mt-12 bg-[#F3F3F5] w-[772px] rounded-3xl flex   items-center gap-6">
      <div>
        <img src="${post.image}" class="w-[72px] h-[72px] ml-10 mb-[260px] mt-10 rounded-2xl">
      </div>
      <div class="space-y-3 mb-[250px] mt-10">
        <div class="flex gap-5">
          <p class="font-inter text-sm font-medium ">#${post?.category}</p>
          <p class="font-inter text-sm font-medium ">Author: ${post?.author?.name}</p> 
        </div>
        <h2 class="text-xl mb-[200px] ">Title: ${post?.title}</h2>
      </div>
      
    
      
     
    </div>
    
    `
    allPosts.appendChild(postDiv);

  })
 

} 

loadPosts()