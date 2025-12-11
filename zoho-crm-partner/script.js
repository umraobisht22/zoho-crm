document.querySelector("#myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  //Add UTM to document
  function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var url = window.location.href;
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Populate hidden fields with UTM parameters from the URL
  document.getElementById('utm_id').value = getParameterByName('utm_id');
  document.getElementById('utm_source').value = getParameterByName('utm_source');
  document.getElementById('utm_medium').value = getParameterByName('utm_medium');
  document.getElementById('utm_campaign').value = getParameterByName('utm_campaign');
  document.getElementById('utm_term').value = getParameterByName('utm_term');
  document.getElementById('utm_content').value = getParameterByName('utm_content');

  // Collect form data


  // Add hs_context to the formData

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  let formData = new FormData(this);

  
  const hsContext = {
  hutk: getCookie('hubspotutk'), // include the HubSpot user token if available
  pageUrl: window.location.href, // captures the current page URL
  pageName: document.title // captures the page title
  };

  // Add hs_context to formData as a JSON string
  formData.append('hs_context', JSON.stringify(hsContext));

  // Send post request to the server
  fetch(
    "https://forms.hubspot.com/uploads/form/v2/23736002/688d8b8a-37c8-4bf1-bd94-9e2e31d4c0d8",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        // Show success message
        document.querySelector("#thankYou").innerHTML =
          "Thank you for submitting the form!";
        document.querySelector("#thankYou").style.color = "green";
        document.querySelector("#thankYou").style.display = "block";
      } else {
        // Show error message
        document.querySelector("#thankYou").innerHTML =
          "An error occurred while submitting the form. Please try again later.";
        document.querySelector("#thankYou").style.color = "red";
        document.querySelector("#thankYou").style.display = "block";
      }

      // Remove form
      this.remove();
    })
    .catch((error) => {
      console.error(error);
      // Show error message
      document.querySelector("#thankYou").innerHTML =
        "Something went wrong, please try again later.";
      document.querySelector("#thankYou").style.color = "red";
      document.querySelector("#thankYou").style.display = "block";
      // Remove form
      this.remove();
    });
});
// Slider Movements
const moveSliderToLeft = () => {
  const scrollableElement = document.querySelector("#sliderCont");

  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth < 760 ? 280 : 520;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const moveSliderToRight = () => {
  const scrollableElement = document.querySelector("#sliderCont");

  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth < 760 ? -280 : -520;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

// Slider Movements
const moveSliderToLeft2 = () => {
  console.log("hi2");

  const scrollableElement = document.querySelector("#gridSlider");
  console.log(scrollableElement);

  const screenWidth = window.innerWidth;
  const scrollAmount = 400;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const moveSliderToRight2 = () => {
  console.log("hi1");
  const scrollableElement = document.querySelector("#gridSlider");
  console.log(scrollableElement);

  const screenWidth = window.innerWidth;
  const scrollAmount = -400;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;

const slidesContent = [
  {
    left: "Blue Star's sales teams now enjoy a better grip on their day-to-day activities.",
    right:"“Zoho CRM helps us bring our organisation together—pieces fragmented across emails, notebooks and different applications are now centralised. Zoho CRM is a game changer for us and for Indian businesses of the digital era.”",
    author: "Suresh Iyer,",
    post: "CIO, Blue Star Limited",
    src: "./zoho-crm-partner/brand18.webp",
  },
  {
    left: "India’s largest online Investment Platform Increases Productivity 5X by Implementing Zoho CRM",
    right: "“IAs a CRM manager, I can plug myself in directly to the sales team and make sure they never slip out of deals, with the help of working tips provided by Zia. In addition, Zoho Support is amazing. They have assisted me any time I needed help.”",
    author: "Divya Sundaraju,",
    post: "Assistant manager - Learning & Development, FundsIndia",
    src: "./zoho-crm-partner/fundsindia.webp",
  },
  {
    left: "A CRM deployment of this magnitude would normally require 18 to 24 months.",
    right: "“The launch of Zoho CRM is one of TAFE’s significant initiatives to drive digital transformation and growth. The solution with Zoho is very innovative and truly digital. There was a complete re-engineering of processes done for simplification, and Zoho team completed this project in an astounding six month.”",
    author: "Shobhana Ravi,",
    post: "Chief IT, Innovation and Learning Officer, TAFE",
    src: "./zoho-crm-partner/brand8.webp",
  },
  {
    left: "Agappe Diagnostics achieves complete digital business transformation with Zoho CRM",
    right: "“Zoho CRM offers us technology that allows us to be more proactive and insight-driven, with all information in a single place. With our complete business under control, our productivity is up by 80% in the last year that we have been using Zoho.”",
    author: "Thomas John,",
    post: "Managing Director, Agappe",
    src: "./zoho-crm-partner/brand4.webp",
  },
];

function updateSlide(index) {
    document.getElementById("left-paragraph").innerText = slidesContent[index].left;
    document.getElementById("right-paragraph").innerText = slidesContent[index].right;
    document.getElementById("right-author").innerText = slidesContent[index].author;
    document.getElementById("right-author-post").innerText = slidesContent[index].post;
    document.getElementById("right-image").src = slidesContent[index].src;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active1", i === index);
    });
}

prevButton.addEventListener("click", () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesContent.length - 1;
    updateSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
    currentSlide = currentSlide < slidesContent.length - 1 ? currentSlide + 1 : 0;
    updateSlide(currentSlide);
});

indicators.forEach((indicator) => {
    indicator.addEventListener("click", (event) => {
        currentSlide = parseInt(event.target.getAttribute("data-slide"));
        updateSlide(currentSlide);
    });
});

// Initialize the first slide
updateSlide(currentSlide);


 // Get the modal
 var modal = document.getElementById("modal");

 // Get all buttons that open the modal
 var btns = document.querySelectorAll(".redbutton");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on a button, open the modal
 btns.forEach(function(btn) {
   btn.onclick = function(event) {
     event.preventDefault();
     modal.style.display = "flex";
   }
 });

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }











document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector('.carousel-inner');
  const slides = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control-prev');
  const nextBtn = document.querySelector('.carousel-control-next');

  let currentIndex = 0;
  const totalSlides = slides.length;

  /* ===== AUTOPLAY ===== */
  const intervalTime = 3000;
  let autoSlide = setInterval(() => {
    updateSlider(currentIndex + 1);
  }, intervalTime);

  function updateSlider(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;

    const slideWidth = slides[0].offsetWidth; // actual width of each slide in px
    const offset = -currentIndex * slideWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener('click', () => {
    updateSlider(currentIndex - 1);
    clearInterval(autoSlide)
    autoSlide = setInterval(() => updateSlider(currentIndex + 1), intervalTime);
  });

  nextBtn.addEventListener('click', () => {
    updateSlider(currentIndex + 1);
    clearInterval(autoSlide)
    autoSlide = setInterval(() => updateSlider(currentIndex + 1), intervalTime);
  });

  

  // Pause autoplay on hover
  const carouselElem = document.querySelector('.carousel-inner');
  carouselElem.addEventListener('mouseenter', () => clearInterval(autoSlide));
  carouselElem.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => updateSlider(currentIndex + 1), intervalTime);
  });

  // Recenter on window resize (important if responsive)
  window.addEventListener('resize', () => updateSlider(currentIndex));
});

