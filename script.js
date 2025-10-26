// Typing effect
const typedText = document.getElementById("typed-text");
const words = ["A Budding Biomedical Engineer", "A Medical Device & Surgical Robotics Enthusiast", "An Analytical Problem Solver"];
let i=0,j=0,currentWord="",isDeleting=false;
function type(){
  if(i>=words.length)i=0;
  currentWord=words[i];
  if(!isDeleting){
    typedText.textContent=currentWord.slice(0,j+1);
    j++;
    if(j===currentWord.length){isDeleting=true; setTimeout(type,1000); return;}
  } else {
    typedText.textContent=currentWord.slice(0,j-1);
    j--;
    if(j===0){isDeleting=false;i++;}
  }
  setTimeout(type,isDeleting?50:150);
}
type();

// Scroll fade-in
const faders=document.querySelectorAll('.fade-in');
const appearOptions={threshold:0.2, rootMargin:"0px 0px -50px 0px"};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Hamburger
const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('nav-links');
hamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Modal
const modal=document.getElementById("project-modal");
const modalTitle=document.getElementById("modal-title");
const modalImg=document.getElementById("modal-img");
const modalTags=document.getElementById("modal-tags");
const modalDesc=document.getElementById("modal-desc");
document.querySelectorAll(".modal-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const projectId=btn.dataset.project;
    modal.style.display="block";
    modalTitle.textContent=`Project ${projectId}`;
    modalImg.src=`project${projectId}.jpg`;
    modalTags.textContent="Tag1, Tag2";
    modalDesc.textContent="This project involved designing, prototyping, and testing the device...";
  });
});
document.querySelector(".close").addEventListener("click",()=>modal.style.display="none");
window.addEventListener("click",e=>{if(e.target==modal)modal.style.display="none";});
