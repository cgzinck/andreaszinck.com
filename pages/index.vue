<template>
  <head>
  <link rel="icon" type="image/png" href="/assets/videos/icon.png">
</head>

  <!-- The video -->
<video autoplay muted loop id="myVideo">
  <source src="~/assets/videos/myself.mp4" type="video/mp4">
</video>
<div class="loader">Loading...</div>
<div class="Construction">
  <h1>WEBSITE BEING DEVELOPED</h1>
</div>
<!-- Optional: some overlay text to describe the video -->
<div class="content">
  <h1>Visual artist <a href="https://www.instagram.com/zinck.3d/">@zinck.3d</a></h1>
  <p class="hej"><small>3D art & modeling, graphic design, sound design, video editing, livestreaming</small></p>
</div>

</template>

<script setup>const newLocal = "~/assets/videos/icon.png";
</script>

<style scoped>
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

@font-face {
  font-family: 'UnivaNova-LightItalic';
  src: url(assets\fonts\UnivaNova-LightItalic.ttf);
}

@font-face {
  font-family: 'UnivaNova-SemiBoldItalic';
  src: url(assets\fonts\UnivaNova-SemiBoldItalic.ttf);

}

/* Add some content at the bottom of the video/page */
.content {
  display: flexbox;
  position: fixed;
  bottom: 0;
  background: rgba(87, 193, 255, 0.5);
  color: #ffffff;
  font-family: UnivaNova-SemiBoldItalic;
  font-size:250%;
  width: 100%;
  padding: 20px;
  line-height: 50%;
}

.Construction {
  position:relative;
  color:#fcfcfc;
  font-family: UnivaNova-SemiBoldItalic;
  margin: auto;
  width: 50%;
  text-align: center;
  display:flexbox
  
}

.hej {
font-family:UnivaNova-LightItalic;
}
/* unvisited link */
a:link {
  color: rgb(255, 255, 255);
}

/* visited link */
a:visited {
  color: rgb(253, 162, 181);
}

/* mouse over link */
a:hover {
  color: rgb(255, 175, 215);
}

a:link {
  text-decoration: none;
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

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

</style>
