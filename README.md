<h1>Node.js: a comprehensive guide</h3>

<h2>About Node.js</h2>
<p><strong>Node.js</strong> is a <strong>cross-platform and open-source software</strong> allowing web developers (like us!) to run the programming language JavaScript outside of the web browser. 
  This allows us to do various functions that are essential to the Deeper Waters project, including: building and running local web servers, APIs, and more.
  Many of us may not know how to run---or use---Node.js; this page is a guide on how to deploy Node.js, which will allow you to run the webpage locally 
  (which is something one would not be able to do without Node.js---one would just see a website that is unable to run).</p>

<h2>Installing Node.js:</h2>
<p><a href="https://nodejs.org/en/download">Here</a> is the Node.js installation page. 
  Scroll down to where it says "Or get a prebuilt Node.js® for [OPERATING SYSTEM] running a x64 architecture, and choose your operating system."
  Then, open the wizard and install! 

  Once it is installed, go onto your terminal (whether it be <strong>Git Bash</strong>---which there is a section about incoming---or your Linux terminal.)
</p>

<h2>WINDOWS USERS: Intro to Git Bash</h2>
<p><strong>Git Bash</strong> is a Linux-type terminal page, which allows you to conduct commands in a manner similar to how one would when utilizing an operating system on the Linux kernel.
  Git Bash is <strong>EXTREMELY NECESSARY</strong> for utilizing Node.js.
  For those unfamiliar with the Linux command syntax---don't worry! All the commands will be provided in this guide.
  Git Bash is also useful when one has to clone and commit repositories on GitHub without being on the specific app GitHub Desktop. Knowing ~15 commands maximum allows you to become at least intermediate
  at the much-necessary skill of <strong>Version Control</strong>.
</p>

<h4>Version Control 101: Git Bash Edition</h4>
<p>Attached is a basic list of commands that are important in version control. It is a good idea to do these in order, though you will only have to clone the repository ONCE.</p>
  <h4>Creating Local Files</h4>
  <ul>
    <li><strong>mkdir [directory-name]</strong> -- create a new local directory</li>
    <li><strong>git init</strong> -- initiate a repository</li>
  </ul>
  <h4>Prepare Repository</h4>
  <ul>
    <li><strong>git clone [https link]</strong> -- clone a repository locally</li>
    <li><strong>cd [repo-name]</strong> -- move into repository's directory</li>
    <li><strong>git pull</strong> -- update local repository with whatever has been added to the GitHub cloud. <strong>Make sure to pull to avoid conflicts, especially if many people work on the repository at once!</strong></li>
  </ul>
  <h4>Commit Workflow</h4>
  <ul>
    <li><strong>git add * </strong> -- add ALL of your saved work to the repo</li>
    <li><strong>git add [specific-file.extension]</strong> -- add ONE SPECIFIC FILE to the repo</li>
    <li><strong>git commit -m "message"</strong> -- commit added files to the repository. 
      Note here that adding a message is REQUIRED, and you should practice committing thorough messages to keep everyone up-to-date with eachother's workflow!</li>
    <li><strong>git push</strong> -- pushes added local work up to the GitHub cloud, so we can all look at and use your work! :D</li>
  </ul>
  <h4>Branching & Switching</h4>
  <ul>
    <li><strong>git checkout -b [branch name]</strong> -- create a new branch and switch to it</li>
    <li><strong>git branch [branch name]</strong> -- create new branch</li>
    <li><strong>git checkout [branch name]</strong> -- switch to an EXISTENT branch </li>
    <li><strong>git merge [branch name]</strong> -- take current version of main branch and merge to development branch</li>
  </ul>
<p>Now that this is covered, let's get to the fun part! Yayyyy ◝(ᵔᗜᵔ)◜</p>

<h2>Running Node.js</h2>
<p>Yay let's actually run Node.js now! Yayyy!</p>
<ol>
  <li>Start by running your Linux-style command prompt of choice.</li>
  <li>Run: <strong>npm -v</strong>: it may run for a moment but should eventually give you a version: as of 11/12/2026, it is 11.19.1; do not fret if it is a different version because Node.js updates.</li>
  <li>Then, use <strong>npm i</strong>. This will install various packages. You MAY receive a message that there are security vulnerabilities; if you care about that, run <strong>npm audit fix --force</strong></li>
  <li>In our main branch, run <strong>npm run dev</strong>: if you are running this properly, you should receive a local server link. On the IDE Visual Studio Code, hover over the 
    link and do Ctrl (or Cmd) + Click to see our website's beauty in action</li>
</ol>

<h2>Conclusion</h2>
<p><strong>Congratulations!</strong> If things have gone right, you have successfully learned how to use Node.js to run our website on a local server! ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
Be proud of yourself! You have just developed a new skill that will be useful not just for this excellent project of ours that we are developing, but also in the workforce and beyond!</p>

<hr />
<p>written by Sarah of Fall '26 („• ֊ •„)</p>
