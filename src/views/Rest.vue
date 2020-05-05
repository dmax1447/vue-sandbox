<template>
  <div class="about">
    <h1>This is an REST API test page</h1>

    <v-btn color="primary" @click="formNewVisible = !formNewVisible">create contact</v-btn>

    <div v-if="formNewVisible" class="form">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="createContact"
      >
        <h3>Create new contact</h3>
        <v-text-field
          v-model="newContact.name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="newContact.surname"
          :counter="10"
          :rules="surnameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="newContact.phone"
          :rules="phoneRules"
          label="Phone"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          type="submit"
        >
          Submit
        </v-btn>

      </v-form>
    </div>

    <div v-if="formUpdateVisible" class="form">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <h3>Update contact</h3>
        <v-text-field
          v-model="currentContact.name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="currentContact.surname"
          :counter="10"
          :rules="surnameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="currentContact.phone"
          :rules="phoneRules"
          label="Phone"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="updateContact(currentContact.id)"
        >
          Submit
        </v-btn>

      </v-form>
    </div>

    <div class="cardList">
      <table>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="contact in contactList" :key="contact.id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.surname }}</td>
          <td>{{ contact.phone }}</td>
          <td>
            <v-btn color="primary" @click="showContactUpdateForm(contact.id)">edit</v-btn>
            <v-btn color="danger" @click="deleteContact(contact.id)">delete</v-btn>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>


<script>

import axios from 'axios';

const baseURL = 'http://localhost:3000';

const myHeaders = {
  'Content-Type': 'application/json',
};

export default {
  name: 'rest',
  mounted() {
    axios.get(`${baseURL}/api/contacts`)
      .then((response) => {
        this.contactList = response.data;
      });
  },
  data: () => ({
    loaded: null,
    newContact: {
      name: '',
      surname: '',
      phone: '',
    },
    currentContact: {
      name: '',
      surname: '',
      phone: '',
    },
    formNewVisible: false,
    formUpdateVisible: false,
    formHeader: '',
    valid: null,
    contactList: [],
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    surnameRules: [
      (v) => !!v || 'Surname is required',
      (v) => (v && v.length <= 10) || 'Surname must be less than 10 characters',
    ],
    phoneRules: [
      (v) => !!v || 'Phone is required',
      (v) => /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(v) || 'Phone number must be valid',
    ],

  }),
  methods: {
    createContact() {
      console.log('create new', this.newContact);
      const data = JSON.stringify(this.newContact);
      axios.post(`${baseURL}/api/contacts`, data, { headers: myHeaders });
    },
    showNewContactForm() {
      this.formNewVisible = !this.formNewVisible;
    },
    showContactUpdateForm(id) {
      this.formUpdateVisible = true;
      this.updateContact = this.contactList.find((contact) => contact.id === id);
    },
    deleteContact(id) {
      axios.delete(`${baseURL}/api/contacts/${id}`);
    },
    updateContact(contact) {
      axios.put(`${baseURL}/api/contacts/${contact.id}`, contact);
    },
  },
};
</script>

<style>
  .form {
    width: 300px;
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    z-index: 1;
    padding: 2rem
  }
</style>
