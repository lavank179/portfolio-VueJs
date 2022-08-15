<template>
  <section align="center" id="home">
    <div id="title">
      <p>Hi, I'm {{ personal.firstName }}.</p>
      <p class="typewrite" data-period="2000">
        <span class="wrap"></span>
      </p>
    </div>
    <div id="socialIcons">
      <v-list-item
        v-for="(val, i) in social"
        class="d-inline"
        :key="i"
        @mouseenter="fadeIn($event)"
        @mouseleave="fadeOut($event)"
      >
        <i :class="val.icon" class="hover-item" @click="redirect(val.link)"></i>
      </v-list-item>
    </div>
    <div align="center">
      <v-img
        src="https://img.icons8.com/fluent/48/000000/long-arrow-down.png"
        alt="fluent-down-arrow"
        id="down-arrow"
        href="#About"
        v-smooth-scroll
      ></v-img>
    </div>
  </section>
</template>

<script>
export default {
  props: ["details"],
  data() {
    return {
      personal: [],
      social: [],
    };
  },
  methods: {
    fadeIn(e) {
      e.target.style.opacity = "0.7";
    },
    fadeOut(e) {
      e.target.style.opacity = "1";
    },
    redirect(k) {
      window.open(k, "_blank");
    },
  },
  created() {
    this.social = this.details.socialAccounts;
    this.personal = this.details.personal;
    let heading = this.details.personal.heading;

    //sffvs
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };
    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
      var that = this;
      var delta = 200 - Math.random() * 100;
      if (this.isDeleting) {
        delta /= 2;
      }
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
      setTimeout(function () {
        that.tick();
      }, delta);
    };
    window.onload = function () {
      heading = heading.slice(1, heading.length-1);
      document.querySelector(".typewrite").dataset.type = heading;
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  },
};
</script>
<style lang="scss" scoped>
@import "home.scss";
</style>