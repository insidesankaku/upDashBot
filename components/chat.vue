<template>
  <div class="col-md-6 col-lg-7 col-xl-8" v-if="room">
    <button class="btn btn-info back-btn" @click="goBack()">Back</button>
    <ul class="list-unstyled">
      <h5 class="font-weight-bold mb-3 text-center text-lg-start">
        {{ room.roomName }}
      </h5>

      <li
        class="d-flex justify-content-between mb-4"
        v-for="message in messages.slice().reverse()"
        :key="message.node.messageId"
      >
        <img
          v-if="shortSenderName === message.node.user.name"
          :src="message.node.user.photoUrl"
          alt="avatar"
          class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
          width="60"
          loading="lazy"
        />
        <div class="card" v-if="shortSenderName === message.node.user.name">
          <div class="card-header d-flex justify-content-between p-3">
            <p class="fw-bold mb-0 margin-right-5">
              {{ message.node.user.name }}
            </p>
            <p class="text-muted small mb-0">
              <i class="far fa-clock"></i>
              {{ getTimeSince(message.node.createdDateTime) }} ago
            </p>
          </div>
          <div class="card-body">
            <p class="mb-0">
              {{ message.node.message }}
            </p>
          </div>
        </div>

        <div
          class="card w-100"
          v-if="shortSenderName !== message.node.user.name"
        >
          <div class="card-header d-flex justify-content-between p-3">
            <p class="fw-bold mb-0">{{ message.node.user.name }}</p>
            <p class="text-muted small mb-0 margin-right-5">
              <i class="far fa-clock"></i>
              {{ getTimeSince(message.node.createdDateTime) }} ago
            </p>
          </div>
          <div class="card-body">
            <p class="mb-0">
              {{ message.node.message }}
            </p>
          </div>
        </div>
        <img
          v-if="shortSenderName !== message.node.user.name"
          :src="message.node.user.photoUrl"
          alt="avatar"
          class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
          width="60"
          loading="lazy"
        />
      </li>

      <li class="bg-white mb-3">
        <div class="form-outline">
          <textarea
            class="form-control"
            id="textAreaExample2"
            v-model="message"
            rows="3"
          ></textarea>
          <label class="form-label" for="textAreaExample2">Message</label>
        </div>
      </li>
      <button
        type="button"
        class="btn btn-primary btn-rounded float-end"
        @click="sendMessage"
      >
        Send
      </button>
    </ul>
  </div>
  <div v-else id="loading"></div>
</template>

<script>
import timeSince from "../helpers/helpers";
export default {
  props: {
    chatId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      room: null,
      message: null,
      mesageId: null,
    };
  },
  computed: {
    messages() {
      return this.room.stories.edges;
    },
    shortSenderName() {
      const roomName = this.room.roomName;

      return `${roomName.split(" ")[0]} ${roomName.split(" ")[1][0]}.`;
    },
  },
  methods: {
    goBack() {
      this.$emit("goBack", true);
    },
    getTimeSince(dateObj) {
      return timeSince(dateObj);
    },
    addMessageToChat(messageData) {
      this.room.stories.edges.unshift({
        node: {
          createdDateTime: messageData.createRoomStory.createdDateTime,
          id: messageData.createRoomStory.id,
          message: this.message,
          messageId: this.messageId,
          storyTemplate: null,
          titleTemplate: null,
          user: {
            name: messageData.createRoomStory.user.name,
            photoUrl: messageData.createRoomStory.user.photoUrl,
            id: messageData.createRoomStory.user.id,
          },
        },
      });

      this.message = "";
      this.messageId = null;
    },
    sendMessage() {
      if (!this.message) {
        return;
      }

      this.mesageId = "id" + Math.random().toString(19).slice(2);

      fetch(
        "https://8d0e-78-162-150-126.ngrok-free.app/rooms/" +
          this.chatId +
          "/stories",
        {
          method: "POST",
          headers: {
            "ngrok-skip-browser-warning": true,
            Authorization: "Bearer oauth2v2_4ebae8c9336ae72076a77e30788c4be4",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: this.message,
            messageId: this.mesageId,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.data) {
            this.addMessageToChat(response.data);
          }
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    fetch(
      "https://8d0e-78-162-150-126.ngrok-free.app/rooms/" +
        this.chatId +
        "/stories?" +
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
      .then((response) => (this.room = response?.data?.room))
      .catch((err) => console.error(err));
  },
};
</script>
<style scoped>
.margin-right-5 {
  margin-right: 5px;
}
.back-btn {
  margin-bottom: 20px;
}
</style>
