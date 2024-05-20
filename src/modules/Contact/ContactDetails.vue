<template>
  <div class="container">
    <v-container>
      <h2 class="complete-heading">Let's grab a coffee and jump on <br>conversation <span class="chat-text">chat with us.</span></h2>
      <form class="contact-form">
        <v-row>
          <v-col cols="12" md="4">
            <div class="form-group">
              <input type="text" id="name" placeholder="Name" name="name" required>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="form-group">
              <input type="email" id="email" placeholder="Email*" name="email" required>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="form-group">
              <input type="text" id="subject" placeholder="Subject" name="subject">
            </div>
          </v-col>
        </v-row>
        <div class="form-group">
          <textarea id="message" name="message" placeholder="Message*" rows="4" required></textarea>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </v-container>
  </div>
</template>

<style scoped>
.container {
  background-color: #131313;
  color: white;
  padding: 20px;
}

.complete-heading {
  font-size: 2.1em; 
  margin-bottom: 50px;
}

.intro {
  font-size: 1.5em;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 20px; 
  border: 1px solid #ccc;
  background-color: #343434;
}

button {
  padding: 10px 40px; 
  background-color: #C8B560; 
  color: #000;
  border: none; 
  cursor: pointer;
}

.chat-text {
  color: #C8B560; 
  margin-top: 20px; 
}
</style>
