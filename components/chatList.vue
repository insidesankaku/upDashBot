<template>
  <div class="container py-5">
    <div class="row" v-if="!selectedChatId">
      <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
        <h5 class="font-weight-bold mb-3 text-center text-lg-start">
          Upwork Chats:
        </h5>

            <ul class="list-unstyled mb-0">
              <li
                v-for="item in list"
                :key="item.id"
                class="p-2 border-bottom"
                style="background-color: #eee"
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
                      <p class="small text-muted">{{ item.node.topic }}</p>
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="small text-muted mb-1">Just now</p>
                    <span class="badge bg-danger float-end">1</span>
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
    fetch("https://ea9c-78-162-150-126.ngrok-free.app/rooms?" + new URLSearchParams({ token: "Bearer oauth2v2_7a4e0222c15d0a66af69759ad21d7730"}), {
      method: "GET",
     headers: {
      'ngrok-skip-browser-warning': true
      }
    }).then((response) => response.json())
      .then((response) => this.list = response?.data?.roomList?.edges)
      .catch((err) => console.error(err));
  },
  methods: {
    openChat(chatId) {
      this.selectedChatId = chatId;
      console.log(chatId);
    },
    clearSelectedChatId() {
      this.selectedChatId = null;
    },
  },
};
</script>

