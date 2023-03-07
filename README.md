# Photo Gallery Application with React-Redux

## Instructions on running the app :-

Try out the demo of the app here:
(Click to view Demo)[https://photo-gallery-udiprai.netlify.app/]

- Download the github file or clone it into your project
- Run yarn & then yarn start
- The user is expected to see the landing page as photo-gallery.
- Each of the photos in the gallery is clickable with their proper details & back button.
- The user can search for photos as per their title.
  - He/She first needs to type in the title.
  - He/She can click on the suggested title in the popop box
  - He/She needs to press **Enter key** or Click on **Search button**.
- Notice that (when searching), if the title is too long inside the popup box-
  - so I have given a maximum length for them when they are displayed

## Features:

- Easily Customizable Chakra-UI Config
- Light/Dark Mode
- Search Functionality
- Redux State Management
- Pagination
- Filter AlbumId (This will be implemented soon..)

## yarn installations

- create react-app photo-gallery --template @chakra-ui/typescript
- @chakra-ui/theme-tools
- react-router-dom
- @react-icons/all-files
- axios
- redux
- react-redux
- @reduxjs/toolkit
- redux-dev-tools-extension
- redux-logger
- @fontsource/poppins
- react-paginate

### Default Commit

- Initialize project using Create React App

### Commit 01

- git commit -m "01 - Project setup done"
  - Maintained a good folder structure
  - Frontend part done with CustomTheme
  - Configured routing with react-router-dom
  - Installed necessary yarn packages

### Commit 02

- git commit -m "02 - REST API + Redux setup + Pagination"
  - Redux part completed
  - Css with Custom theme styling
  - Implemented Pagination with React Paginate

### Commit 03

- git commit -m "03 - Search + Filter(by albumId) functionalities"

  - Used different array methods to complete the search & filter part
  - Added a Custom Outside-Click Ref to hide/show the suggestion on search
  - Added Search funtionality alongside ref to handle the UI/UX feel
  - Customized css for the site

  ### Commit 04

- git commit -m "04 - Deployed with Netlify"
  - Updated README.md file
