<template>
  <!-- The video -->
<video autoplay muted loop id="myVideo">
  <source src="/videos/myself.m4v" type="video/mp4">
</video>

<!-- Optional: some overlay text to describe the video -->
<div class="content">
  <h1>Visual artist <a href="https://www.instagram.com/zinck.3d/">@zinck.3d</a></h1>
  <p>3D art & modeling, graphic design, sound design, video producing.</p>
</div>

</template>

<script setup></script>

<style scoped>
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  bottom: 0;
  background: rgba(87, 193, 255, 0.5);
  color: #ffffff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  padding: 20px;
}

/* unvisited link */
a:link {
  color: rgb(255, 255, 255);
}

/* visited link */
a:visited {
  color: rgb(255, 132, 202);
}

/* mouse over link */
a:hover {
  color: rgb(255, 175, 215);
}

a:link {
  text-decoration: underline;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: underline;
}
</style>
