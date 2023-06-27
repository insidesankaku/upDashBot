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
      list: [
        {
          node: {
            id: "room_2f351115151d45cea2c9a6ae5cd37918",
            roomName: "Randolph Rosenbaum",
            topic: "Forward Mobility Analyst",
          },
        },
        {
          node: {
            id: "room_a7bd1c7352e0c6fd95015f1dee7e49ff",
            roomName: "Randolph Rosenbaum",
            topic: "Forward Mobility Analyst",
          },
        },
        {
          node: {
            id: "room_7c7ec3a47e9e1a5f2d353e8c0f71d856",
            roomName: "Latonya Frami",
            topic: "Forward Mobility Analyst",
          },
        },
        {
          node: {
            id: "room_d1620ebce59ced4e65959a3cea8bd3fd",
            roomName: "Jewell Bednar",
            topic: "Forward Mobility Analyst",
          },
        },
        {
          node: {
            id: "room_6c046a6b92578bb4484d3265b5d0a1e0",
            roomName: "Jewell Bednar",
            topic: "Forward Mobility Analyst",
          },
        },
        {
          node: {
            id: "room_224a070ea9ccd4767dafb34ad53e2fc7",
            roomName: "Gregory Balistreri",
            topic: "Forward Mobility Analyst",
          },
        },
        {
          node: {
            id: "room_634fce71b734edfaf46da3b63db2a509",
            roomName: "Denis FromIndia",
            topic: "Forward Mobility Analyst",
          },
        },
        {
          node: {
            id: "room_89bf05cc376c59fddd3682a3eea747e1",
            roomName: "Vernie Bergstrom",
            topic: "test manual review",
          },
        },
        {
          node: {
            id: "room_040a4e34c0c3dc9c06fa7773f0f77f73",
            roomName: "Ronnie Runolfsson",
            topic: "test manual review",
          },
        },
        {
          node: {
            id: "room_7f9dfbda6cef32e74becc6054e745235",
            roomName: "Melodie Hackett",
            topic: "Test manual review",
          },
        },
      ],
    };
  },
  //   headers: {
  //     Accept: "application/json",
  //     Authentication: "Bearer Token",
  //     "Bearer": "oauth2v2_7a4e0222c15d0a66af69759ad21d7730",
  //   },

  mounted() {
    fetch("https://76eb-78-162-150-126.ngrok-free.app/rooms?" + new URLSearchParams({ token: "Bearer oauth2v2_7a4e0222c15d0a66af69759ad21d7730"}), {
      method: "GET",
     headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
      }
    }).then((response) => response.json())
      .then((response) => console.log(response))
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

