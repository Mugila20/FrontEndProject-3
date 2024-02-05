//  function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
//   }
  
//   function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
//   }
/* Reset default margin and padding */
body, ul {
  margin: 0;
  padding: 0;
}

/* Style the sidebar */
.sidebar {
  width: 200px;
  height: 100vh; /* 100% viewport height */
  background-color: #333;
  color: #fff;
  float: left; /* Align to the left */
}

.sidebar ul {
  list-style: none;
  padding: 20px;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  color: #fff;
  text-decoration: none;
}

/* Style the main content area */
.content {
  margin-left: 220px; /* Adjust according to sidebar width */
  padding: 20px;
}

/* Style the horizontal bar */
.horizontal-bar {
  width: 100%;
  height: 50px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
