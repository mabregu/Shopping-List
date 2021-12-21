Vue.createApp({
    data() {
        return {
            header: "Shopping List App",
            newItem: "",
            newItemHighPriority: false,
            editing: false,
            items:[
                { id: 1, label: '10 party hats', purchased: false, highPriority: true },
                { id: 2, label: '20 party hats', purchased: true, highPriority: false },
                { id: 3, label: '30 party hats', purchased: true, highPriority: false },
                { id: 4, label: '40 party hats', purchased: false, highPriority: true },
            ]
        }
    },
    computed: {
        reversedItems() {
            return this.items.slice().reverse();
        },
        characterCount() {
            return this.newItem.length;
        }
    },
    methods: {
        addItem() {
            if (this.newItem.length >= 3) {
                this.items.push({
                    id: this.items.length + 1,
                    label: this.newItem,
                    highPriority: this.newItemHighPriority
                });
                this.newItem = "";
                this.newItemHighPriority = false;
            }
        },
        editItem(state) {
            this.editing = state;
            this.newItem = "";
            this.newItemHighPriority = false;
        },
        togglePurchased(item) {
            item.purchased = !item.purchased;
        },
        clearItems() {
            this.items = [];
        },
        removeItem(item) {
            this.items = this.items.filter(i => i.id !== item.id);
        }
    }
})
.mount('#shopping-list')