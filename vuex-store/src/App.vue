<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

      <p>{{obj.a}}</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';


export default {
  name: 'app',
  data() {
    return {
      obj: {

      }
    }
  },
  created() {
    this.obj.a = 1
  },
  mounted() {
    this.obj.a = 2;
  }

   var videoElement = document.createElement("video");
  var videoSelect = document.querySelector("select#videoSource");

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  function start() {
    if (window.stream) {
      videoElement.src = null;
      window.stream.stop();
    }
    var videoSource = videoSelect.value;
    var tw = 640 // 320 // 640 // 1280;
    var th = 480 // 240 // 480 // 720

    var hdConstraints = {
      audio: false,
      video: {
          mandatory: {
                  maxWidth: tw,
                  maxHeight: th
              },
          optional: [{
              sourceId: videoSource
          }]
      }
    };
    if (navigator.getUserMedia) {
      navigator.getUserMedia(hdConstraints, success, errorCallback);
    } else {
          errorCallback("");
      }
  }

  videoSelect.onchange = start;
  start();

  function gotSources(sourceInfos) {
    for (var i = 0; i !== sourceInfos.length; ++i) {
      var sourceInfo = sourceInfos[i];
      var option = document.createElement("option");
      option.value = sourceInfo.id;

      if (sourceInfo.kind === "video") {
        option.text = sourceInfo.label || "camera " + (videoSelect.length + 1);
        videoSelect.appendChild(option);
      } else {
        console.log("Some other kind of source: ", sourceInfo);
      }

    }
  }

  if (typeof MediaStreamTrack === "undefined") {
    alert("This browser does not support MediaStreamTrack.\n\nTry Chrome.");
  } else {
    MediaStreamTrack.getSources(gotSources);
  }

  function errorCallback(e) {
      console.log("Cant access user media", e);
  }

  function success(stream) {

      window.stream = stream;
      videoElement.src = window.URL.createObjectURL(stream);
      videoElement.onclick = function() { videoElement.play(); };
      videoElement.play(); //Here is the Error


      function getFrame() {
          requestAnimationFrame(getFrame);

          if (!videoElement.videoWidth) return;

          if (!image) {
              width = videoElement.videoWidth, height = videoElement.videoHeight;
              log("videoElement", width, height, videoElement);

              var canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              canvas.style.transform = "scale(1, 1)";

              ctx = canvas.getContext("2d");
              document.body.appendChild(canvas);

              log("start");
              image = Module._xsetup(width, height);
              log("_xsetup", image, "pointer");
              return;
          }

          ctx.drawImage(videoElement, 0, 0, width, height);
          var imageData = ctx.getImageData(0,0, width, height);
          data = imageData.data;
          gofill();
      }

      getFrame();
  // computed: {
  //   ...mapState({
  //     count: state => state.count,
  //     countAlias: 'count',
  //     computeCount(state){  
  //       console.log(this)
  //       return state.count + this.a
  //     }
  //   }),
  //   ...mapGetters([
  //     'todoArray',
  //   ]),
  //   ...mapGetters({
  //     'todoCountAlias': 'todoCount'
  //   })
  // },
  // methods: {
  //   ...mapMutations([
  //     'increase'
  //   ]),
  //   ...mapMutations({
  //     'increaseAlias': 'increase'
  //   }),
  //   ...mapActions([]),
  //   ...mapActions({

  //   }),
  //   change() {
  //     // this.$store.commit('increase');
  //     // this.$store.commit({type: 'increase', n: 1})
  //     // this.$store.commit('increase', {n: 1})
  //     this.increase({n: 1});
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
