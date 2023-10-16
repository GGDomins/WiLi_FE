# WiLi (WishList)

https://wili-pi.vercel.app/

### 📄 Project Description
Welcome to the Front-End respository of 'WiLi'. WiLi is a web application that allows users to archive images and information of products or services that they wish to buy in the future.

Users can signup by using Korean social media 'KakaoTalk' and 'Naver' login APIs (facebook / google login coming up soon). They should enter additional information such as their username, date of birth and their category of interest such as 'furnitures', 'electronics', 'sports', etc.

Users are allowed to add their wish item with the image, brand name, product name, category, price, purchase link, etc. They can simply edit and delete the item that they have saved in the past as well. The user can view other user's wishlist or look up for the name of the product/brand that they want by using the search bar. Furthermore, the user can explore random-feed, which displays random products of random users that matches the category of interest that is saved in their profile.

Unlike any other similar websites, WiLi simply presents images from the user's archive in a grid layout in the home page. The user can hover over those images to view the brand/company and the product name, and also click to view the specific information for the product.

### 💻 Technology
- JavaScript (ES6)
- React
- axios
- styled-components
React's component based architecture provided better code organisation and quicker rendering by creating and using reusable components across many different pages. Additionally, WiLi required various user interaction events which caused lots of changes to the DOM. Since React uses virtual DOM to update the changes to the actual DOM, it improves performance by minimizing the cost of manipulating the DOM.

Axios was used to send and process requests and responses with the server side. Axios provides simplicity, convenience and consistency for making HTTP requests and parsing JSON responses. Also implementing an axios interceptor reduced the use of duplicating code for setting up headers for the request, which increased the speed and improved efficiency of sending the request.

Styling was done using styled-components, which allowed to write cleaner and more maintainable code as components encapsulate their styles. Plus, the styles are scoped and has its unique names, therefore there was no need to worry about naming conflicts.

### 🛠️ Lessons Learned

- Code splitting
    - The most important lesson learned from the project was code splitting. The project was fully refactored focusing on code splitting after implementing all the required functionality. Removed redundant and duplicated codes, made effective use of reusable components, kept constant variables such as the server address in a separate file, etc. This resulted 50% decrease of the project file size, which improved initial loading of the website.

- AWS S3
    - AWS S3 bucket was used to store images of the user's wish items. Currently, the client side sends a formData request to the server that contains the image and information that the user entered. The server uploads the image to the S3 bucket, then sends a response to the client side whether the upload was successful or not.
    - Implementing this logic using a 'presignedURL' could have been better, which could've allowed the client side to upload the image securely and directly to the S3 bucket instead of sending it to the server. This could have decreased the speed of uploading images, although it was not successful as the team struggled with receiving the presignedURL from S3.


- React Query & Redux
    - React Query is known as a library for fetching, caching, syncrhonizing and updating server state in a React application in a simple way. In WiLi, a custom hook 'useAsync' was implemented to handle the states (loading, error, data) of data fetching. Although, it required boilerplate code to set up the hook and the request function. Consequently, using react query could have simplified data fetching and management.
    - Redux could have been used for state management. WiLi passes state from one component to another using props, however using Redux could have been a good replacement as it makes the process easier to manage and use state variables.

### 👏 Contributers
- Server (Java / Spring): Yongjun Hong
- UI/UX (figma): Gayoun Ji
