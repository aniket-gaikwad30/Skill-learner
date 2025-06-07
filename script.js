const articles = [
  {
    title: "Learn HTML & CSS in 30 Minutes",
    content:
      "Understand the structure and styling of web pages using HTML for content and CSS for design.",
    category: "Technical",
    comments: [
      { user: "Alice", text: "Great quick guide!" },
      { user: "Bob", text: "Very helpful for beginners." },
    ],
  },
  {
    title: "Improve Your Public Speaking",
    content:
      "Learn how to speak clearly, confidently, and engage your audience with practical communication tips.",
    category: "Life Skill",
    comments: [{ user: "Charlie", text: "I'm always nervous, this helped!" }],
  },
  {
    title: "Boost Productivity with Time Blocking",
    content:
      "Learn how to schedule tasks into dedicated blocks of time to stay focused and accomplish more.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "Intro to JavaScript for Beginners",
    content:
      "Get started with JavaScript fundamentals including variables, loops, functions, and DOM manipulation.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Creative Thinking Techniques",
    content:
      "Learn how to approach problems creatively using brainstorming, mind mapping, and lateral thinking.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Time Management Essentials",
    content:
      "Master prioritizing tasks and managing your daily schedule efficiently.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "Effective Email Writing",
    content: "Write clear and professional emails for workplace communication.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Basics of Python Programming",
    content:
      "Learn Python syntax, variables, and control structures for beginners.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Stress Management Strategies",
    content: "Discover techniques to reduce stress and improve mental health.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Photography Fundamentals",
    content:
      "Learn about camera settings, composition, and lighting for better photos.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Mastering CSS Flexbox",
    content: "Understand flexbox layout to create responsive web pages.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Public Speaking Confidence",
    content: "Techniques to overcome stage fright and present with confidence.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Building a Personal Budget",
    content: "Learn to track expenses and plan your finances effectively.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Introduction to Data Analysis",
    content: "Basics of analyzing data using spreadsheets and visualization.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Design Thinking Basics",
    content: "Learn creative problem-solving through human-centered design.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Goal Setting Techniques",
    content: "Set SMART goals and develop an action plan to achieve them.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "Introduction to Git & GitHub",
    content: "Learn version control and collaboration with Git and GitHub.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Networking for Beginners",
    content:
      "Build professional connections and grow your network effectively.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Basics of Video Editing",
    content: "Edit videos using common tools and techniques.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Mind Mapping for Productivity",
    content: "Visualize ideas and plan projects using mind maps.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "Introduction to SQL",
    content: "Learn how to query databases using SQL.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Conflict Resolution Skills",
    content: "Techniques to manage and resolve conflicts effectively.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Creative Writing Basics",
    content: "Learn storytelling and writing skills for creativity.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Email Marketing Fundamentals",
    content: "Basics of creating effective email campaigns.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Meditation Techniques for Beginners",
    content: "Learn meditation to improve focus and relaxation.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "CSS Grid Layout",
    content: "Create complex layouts using CSS Grid.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Effective Teamwork",
    content: "Skills to collaborate and work well in teams.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Basics of UX Design",
    content: "Learn user experience principles for better designs.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Time Tracking Tools",
    content: "Use tools to monitor how you spend your time.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "JavaScript DOM Manipulation",
    content: "Interact with web pages dynamically using JavaScript.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Stress Relief with Exercise",
    content: "Use physical activity to reduce stress and boost mood.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Photography Editing Basics",
    content: "Enhance photos using editing software.",
    category: "Creative",
    comments: [],
  },
  {
    title: "LinkedIn Profile Optimization",
    content: "Make your LinkedIn profile stand out professionally.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "React.js Introduction",
    content: "Build dynamic user interfaces with React.js.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Creative Problem Solving",
    content: "Approach challenges with innovative solutions.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Building Healthy Habits",
    content: "Techniques to create and maintain good habits.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Effective Presentation Skills",
    content: "Deliver engaging presentations that captivate your audience.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Introduction to APIs",
    content: "Learn how to use and build APIs for software applications.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Personal Branding Basics",
    content: "Create and communicate your unique value professionally.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Storytelling for Creatives",
    content: "Tell compelling stories to connect with your audience.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Pomodoro Technique Deep Dive",
    content: "Boost focus and productivity using timed work sessions.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "CSS Animations",
    content: "Add engaging animations to web pages with CSS.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Active Listening Skills",
    content: "Improve communication by listening effectively.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Basics of Illustration",
    content: "Learn drawing and illustration fundamentals.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Email Etiquette",
    content: "Write professional and courteous emails.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Node.js Introduction",
    content: "Build backend applications using Node.js.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Creative Brainstorming Techniques",
    content: "Generate new ideas using creative methods.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Daily Planning for Success",
    content: "Plan your day to maximize productivity.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "Introduction to Cybersecurity",
    content: "Learn basic security principles to protect data.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Building Emotional Intelligence",
    content: "Develop self-awareness and empathy for better relationships.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Basics of Video Production",
    content: "Plan and shoot videos with basic techniques.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Effective Negotiation",
    content: "Learn to negotiate agreements successfully.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Introduction to TypeScript",
    content: "Add types to JavaScript for better code quality.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Creative Visualization Techniques",
    content: "Use mental imagery to enhance creativity.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Managing Remote Work",
    content: "Tips for staying productive while working remotely.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "Debugging JavaScript",
    content: "Learn techniques to find and fix bugs in code.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Stress Management Through Breathing",
    content: "Use breathing exercises to reduce anxiety.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Basics of Graphic Design",
    content: "Learn principles of design for visual communication.",
    category: "Creative",
    comments: [],
  },
  {
    title: "Time Management for Students",
    content: "Balance study and life with effective planning.",
    category: "Productivity",
    comments: [],
  },
  {
    title: "Intro to Machine Learning",
    content: "Get an overview of ML concepts and applications.",
    category: "Technical",
    comments: [],
  },
  {
    title: "Building Self-Discipline",
    content: "Develop habits to stay focused on goals.",
    category: "Life Skill",
    comments: [],
  },
  {
    title: "Creative Writing Prompts",
    content: "Jumpstart creativity with engaging writing prompts.",
    category: "Creative",
    comments: [],
  },
];

function showArticles() {
  const section = document.getElementById("articles");
  section.style.display = "block";
  document.getElementById("searchSection").style.display = "block";
  section.innerHTML =
    "<h2>Skill Articles</h2>" + articles.map(renderArticle).join("");
}

function renderArticle(article, index) {
  // Add index parameter
  const commentsHtml = article.comments
    .map(
      (comment) =>
        `<div class="comment"><strong>${comment.user}:</strong> ${comment.text}</div>`
    )
    .join("");

  return `
        <div class="article">
          <h3>${article.title}</h3>
          <p>${article.content}</p>
          <small>Category: ${article.category}</small>
          <div class="comments-section">
            <h4>Comments</h4>
            <div class="comments-list">${commentsHtml}</div>
            <div class="add-comment-form">
              <input type="text" placeholder="Your name" id="commentUserName-${index}" />
              <textarea placeholder="Add a comment..." id="commentText-${index}"></textarea>
              <button onclick="addComment(${index})">Add Comment</button>
            </div>
          </div>
        </div>
      `;
}

function showSearch() {
  document.getElementById("searchSection").style.display = "block";
  document.getElementById("articles").style.display = "block";
  searchArticles();
}

function searchArticles() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query) ||
      a.content.toLowerCase().includes(query) ||
      a.category.toLowerCase().includes(query)
  );
  const section = document.getElementById("articles");
  section.innerHTML =
    "<h2>Search Results</h2>" + filtered.map(renderArticle).join("");
}

// New function to add comments
function addComment(articleIndex) {
  const userNameInput = document.getElementById(
    `commentUserName-${articleIndex}`
  );
  const commentTextInput = document.getElementById(
    `commentText-${articleIndex}`
  );

  const userName = userNameInput.value.trim();
  const commentText = commentTextInput.value.trim();

  if (userName && commentText) {
    articles[articleIndex].comments.push({ user: userName, text: commentText });
    // Re-render the articles to show the new comment
    showArticles();
    // Clear the form fields after adding the comment
    userNameInput.value = "";
    commentTextInput.value = "";
  } else {
    alert("Please enter both your name and a comment.");
  }
}
