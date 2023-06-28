<template>
  <div class="container py-5">
    <div id="loading" v-if="!list"></div>

    <div class="row" v-if="!selectedChatId">
      <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
        <h5 class="font-weight-bold mb-3 text-center text-lg-start">
          <img
            class="up-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png"
            alt="upwork-logo"
          />
        </h5>

        <ul class="list-unstyled mb-0">
          <li
            v-for="item in list"
            :key="item.id"
            class="p-2 border-bottom up-chat-item"
            @click="openChat(item.node.id)"
          >
            <a href="#!" class="d-flex justify-content-between">
              <div class="d-flex flex-row">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                  alt="avatar"
                  class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                  width="60"
                />
                <div class="pt-1">
                  <p class="fw-bold mb-0">{{ item.node.roomName }}</p>
                  <p class="small text-muted">
                    {{ truncateMessage(item.node.latestStory.message) }}
                  </p>
                </div>
              </div>
              <div class="pt-1">
                <p class="small text-muted mb-1">{{getTimeSince(item.node.latestStory.createdDateTime)}}</p>
                <!-- <span class="badge bg-danger float-end">1</span> -->
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <chat
      :chatId="selectedChatId"
      v-if="selectedChatId"
      @goBack="clearSelectedChatId"
    />
  </div>
</template>

<script>
import chat from "./chat.vue";
import timeSince from '../helpers/helpers';
export default {
  components: {
    chat,
  },
  data() {
    return {
      selectedChatId: null,
      list: null,
    };
  },
  mounted() {
    fetch(
      "https://8d0e-78-162-150-126.ngrok-free.app/rooms?" +
        new URLSearchParams({
          token: "Bearer oauth2v2_4ebae8c9336ae72076a77e30788c4be4",
        }),
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": true,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => (this.list = response?.data?.roomList?.edges))
      .catch((err) => console.error(err));
  },
  methods: {
    getTimeSince(dateObj) {
     return timeSince(dateObj);
    },
    openChat(chatId) {
      this.selectedChatId = chatId;
    },
    clearSelectedChatId() {
      this.selectedChatId = null;
    },
    truncateMessage(string = "", maxLength = 50) {
      return string.length > maxLength
        ? `${string.substring(0, maxLength)}…`
        : string;
    },
  },
};
</script>

<style scoped>
.up-chat-item:hover {
  background-color: #eee;
}
.up-logo {
  width: 100px;
}

#loading {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: hsl(131, 92%, 24%);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>