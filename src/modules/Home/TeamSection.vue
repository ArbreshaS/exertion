<template>
  <v-container fluid class="px-12" style="max-width: 1500px;">
    <h3 class="contact-title">Our <span>Team</span></h3>
    <div class="container">
      <div class="box" v-for="member in team" :key="member.id">
        <img :src="member.src">
        <div class="overlay">
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
          <div class="social-icons">
            <a v-if="member.social.facebook" :href="member.social.facebook" target="_blank">
              <font-awesome-icon class="social-icon" :icon="['fab', 'facebook']" />
            </a>
            <a v-if="member.social.twitter" :href="member.social.twitter" target="_blank">
              <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" />
            </a>
            <a v-if="member.social.pinterest" :href="member.social.pinterest" target="_blank">
              <font-awesome-icon class="social-icon" :icon="['fab', 'pinterest']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-5.jpg";

export default {
  data() {
    return {
      team: [
        {
          id: 1, src: team1, name: "Nexhmedin Johnson", role: "Lead Architect",
          social: {
            facebook: "https://facebook.com/david",
            twitter: "https://twitter.com/david",
            pinterest: "https://pinterest.com/"
          }
        },
        {
          id: 2, src: team2, name: "Bob Smith", role: "Interior Designer",
          social: {
            facebook: "https://facebook.com/david",
            twitter: "https://twitter.com/david",
            pinterest: "https://pinterest.com/"
          }
        },
        {
          id: 3, src: team3, name: "Carol White", role: "Project Manager",
          social: {
            facebook: "https://facebook.com/david",
            twitter: "https://twitter.com/david",
            pinterest: "https://pinterest.com/"
          }
        },
        {
          id: 4, src: team4, name: "David Brown", role: "Junior Architect",
          social: {
            facebook: "https://facebook.com/david",
            twitter: "https://twitter.com/david",
            pinterest: "https://pinterest.com/"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
p {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
}

.container .box {
  position: relative;
  width: 280px;
  height: 400px;
  transition: 0.5s;
  overflow: hidden;
}

.contact-title {
  color: #fff;
  font-size: 36px;
  margin-top: 50px;
}

.contact-title span {
  color: #C8B560;
}

.container .box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  object-fit: cover;
}

.container .box:before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 50%;
  height: 100%;
  background: #f0f2f0;
  z-index: 1;
  transition: 0.5s;
}

.container .box:after {
  content: "";
  opacity: 0.9;
  position: absolute;
  bottom: -100%;
  right: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  z-index: 1;
  transition: 0.5s;
}

.container:hover .box:before {
  top: 0;
}

.container:hover .box:after {
  bottom: 0;
  transition-delay: 0.5s;
}

.container .box:hover:before {
  top: -100%;
}

.container .box:hover:after {
  bottom: -100%;
}

.container .box .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s;
}

.container .box:hover .overlay {
  opacity: 1;
}

.container .box .overlay h3 {
  margin: 0;
  padding: 0.5rem 0;
  font-size: 1.5rem;
}

.container .box .overlay p {
  margin: 0;
  padding: 0.5rem 0;
  font-size: 1.2rem;
}

.container .box .overlay .social-icons {
  display: flex;
  gap: 10px;
}

.container .box .overlay .social-icons a {
  color: #fff;
  font-size: 1.2rem;
  margin: 0 10px;
}
</style>
