MELKAMU HUNEGNAW ASMARE | WEBSITE EDITING GUIDE

Website: https://melkamhun.github.io/
Repository: https://github.com/MelkamHun/melkamhun.github.io

The site uses plain HTML, CSS and JavaScript. Most content is in index.html.
GitHub Pages already publishes the main branch from the repository root.

EDIT TEXT THROUGH GITHUB
1. Sign in as MelkamHun and open the repository above.
2. Open index.html and click the pencil button (Edit this file).
   Direct link: https://github.com/MelkamHun/melkamhun.github.io/edit/main/index.html
3. Find the text to change with Ctrl+F in the editor. If browser search opens,
   click inside the code editor and try again.
4. Edit the words between HTML tags. Preserve surrounding tags, quotes, class
   names and section IDs. Example: <p>This is my updated biography.</p>
5. For a link, edit the address inside href="..." and the visible label:
   <a href="https://example.org/">Organization name</a>
6. Review the changes. GitHub's Preview or changes view reviews the file;
   it is not a complete preview of the rendered website.
7. Click Commit changes, enter a message such as "Update biography", select
   Commit directly to the main branch, then confirm Commit changes.
8. Check the deployment in the repository's Actions tab. Once it succeeds,
   visit your website. Publication can take up to 10 minutes. Press Ctrl+F5
   if the browser still shows the old version.

WHERE TO FIND CONTENT IN INDEX.HTML
Search for these section markers:
  id="about"         Biography, funding and collaborations
  id="vacancies"     Open PhD positions and deadlines
  id="news"          Recent highlights
  id="research"      Research interests
  id="publications"  Publications and research-area filters
  id="projects"      Projects and mobility programmes
  id="supervision"   Doctoral researchers, roles, dates and topics
  id="teaching"      Courses and course links
  id="experience"    Employment history
  id="education"     Qualifications and PhD specialization
  id="service"       Memberships, grants, awards and recognition
  id="contact"       Contact information
The sidebar is inside <aside class="profile">.

ADDING ENTRIES
- Publications: copy a complete <li data-topics="...">...</li> entry inside
  publication-list. Edit the year, title, authors, venue and links. Topic codes
  are image, hci, signals, heart, eye and global. Use spaces between multiple
  codes, for example data-topics="image heart". Update the filter-count numbers
  and initial publication-status total. The script recalculates the visible
  total when a filter is clicked.
- Projects: copy a complete <details>...</details> entry within a project-list.
  Edit the title, description, dates and role. Remove the copied
  data-project-source attribute from the new entry; it identifies the original
  imported source document.
- Supervision: copy a complete <li>...</li> entry into the appropriate
  supervision-list. Update the introductory role totals when needed.
- Awards: copy a complete <li>...</li> entry inside service-list.
- Vacancies: edit the visible deadline and datetime attribute. Remove or mark
  closed positions and update Applications open. Expiry is not automatic.
- Write &amp; for an ampersand in HTML text. Use commas, colons or parentheses
  instead of em dashes. Year ranges can retain their existing punctuation.

REPLACE YOUR CV OR PORTRAIT
1. Prepare an updated PDF or JPG on your computer.
2. Open the assets folder in the GitHub repository.
3. Choose Add file > Upload files. Upload the replacement using the same name:
   Melkamu_Asmare_Academic_CV.pdf
   melkamu-asmare.jpg
4. Commit to main and wait for deployment.
5. Check the CV download or portrait on the live website.
The PDF is separate: changing index.html does not update the CV automatically.

OPTIONAL LOCAL PREVIEW
Download the latest repository with Code > Download ZIP and extract it.
Edit index.html in a plain-text editor such as VS Code or Notepad, saving as
UTF-8. Open index.html in your browser to preview it. Upload changed files to
the matching repository folders and commit. Always start from the latest
GitHub files to avoid overwriting newer changes with an older local copy.

OTHER FILES
assets/style.css controls layout, colours and spacing.
assets/main.js controls publication filters and navigation highlighting.
Neither needs editing for ordinary text changes. Keep .nojekyll in place.

CORRECT A MISTAKE
Open the file on GitHub and click History. Open a revision from before the
mistake, view that version of the file and copy the correct text. Return to
the current main version, restore the affected text and commit the correction.

OFFICIAL HELP
https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

DESIGN AND CONTENT
Original design inspired by https://pituohai.github.io/.
Content includes owner-approved research, supervision and funding achievements.
Private application documents and correspondence are not published. No
analytics, trackers, remote fonts, frameworks or build dependencies are used.
Core content and project disclosures work without JavaScript.
